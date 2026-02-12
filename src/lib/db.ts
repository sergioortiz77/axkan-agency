import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Prevent multiple instances of Prisma Client in development
// due to Next.js hot module reloading (HMR)

const prismaClientSingleton = () => {
    const databaseUrl = process.env.DATABASE_URL || '';
    let connectionString = databaseUrl;

    // Logic to derive TCP connection string from 'prisma+postgres' protocol
    // This allows the app to connect directly to the underlying Postgres instance
    if (databaseUrl.startsWith('prisma+postgres://')) {
        try {
            const url = new URL(databaseUrl);
            const port = parseInt(url.port);
            if (!isNaN(port)) {
                // Local Prisma Postgres uses port+1 for TCP connection
                const tcpPort = port + 1;
                connectionString = `postgres://postgres:postgres@localhost:${tcpPort}/template1?sslmode=disable`;
                console.log(`[DB] Connected via TCP to port ${tcpPort}`);
            }
        } catch (e) {
            console.error('[DB] Failed to parse database URL for TCP port derivation', e);
        }
    }

    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);

    return new PrismaClient({ adapter });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined;
};

const db = globalForPrisma.prisma ?? prismaClientSingleton();

export default db;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
