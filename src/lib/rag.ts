import db from './db';
// Define "Bank Standard" Enums to prevent hallucination bugs
import { CostTier, TechnicalLevel } from '@prisma/client';

export type UserConstraints = {
    maxCost?: CostTier; // e.g., "Only show me Free tools"
    maxTechLevel?: TechnicalLevel; // e.g. "I can't code"
    requireLegalBuffer?: boolean; // If true, filter by LFPDPPP/GDPR
    categorySlug?: string; // "crm", "legal"
};

/**
 * THE RAG ENGINE (Structured Retrieval)
 * Instead of vector search, we use SQL filters for precision.
 * Vectors are great for "vibes", SQL is mandatory for compliance.
 */
export async function searchTools(objective: string, constraints: UserConstraints = {}) {
    // 1. Build the Dynamic Prisma Query Object
    const whereClause: any = {
        // Basic Active Check
        // isDeprecated: false (if we add this column later)
    };

    // 2. Apply Security Filters (The "Bank" Layer)
    if (constraints.requireLegalBuffer) {
        whereClause.OR = [
            { isLfpdpppCompliant: true }, // Mexico Law
            { isGdprCompliant: true }, // EU Law
        ];
    }

    // 3. Apply Business Filters (The "Consultant" Layer)
    if (constraints.maxTechLevel) {
        // If user says "Low Code", show NO_CODE + LOW_CODE. Hide PRO_CODE.
        // Logic: Enum order usually matters, but here we can be explicit.
        if (constraints.maxTechLevel === 'NO_CODE') {
            whereClause.technicalLevel = 'NO_CODE';
        } else if (constraints.maxTechLevel === 'LOW_CODE') {
            whereClause.technicalLevel = { in: ['NO_CODE', 'LOW_CODE'] };
        }
    }

    // 4. Apply Category Filter (The "Expert" Layer)
    if (constraints.categorySlug) {
        whereClause.categories = {
            some: {
                slug: constraints.categorySlug,
            },
        };
    }

    // 5. Execute the Query (Single-Shot Inference)
    console.log(`[Axkan RAG] Searching for Tools: "${objective}" with constraints:`, constraints);

    const tools = await db.tool.findMany({
        where: whereClause,
        include: {
            affiliateLinks: true, // Fetch money logic
            categories: true,
        },
        orderBy: {
            // Prioritize Compliance then Cost
            costTier: 'asc',
        },
        take: 5, // Top 5 tools only to reduce decision paralysis
    });

    return tools;
}

/**
 * STRATEGY SEARCH ENGINE (The "How-To" Layer)
 * Finds actionable workflows (Strategies) that match the user's level.
 */
export async function searchStrategies(objective: string, constraints: UserConstraints = {}) {
    const whereClause: any = {};

    // 1. Difficulty Filter
    if (constraints.maxTechLevel) {
        if (constraints.maxTechLevel === 'NO_CODE') {
            whereClause.difficulty = 'NO_CODE';
        } else if (constraints.maxTechLevel === 'LOW_CODE') {
            whereClause.difficulty = { in: ['NO_CODE', 'LOW_CODE'] };
        }
    }

    // 2. Cost Filter (Strategy Implementation Cost)
    if (constraints.maxCost) {
        // Logic to filter strategies based on cost
        // For now, simple direct match or "FREE" preference
        if (constraints.maxCost === 'FREE') {
            whereClause.costTier = 'FREE';
        }
    }

    // 3. Text Search (Simulation of Semantic Search)
    // In a real production RAG, this would use vector embeddings.
    // For now, we use a basic keyword match on title/description.
    whereClause.OR = [
        { title: { contains: objective, mode: 'insensitive' } },
        { description: { contains: objective, mode: 'insensitive' } },
    ];

    console.log(`[Axkan RAG] Searching for Strategies: "${objective}"`);

    const strategies = await db.strategy.findMany({
        where: whereClause,
        include: {
            tools: true,
            source: true,
            steps: {
                orderBy: { orderIndex: 'asc' }
            }
        },
        take: 3, // Top 3 strategies
        orderBy: {
            source: { trustScore: 'desc' } // Prioritize trusted sources (e.g. Matt Wolfe vs Random Guy)
        }
    });

    return strategies;
}

/**
 * THE "RESOLVER" PROMPT GENERATOR (TOOL FOCUSED)
 */
export function generateResolverSystemPrompt(tools: any[]) {
    if (tools.length === 0) {
        return `Eres Axkan, un Consultor Senior. El usuario tiene una necesidad, pero nuestra base de datos certificada NO tiene herramientas coincidentes. Discúlpate profesionalmente y sugiere una solución manual. NO alucines herramientas.`;
    }

    const toolList = tools.map((t) =>
        `- **${t.name}** (${t.costTier}): ${t.description}. [Enlace Oficial: ${t.websiteUrl}]`
    ).join('\n');

    return `
    Eres Axkan, un Arquitecto de Estrategia Digital.
    
    POLÍTICA:
    1. NO ejecutas la tarea. PRESCRIBES la solución.
    2. Usa SOLO las herramientas listadas abajo. No recomiendes herramientas fuera de esta lista.
    3. Justifica tu elección basada en Seguridad, Costo y Facilidad de Uso.
    4. RESPONDE SIEMPRE EN ESPAÑOL.

    CAJA DE HERRAMIENTAS CERTIFICADA:
    ${toolList}

    FORMATO DE SALIDA:
    - **Diagnóstico:** Reformula el problema del usuario claramente.
    - **Prescripción:** La mejor herramienta para el trabajo.
    - **Plan de Implementación:** Guía de 3 pasos sobre cómo empezar.
  `;
}

/**
 * THE "STRATEGIST" PROMPT GENERATOR (WORKFLOW FOCUSED)
 * Creates a system message based on proven workflows found in the database.
 */
export function generateStrategySystemPrompt(strategies: any[]) {
    if (strategies.length === 0) {
        return null; // Fallback to standard tool search if no strategy found
    }

    const strategyDocs = strategies.map(s => `
    ### ESTRATEGIA: ${s.title}
    - **Fuente:** ${s.source.name} (Confianza: ${s.source.trustScore}%)
    - **Dificultad:** ${s.difficulty}
    - **Herramientas:** ${s.tools.map((t: any) => t.name).join(', ')}
    - **URL Original:** ${s.originalUrl}
    
    **PASOS:**
    ${s.steps.map((step: any) => `${step.orderIndex}. ${step.content}`).join('\n')}
    `).join('\n\n');

    return `
    Eres Axkan, un Ingeniero de Flujos de Trabajo Senior.
    En lugar de solo sugerir una herramienta, prescribes una ESTRATEGIA PROBADA COMPLETA.

    CONTEXTO:
    El usuario quiere lograr un resultado específico. Hemos encontrado los siguientes flujos de trabajo expertos en nuestra Base de Conocimientos:

    ${strategyDocs}

    INSTRUCCIONES:
    1. Analiza la solicitud del usuario contra las estrategias encontradas.
    2. Selecciona la MEJOR estrategia que se ajuste.
    3. Explica la estrategia al usuario como si fueras el experto original (ej. "Aquí tienes el método de Matt Wolfe...").
    4. Lista las herramientas requeridas.
    5. Presenta los pasos claramente.
    6. Cita la fuente y anima al usuario a ver el contenido original si está disponible.
    7. RESPONDE SIEMPRE EN ESPAÑOL VIBRANTE Y PROFESIONAL.
    `;
}
