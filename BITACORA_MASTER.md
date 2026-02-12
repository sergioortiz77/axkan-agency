# BITÁCORA TÉCNICA Y ESTRATÉGICA: AXKAN AGENCY
**Ubicación:** `/home/sergio/Documentos/Proyectos/axkan-agency/BITACORA_MASTER.md`
**Propósito:** Registro inmutable de Decisiones Arquitectónicas (ADR), Avances de Ingeniería y Deuda Técnica.

---

## 📅 SESIÓN INAUGURAL (11 de Febrero, 2026)
**Foco:** Cimientos de Ingeniería "Greenfield" & Doctrina "Resolver".

### ✅ CONQUISTAS FUNDACIONALES
1.  **Giro Estratégico (Pivot):**
    *   Confirmado: Axkan Agency nace como entidad **independiente** de `mxwithme.com`.
    *   Modelo: **Meta-Consultoría Automatizada** ("Resolver"). Diagnostica y prescribe, no ejecuta ciegamente.
    *   Exclusiones: Se congela la capa de Ortocronobiología (Bio-Checkin) para la Fase 1 MVP.

2.  **Infraestructura Desplegada (Local):**
    *   **Repositorio:** Inicializado `axkan-agency` con Next.js 14 (App Router).
    *   **Calidad Bancaria:** Configuración estricta de TypeScript + ESLint + Prettier + Husky (Git Hooks). Cero tolerancia a `any` types o código sucio.
    *   **Base de Datos:**
        *   Motor: PostgreSQL (Vía Prisma ORM v7.4.0).
        *   Esquema v1.0: Diseñado con tablas `Tool` (Taxonomía: Costo, Nivel Técnico, Compliance Legal MX/EU) y `AffiliateLink` (Monetización Invisible).

3.  **Lógica de Negocio (El Cerebro):**
    *   Implementado `src/lib/rag.ts`: Motor de **RAG Estructurado**.
    *   **Innovación:** No usa vectores difusos. Usa filtros SQL estrictos (`isLfpdpppCompliant`, `costTier`) para garantizar seguridad legal en las recomendaciones.

### 🧠 DECISIONES ARQUITECTÓNICAS (ADR)
*   **Separación de Poderes:** Axkan Agency vive en `Proyectos/axkan-agency`, separado físicamente de `Axkan-AI` (App interna). Esto permite vender consultoría B2B pura sin depender del ecosistema legacy.
*   **FinOps First:** El esquema de base de datos nace con la tabla `AffiliateLink` integrada. La monetización no es un "afterthought", es estructural.
*   **Compliance First:** La tabla `Tool` tiene bandera `isLfpdpppCompliant` (Ley Mexicana de Datos). Si una herramienta no es legal en MX, el sistema no la recomendará a empresas mexicanas.

### 🚀 PRÓXIMOS PASOS (ROADMAP)
1.  **Cliente MCP (Model Context Protocol):**
    *   Conectar el backend a servidores MCP externos para poblar el catálogo de herramientas automáticamente (Seed DB).
2.  **Interfaz de Usuario (Frontend):**
    *   Diseñar el primer prototipo **Glassmorphism** (Login + Dashboard de Consulta).
    *   Implementar autenticación segura (Clerk/Supabase).
3.  **Despliegue:**
    *   Conectar Vercel y Supabase Cloud para salir de localhost.

---
**Firmado:** Antigravity (Ingeniero Senior)

## 📅 SESIÓN DE INTEGRACIÓN CLOUD (12 de Febrero, 2026)
**Foco:** Migración a la Nube (Supabase + Netlify) y Lanzamiento de Interfaz Premium.

### ✅ LOGROS DE INFRAESTRUCTURA Y DESPLIEGUE
1.  **Migración a Supabase Cloud (Live DB):**
    *   **Proyecto:** `axkan` (ID: `bpekysriovazsomgmcye`) en AWS us-east-1.
    *   **Schema & RLS:** Despliegue exitoso de 11 tablas vía Prisma. Activación de **Row Level Security (RLS)** con políticas granulares para proteger la integridad de los diagnósticos.
    *   **Data Seeding:** Inyección de catálogo inicial de herramientas, estrategias y categorías optimizadas para el mercado mexicano y español.

2.  **Lanzamiento en Netlify (Producción):**
    *   **Sitio Oficial:** [glittering-frangipane-47a306.netlify.app](https://glittering-frangipane-47a306.netlify.app)
    *   **Resolución de Conflictos:** Se superó el bloqueo de hooks de Git (Husky) en CI mediante una estrategia de **Static Export (SSG)**.
    *   **Sanitización:** Implementación de un flujo de despliegue limpio (`clean-axkan`) que garantiza que los secretos de entorno (`DATABASE_URL`, `NEXT_PUBLIC_SUPABASE_URL`) se inyecten de forma segura.

3.  **Visual Excellence (Frontend):**
    *   **Estética:** Implementación total de la interfaz **Glassmorphism**. Uso de `backdrop-blur`, gradientes vibrantes y tipografía "Inter" para un look de agencia de alto nivel.
    *   **Páginas Habilitadas:** Landing Page, Dashboard de Diagnóstico, y el ecosistema legal (`/terminos`, `/privacidad`, `/acerca`) 100% funcionales y validados visualmente.

### 🧠 DECISIONES ARQUITECTÓNICAS (ADR)
*   **Pivot a SSG (Static Site Generation):** Se decidió usar `output: 'export'` en Next.js para maximizar la velocidad de carga y estabilidad en Netlify, moviendo la lógica dinámica al cliente vía el SDK de Supabase.
*   **Data Residency:** Confirmado que todos los datos sensibles (perfiles de clientes) están protegidos por políticas SQL en Supabase, no accesibles vía API pública sin sesión válida.

### 🚀 PRÓXIMOS PASOS (ROADMAP)
1.  **Activación de Lógica Dinámica:**
    *   Conectar el buscador del Dashboard a la base de datos de Supabase.
    *   Implementar Supabase Auth para persistencia de diagnósticos.
2.  **Motor de Prescripción:**
    *   Vincular el botón "Comenzar Diagnóstico" con el flujo de RAG para generar las primeras recetas técnicas reales.

---
**Firmado:** Antigravity (Ingeniero Senior)
