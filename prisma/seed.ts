import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import fs from 'fs';
import path from 'path';

// Cargar .env manualmente
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf-8');
    envConfig.split('\n').forEach(line => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*"?(.+?)"?\s*$/);
        if (match) {
            process.env[match[1]] = match[2];
        }
    });
}

// Use DIRECT_URL (session mode) for seeding, fallback to DATABASE_URL
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL || '';

const pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Iniciando Sembrado de Base de Datos Maestra (Axkan Agency)...');

    // ==========================================
    // 1. FUENTES DE CONOCIMIENTO (The Authorities)
    // ==========================================

    const srcArtificialAnalysis = await prisma.knowledgeSource.upsert({
        where: { name: 'Artificial Analysis' },
        update: {},
        create: {
            name: 'Artificial Analysis',
            type: 'YOUTUBE', // Although it's a web/benchmark, we use this for scoring
            url: 'https://artificialanalysis.ai',
            trustScore: 98, // The Gold Standard for Hard Data
        },
    });

    const srcMozilla = await prisma.knowledgeSource.upsert({
        where: { name: 'Mozilla Privacy Not Included' },
        update: {},
        create: {
            name: 'Mozilla Privacy Not Included',
            type: 'OFFICIAL_DOCS',
            url: 'https://foundation.mozilla.org/en/privacynotincluded/',
            trustScore: 100, // Non-profit audit
        },
    });

    const srcIbm = await prisma.knowledgeSource.upsert({
        where: { name: 'IBM Technology' },
        update: {},
        create: {
            name: 'IBM Technology',
            type: 'YOUTUBE',
            url: 'https://www.youtube.com/@IBMTechnology',
            trustScore: 95,
        }
    });

    const srcPartnerStack = await prisma.knowledgeSource.upsert({
        where: { name: 'PartnerStack Marketplace' },
        update: {},
        create: {
            name: 'PartnerStack Marketplace',
            type: 'OFFICIAL_DOCS',
            url: 'https://marketplace.partnerstack.com',
            trustScore: 90, // Commercial validation
        }
    });

    console.log('✅ Fuentes de Autoridad creadas.');

    // ==========================================
    // 2. HERRAMIENTAS (Golden Data Samples)
    // ==========================================

    // Herramienta 1: Browse AI (Validación Comercial: PartnerStack)
    const toolBrowseAi = await prisma.tool.upsert({
        where: { slug: 'browse-ai' },
        update: {},
        create: {
            name: 'Browse AI',
            slug: 'browse-ai',
            description: 'La forma más fácil de extraer y monitorear datos de cualquier sitio web sin código.',
            websiteUrl: 'https://www.browse.ai/',
            costTier: 'FREEMIUM', // Modelo Freemium real
            technicalLevel: 'NO_CODE',
            isGdprCompliant: true, // Mencionado en políticas
            isLfpdpppCompliant: false, // No específico para MX aún
            affiliateLinks: {
                create: {
                    provider: 'PARTNERSTACK',
                    trackingUrl: 'https://browse.ai?ref=axkan',
                    commissionRate: 20.00, // 20% recurring validated
                    isActive: true
                }
            },
            categories: {
                connectOrCreate: [
                    { where: { slug: 'data-scraping' }, create: { name: 'Extracción de Datos', slug: 'data-scraping' } }
                ]
            }
        }
    });

    // Herramienta 2: n8n (Validación Técnica: Open Source / GitHub)
    const toolN8n = await prisma.tool.upsert({
        where: { slug: 'n8n' },
        update: {},
        create: {
            name: 'n8n',
            slug: 'n8n',
            description: 'Orquestación de flujos de trabajo con agentes IA. Alternativa auditable a Zapier.',
            websiteUrl: 'https://n8n.io',
            costTier: 'FREEMIUM', // Self-hosted es free
            technicalLevel: 'LOW_CODE',
            isGdprCompliant: true, // German engineering
            isLfpdpppCompliant: true, // Self-hosted allows local data residency
            categories: {
                connectOrCreate: [
                    { where: { slug: 'automation' }, create: { name: 'Automatización & Orquestación', slug: 'automation' } }
                ]
            }
        }
    });

    // Herramienta 3: ChatGPT (Foundation Model: GPT-4o)
    const toolChatGpt = await prisma.tool.upsert({
        where: { slug: 'chatgpt' },
        update: {
            description: 'El modelo de referencia. Validado por Artificial Analysis con >100 tokens/seg en versión 4o.' // Enriquecido con Hard Data
        },
        create: {
            name: 'ChatGPT (OpenAI)',
            slug: 'chatgpt',
            description: 'El modelo de referencia. Validado por Artificial Analysis con >100 tokens/seg en versión 4o.',
            websiteUrl: 'https://chat.openai.com',
            costTier: 'FREEMIUM',
            technicalLevel: 'NO_CODE',
            isGdprCompliant: false, // Issues in Italy/EU historically
            isLfpdpppCompliant: false,
            categories: {
                connectOrCreate: [
                    { where: { slug: 'llm' }, create: { name: 'Modelos de Lenguaje (LLM)', slug: 'llm' } }
                ]
            }
        }
    });

    console.log('✅ Herramientas Maestras creadas.');

    // ==========================================
    // 3. ESTRATEGIAS (Workflows / Recetas)
    // ==========================================

    // Estrategia 1: Equipo de Ingeniería Autónomo (Fuente: Tyler Reed / YouTube)
    await prisma.strategy.upsert({
        where: { slug: 'equipo-ingenieria-autonomo-n8n' },
        update: {
            // Asegurar relaciones
            tools: {
                connect: [{ id: toolN8n.id }, { id: toolChatGpt.id }]
            }
        },
        create: {
            title: 'Crear un Equipo de Ingeniería de Software Autónomo',
            slug: 'equipo-ingenieria-autonomo-n8n',
            description: 'Configura un escuadrón de agentes en n8n que planean, escriben y revisan código sin intervención humana constante.',
            difficulty: 'PRO_CODE', // Requiere entender JSON/API
            costTier: 'FREE', // Self-hosted n8n + API credits
            sourceId: srcIbm.id, // Placeholder source as specific URL wasn't in source list var above, using IBM/Tech generic match or update logic
            originalUrl: 'https://www.youtube.com/watch?v=FQGEE1iCrkk', // The actual video from report
            tools: {
                connect: [{ id: toolN8n.id }, { id: toolChatGpt.id }]
            },
            steps: {
                create: [
                    { orderIndex: 1, isRequired: true, content: 'Instala n8n mediante Docker en un servidor privado (VPS) para asegurar la privacidad del código.' },
                    { orderIndex: 2, isRequired: true, content: 'Configura el nodo "AI Agent" en n8n seleccionando el modelo GPT-4o como cerebro.' },
                    { orderIndex: 3, isRequired: true, content: 'Crea 3 agentes separados: "Product Manager" (Define specs), "Developer" (Escribe código), y "QA" (Revisa bugs).' },
                    { orderIndex: 4, isRequired: true, content: 'Conecta los agentes secuencialmente pasando el contexto JSON entre nodos.' }
                ]
            }
        }
    });

    // Estrategia 2: Monitoreo de Competencia Invisible (Fuente: Browse AI)
    await prisma.strategy.upsert({
        where: { slug: 'monitoreo-precios-competencia' },
        update: {},
        create: {
            title: 'Monitoreo Legal de Precios de Competencia',
            slug: 'monitoreo-precios-competencia',
            description: 'Extrae cambios de precios de tus competidores automáticamente y recibe alertas en Slack.',
            difficulty: 'NO_CODE',
            costTier: 'FREEMIUM',
            sourceId: srcPartnerStack.id, // Inferred usage
            tools: {
                connect: [{ id: toolBrowseAi.id }]
            },
            steps: {
                create: [
                    { orderIndex: 1, isRequired: true, content: 'Instala la extensión de Browse AI en Chrome.' },
                    { orderIndex: 2, isRequired: true, content: 'Navega a la página de "Pricing" de tu competidor y selecciona la tabla de precios.' },
                    { orderIndex: 3, isRequired: true, content: 'Configura un "Monitor" para que se ejecute cada 24 horas.' },
                    { orderIndex: 4, isRequired: false, content: 'Integra el webhook de salida hacia Slack o Google Sheets.' }
                ]
            }
        }
    });

    console.log('✅ Estrategias de Alto Valor creadas.');
    console.log('🌱 Sembrado Maestro completado.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
