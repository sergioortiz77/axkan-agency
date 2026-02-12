import { NextRequest, NextResponse } from 'next/server';
import { searchTools, searchStrategies, generateResolverSystemPrompt, generateStrategySystemPrompt } from '@/lib/rag';

export async function POST(req: NextRequest) {
    try {
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        console.log(`[API/Chat] Processing user message: "${message}"`);

        // 1. Parallel Search (Tools & Strategies)
        // In a real scenario, we'd use an LLM to extract constraints (budget, tech level) first.
        // For MVP, we pass empty constraints or basic keyword matching.
        const [tools, strategies] = await Promise.all([
            searchTools(message),
            searchStrategies(message)
        ]);

        // 2. Build the System Prompt (The "Thinking" Phase)
        let systemPrompt = '';

        // Prefer Strategy Prompt if available, fall back to Tool Prompt
        const strategyPrompt = generateStrategySystemPrompt(strategies);
        const toolPrompt = generateResolverSystemPrompt(tools);

        if (strategyPrompt) {
            systemPrompt = strategyPrompt;
        } else {
            systemPrompt = toolPrompt;
        }

        // 3. Generate Response (Simulation Layer)
        // TODO: Connect this to OpenAI/Anthropic/Gemini API using the systemPrompt.
        // For now, we return a structured response for the Frontend to render.

        const mockAiResponse = `
    Basado en tu solicitud "${message}", he analizado nuestra Base de Conocimiento.
    
    ${strategies.length > 0 ? `Encontré **${strategies.length} estrategias probadas** que coinciden con tus necesidades.` : ''}
    ${tools.length > 0 ? `También detecté **${tools.length} herramientas certificadas**.` : ''}

    Aquí está mi recomendación... (Aquí es donde el LLM generaría la prescripción completa basada en el prompt del sistema).
    `;

        return NextResponse.json({
            role: 'assistant',
            content: mockAiResponse,
            detectedTools: tools,
            prescribedStrategies: strategies,
            debugPrompt: systemPrompt // For us to see what the LLM *would* see
        });

    } catch (error) {
        console.error('[API/Chat] Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
