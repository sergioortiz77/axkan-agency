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
