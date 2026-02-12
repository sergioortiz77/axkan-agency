
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting MVP Seeding...');

    // 1. Create Tools
    const toolChatGPT = await prisma.tool.upsert({
        where: { slug: 'chatgpt' },
        update: {},
        create: {
            name: 'ChatGPT',
            slug: 'chatgpt',
            description: 'AI conversational model by OpenAI.',
            websiteUrl: 'https://chat.openai.com',
            costTier: 'FREEMIUM',
            technicalLevel: 'NO_CODE',
            isGdprCompliant: true,
            isLfpdpppCompliant: true,
        },
    });

    const toolNextjs = await prisma.tool.upsert({
        where: { slug: 'nextjs' },
        update: {},
        create: {
            name: 'Next.js',
            slug: 'nextjs',
            description: 'React Framework for the Web.',
            websiteUrl: 'https://nextjs.org',
            costTier: 'FREE',
            technicalLevel: 'PRO_CODE',
            isGdprCompliant: true,
            isLfpdpppCompliant: true,
        },
    });

    const toolStitch = await prisma.tool.upsert({
        where: { slug: 'stitch' },
        update: {},
        create: {
            name: 'Stitch',
            slug: 'stitch',
            description: 'AI for UI Generation.',
            websiteUrl: 'https://stitch.design',
            costTier: 'PAID',
            technicalLevel: 'LOW_CODE',
        },
    });

    console.log('✅ Tools created.');

    // 2. Create Knowledge Source
    const sourceAxkan = await prisma.knowledgeSource.upsert({
        where: { name: 'Axkan Engineering' },
        update: {},
        create: {
            name: 'Axkan Engineering',
            type: 'OFFICIAL_DOCS',
            trustScore: 100,
            url: 'https://axkan.agency'
        }
    });

    // 3. Create Strategy
    const strategyGlass = await prisma.strategy.upsert({
        where: { slug: 'glassmorphism-dashboard' },
        update: {},
        create: {
            title: 'Build a Glassmorphism Dashboard',
            slug: 'glassmorphism-dashboard',
            description: 'Create a futuristic UI using Next.js, Tailwind, and Glassmorphism principles.',
            difficulty: 'PRO_CODE',
            costTier: 'FREE',
            sourceId: sourceAxkan.id,
            tools: {
                connect: [{ id: toolNextjs.id }, { id: toolChatGPT.id }, { id: toolStitch.id }]
            },
            steps: {
                create: [
                    { orderIndex: 1, isRequired: true, content: 'Setup Next.js project with Tailwind CSS.' },
                    { orderIndex: 2, isRequired: true, content: 'Create GlassLayout component with backdrop-blur-xl.' },
                    { orderIndex: 3, isRequired: true, content: 'Implement floating sidebars and neon glow effects.' }
                ]
            }
        }
    });

    console.log('✅ Strategy created: Build a Glassmorphism Dashboard');
    console.log('🌱 Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
