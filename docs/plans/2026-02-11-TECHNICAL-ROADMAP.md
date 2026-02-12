# HOJA DE RUTA TÉCNICA (BUILD ROADMAP): AXKAN AGENCY (MVP)
**Fecha:** 11 de Febrero, 2026
**Estatus:** PLAN DE CONSTRUCCIÓN
**Objetivo:** Agenciar de Meta-Consultoría Automatizada Nivel Bancario.

## FASE 0: FUNDAMENTOS (LA BASE SEGURA)
**Meta:** Tener un entorno local configurado con reglas estrictas de calidad, listo para escalar.
1.  [ ] **Inicializar Repositorio Next.js 14 (App Router):**
    *   Configuración: `create-next-app` con TypeScript, Tailwind CSS, ESLint (Airbnb/Google config).
    *   Estructura de Directorios: `src/app` (Rutas), `src/components` (UI), `src/lib` (Utilidades), `src/types` (Definiciones TS).
2.  [ ] **Configuración de Calidad (Linter & Format):**
    *   Prettier + ESLint con reglas estrictas (`no-explicit-any`, `react-hooks/exhaustive-deps`).
    *   Husky (Git Hooks): Impedir commits si hay errores de linter.
3.  [ ] **Base de Datos (Supabase/PostgreSQL):**
    *   Crear Proyecto Supabase `axkan-agency-db`.
    *   Diseñar Esquema Inicial (SQL):
        *   `Table: UserProfiles` (Datos básicos + Auth ID).
        *   `Table: ToolRegistry` (Catálogo Maestro: Nombre, Categoría, Costo, Nivel Técnico, Compliance).
        *   `Table: AffiliateLinks` (Relación 1:N con Tools para monetización).
4.  [ ] **Autenticación (Clerk/Supabase Auth):**
    *   Implementar Login Social (Google/GitHub) + Email Magic Link.
    *   Proteger Rutas Privadas (`/dashboard`, `/consultoria`).

## FASE 1: EL MOTOR COGNITIVO "RESOLVER" (BACKEND)
**Meta:** Que la IA diagnostique y prescriba herramientas seguras.
1.  [ ] **Cliente MCP (Model Context Protocol):**
    *   Implementar `src/lib/mcp-client.ts` para conectarse a servidores MCP externos (si aplica) o simular un servidor local de herramientas.
2.  [ ] **Lógica de Diagnóstico (RAG Estructurado):**
    *   Crear función `searchTools(query: string, constraints: ToolConstraints)` en `src/lib/rag.ts`.
    *   **Prompt Engineering:** Diseñar el System Prompt del "Consultor Senior" que:
        *   Analiza el objetivo del usuario.
        *   Consulta la DB `ToolRegistry` filtrando por seguridad/costo.
        *   Genera un JSON estructurado con el Plan de Acción.
3.  [ ] **API de Ingesta (Admin):**
    *   Crear script para cargar herramientas masivamente (Seed DB) desde CSV/JSON.

## FASE 2: MONETIZACIÓN INVISIBLE (FINOPS)
**Meta:** asegurar ingresos pasivos sin molestar al usuario.
1.  [ ] **Middleware de Afiliados:**
    *   Implementar `src/middleware.ts` o utilidad `injectAffiliateParams(url: string)`.
    *   Lógica: Si la herramienta recomendada es "HubSpot", buscar en `AffiliateLinks` y reemplazar URL limpia por `buffer.com?ref=axkan`.
2.  [ ] **Integración de Pagos (Stripe Local):**
    *   Configurar Stripe Connect/Checkout para cobrar "Setup Fee" o Suscripción.
    *   Habilitar métodos de pago locales (OXXO/SPEI en MX, Boleto/Pix en BR).

## FASE 3: INTERFAZ DE USUARIO (GLASSMORPHISM)
**Meta:** Transmitir confianza, solidez y modernidad.
1.  [ ] **Sistema de Diseño (Tailwind):**
    *   Definir paleta de colores (Dark Mode profundo, Acentos Neón sutiles).
    *   Crear componentes base: `Card`, `Button`, `Input`, `Modal` con efecto *backdrop-blur*.
2.  [ ] **Dashboard del Cliente:**
    *   Vista "Mis Consultas": Historial de diagnósticos anteriores.
    *   Vista "Nueva Consulta": Formulario/Chat guiado (No libre).
3.  [ ] **Vista de Resultados (El Entregable):**
    *   Diseño de "Hoja de Ruta" interactiva.
    *   Tarjetas de Herramientas con semáforos de seguridad/costo.

## FASE 4: DESPLIEGUE Y PRODUCCIÓN
1.  [ ] **CI/CD Vercel:** Conectar repo GitHub a Vercel.
2.  [ ] **Variables de Entorno:** Configurar secretos en Vercel (Supabase Keys, OpenAI/Anthropic Keys, Stripe Keys).
3.  [ ] **Dominio:** Apuntar `agency.axkan.ai` (o similar).

---
**Firmado:** Antigravity (Ingeniero Senior)
