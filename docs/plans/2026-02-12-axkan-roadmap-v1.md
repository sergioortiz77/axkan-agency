# Hoja de Ruta Axkan — v1.0
## 12 de febrero de 2026

> **Filosofía Rectora:** Modelo "Resolver" + FinOps.
> Axkan prescribe, no ejecuta. Cada gasto computacional debe generar un retorno medible.

---

## ESTADO ACTUAL (Checkpoint)

| Componente | Estado | Notas |
|:---|:---:|:---|
| Base de Datos (Prisma + PostgreSQL) | ✅ | Schema completo: Tool, Strategy, AffiliateLink, Category, KnowledgeSource |
| Seed de datos | ✅ | 6+ herramientas, 3 estrategias, links de afiliados para Browse AI |
| Motor RAG Estructurado | ✅ | `src/lib/rag.ts` — Filtros SQL (no vectores), compliant con FinOps |
| API de Chat | ✅ | `src/app/api/chat/route.ts` — Respuesta simulada (sin LLM real aún) |
| Dashboard Glassmorphism | ✅ | Funcional, en español, marca "Axkan" |
| Links de Afiliados (DB) | ✅ | Modelo `AffiliateLink` con `trackingUrl`, `commissionRate`, `provider` |
| Links de Afiliados (UI) | ❌ | **No se muestran al usuario aún** — Prioridad ALTA |
| Integración LLM real | ❌ | Mock response. Siguiente sprint crítico |
| Autenticación | ❌ | Sin usuarios aún |
| Capas FinOps (LLM Routing) | ❌ | No implementado |

---

## FASE 1: REFINAMIENTO ESTÉTICO + AFILIADOS (Sprint Actual)

### 1.1 — Tipografía e Iconos del Sidebar Izquierdo

**Problema:** Los botones del sidebar ("Nuevo Diagnóstico", "Historial", etc.) usan un placeholder genérico (`<span>` con opacidad) como ícono, y la tipografía se siente plana.

**Solución propuesta:**

- **Iconos:** Integrar [Lucide React](https://lucide.dev/) — librería de íconos SVG ligera y moderna (MIT, tree-shakeable).
- **Tipografía:** Usar la fuente ya cargada (Geist) con pesos diferenciados:
  - Ítem activo: `font-semibold`, `text-sm`, con ícono en `text-cyan-400`
  - Ítems inactivos: `font-normal`, `text-sm`, con ícono en `text-gray-500`
- **Micro-animaciones:** Transición suave en hover con escala sutil (`scale-[1.02]`) y glow.

**Archivos a modificar:**
- `src/app/dashboard/page.tsx` (sección `SidebarNav`, líneas 56-72)

**Mapa de Iconos:**
| Menú | Ícono Lucide | Descripción |
|:---|:---|:---|
| Nuevo Diagnóstico | `Sparkles` | Evoca IA/creatividad |
| Historial | `Clock` | Consultas anteriores |
| Mis Herramientas | `Wrench` | Caja de herramientas del usuario |
| Configuración | `Settings` | Preferencias |

---

### 1.2 — Activación de Links de Afiliados en la UI

**Estado actual:** La DB ya tiene la tabla `AffiliateLink` con datos reales (ej: Browse AI → `https://browse.ai?ref=axkan`). El API ya devuelve `affiliateLinks[]` en cada herramienta detectada. **PERO** el frontend no los muestra.

**Plan de implementación:**

1. **Modificar el panel derecho** ("Herramientas Detectadas") para que cada tarjeta de herramienta sea un enlace clickeable:
   - Si `tool.affiliateLinks.length > 0` y `affiliateLinks[0].isActive`:
     → Usar `affiliateLinks[0].trackingUrl` como `href`
   - Si no hay link de afiliado:
     → Usar `tool.websiteUrl` como fallback
   - Atributo: `target="_blank"` + `rel="noopener noreferrer"`

2. **Indicador visual sutil:** Badge "Verificado ✓" en herramientas con link de afiliado activo (transparente para el usuario, pero trazable internamente).

3. **Tracking de clics (Fase 2):** Incrementar `AffiliateLink.clicks` mediante un endpoint `/api/track-click` cuando el usuario haga clic.

**Archivos a modificar:**
- `src/app/dashboard/page.tsx` (sección `RightPanel`, líneas 74-118)

---

### 1.3 — Comportamiento de Menús Laterales

#### Columna Izquierda (Navegación Principal)

| Menú | Comportamiento Propuesto | Fase |
|:---|:---|:---:|
| **Nuevo Diagnóstico** | Limpia el chat actual, resetea `messages` al estado inicial y borra `detectedTools`/`prescribedStrategies`. Foco automático en barra de búsqueda. | 1 |
| **Historial** | Abre un panel/drawer con las consultas anteriores guardadas en la tabla `Consultation`. Cada ítem muestra: fecha, resumen del objetivo, número de herramientas detectadas. Al clickear, recarga la conversación. **Requiere:** Autenticación + persistencia de consultas. | 2 |
| **Mis Herramientas** | Panel que muestra herramientas "guardadas" o "favoritas" por el usuario. Funciona como un toolkit personalizado. **Requiere:** Tabla `UserToolbox` (relación User → Tool). | 2 |
| **Configuración** | Modal/página con: Preferencias de idioma, nivel técnico default (NO_CODE/LOW_CODE/PRO_CODE), presupuesto mensual estimado, toggle de cumplimiento legal (GDPR/LFPDPPP). Estos valores se inyectan como `UserConstraints` en cada búsqueda RAG. | 2 |

#### Columna Derecha (Panel Contextual)

| Sección | Comportamiento Propuesto | Fase |
|:---|:---|:---:|
| **Herramientas Detectadas** | Tarjetas clickeables con link de afiliado/oficial. Badge de costo (`FREEMIUM`, `PAID`). Botón "Abrir" y botón "Guardar" (para toolkit). Mostrar `commissionRate` solo en vista admin. | 1 |
| **Estrategias Prescritas** | Card expandible con: título, dificultad, pasos (colapsados por default), fuente con link original, herramientas vinculadas. Botón "Aplicar esta estrategia" que abre los pasos en el chat como guía interactiva. | 2 |

---

## FASE 2: CAPAS FinOps + INTELIGENCIA REAL

### 2.1 — Integración LLM con Enrutamiento de Costos

**Principio FinOps aplicado:** Skill `cost-optimized-routing` (Waterfall Model Selection).

**Implementación técnica:**

```
src/lib/llm-router.ts  (NUEVO ARCHIVO)
```

| Tier | Criterio | Modelo Recomendado | Costo Aprox. |
|:---:|:---|:---|:---|
| 1 | Saludos, preguntas simples, formateo | `gemini-2.0-flash` / `gpt-4o-mini` | ~$0.15/1M tokens |
| 2 | Generación de prescripción estándar, comparación de herramientas | `gemini-2.0-flash` / `claude-3.5-haiku` | ~$1.00/1M tokens |
| 3 | Arquitectura compleja, planificación estratégica multi-herramienta | `gemini-2.5-pro` / `claude-sonnet-4` | ~$3-15/1M tokens |

**Flujo:**
1. El usuario envía un mensaje.
2. `llm-router.ts` clasifica la complejidad del mensaje (usando un modelo Tier 1).
3. Según la clasificación, se rutea al modelo apropiado.
4. El system prompt generado por `rag.ts` se envía al modelo seleccionado.
5. La respuesta real reemplaza el mock actual.

**Guardarriel FinOps (Skill `budget-impact-analysis`):**
- Si una sesión acumula >$0.50 en tokens, pausar y notificar al admin.
- Dashboard interno con métricas de consumo por consulta.

---

### 2.2 — Capas Selectivas de Interacción

**Concepto:** No todos los mensajes del usuario requieren un LLM Frontier. Implementar "capas" de procesamiento progresivo:

```
Capa 0: Respuesta Local (sin LLM)
  → Saludos, "Hola", "Gracias" → Respuesta pre-configurada
  → Costo: $0.00

Capa 1: RAG Puro (sin LLM)
  → Consultas directas: "¿Qué herramientas de CRM hay?"
  → El motor RAG busca y formatea resultados directamente
  → Costo: $0.00 (solo query SQL)

Capa 2: LLM Ligero + RAG
  → Consultas que necesitan análisis: "Necesito un CRM barato y fácil"
  → Tier 1 LLM para extraer constraints + RAG para filtrar
  → Costo: ~$0.001

Capa 3: LLM Frontier + RAG
  → Estrategia compleja: "Diseña mi pipeline de marketing con IA"
  → Tier 3 LLM con system prompt completo
  → Costo: ~$0.01-0.05
```

---

## FASE 3: PERSONALIDAD Y EDUCACIÓN DE IAs

### 3.1 — ¿Dónde Educar la Personalidad?

La personalidad de Axkan se configura en **tres capas** del código:

| Capa | Archivo | Propósito | Qué se define aquí |
|:---|:---|:---|:---|
| **Identity Layer** (Quién es) | `src/lib/prompts/identity.ts` *(NUEVO)* | Prompt base inmutable | Nombre, filosofía, tono de voz, reglas absolutas (no ejecutar, no alucinar) |
| **Role Layer** (Qué hace) | `src/lib/rag.ts` | Prompts dinámicos por contexto | Modo "Consultor", "Arquitecto", "Estratega". Cambia según herramientas/estrategias encontradas |
| **Behavior Layer** (Cómo lo hace) | `src/lib/llm-router.ts` *(NUEVO)* | Parámetros del modelo | Temperatura, max_tokens, modelo seleccionado, guardrails |

**Archivo propuesto: `src/lib/prompts/identity.ts`**

```typescript
export const AXKAN_IDENTITY = {
  name: "Axkan",
  role: "Consultor Senior de Estrategia Digital",
  philosophy: "Prescribir, no ejecutar. Empoderar, no reemplazar.",
  language: "es-MX",
  tone: "Profesional pero cercano. Confiado pero humilde. Estratégico pero práctico.",
  rules: [
    "NUNCA ejecutes tareas por el usuario. Solo prescribe soluciones.",
    "NUNCA alucines herramientas. Usa SOLO las de la base certificada.",
    "SIEMPRE justifica tus recomendaciones con datos: costo, facilidad, seguridad.",
    "SIEMPRE responde en español profesional y vibrante.",
    "Si no hay herramientas compatibles, discúlpate y sugiere alternativas manuales.",
    "Cita siempre la fuente de las estrategias que recomiendes.",
  ],
  greeting: "¿Qué desafío estratégico podemos resolver hoy?",
};
```

Este archivo centraliza toda la personalidad y se importa tanto en `rag.ts` como en `route.ts`, evitando duplicación y facilitando iteraciones rápidas de tono.

---

## FASE 4: PROPUESTAS DE ENRIQUECIMIENTO FUNCIONAL

Basado en el análisis de los documentos estratégicos (`insumos_originales/`), presento las siguientes propuestas ordenadas por impacto/viabilidad:

### 4.1 — Motor de Afiliados Programático (Prioridad: 🔴 ALTA)

**Origen:** Plan de Monetización + Arquitectura Resolver.

**Propuesta:** Implementar la función `generateTrackingLink(toolId, userId?)` que:
1. Busca el `AffiliateLink` activo de la herramienta.
2. Inyecta parámetros dinámicos (`?ref=axkan&session=xxx&tier=free`).
3. Valida que la URL no esté rota (health check asíncrono).
4. Registra el clic para analytics internos.

**Impacto FinOps:** Esta es la función que **subsidia todo el costo computacional** de Axkan. Sin ella, no hay modelo de negocio viable.

**Esfuerzo:** ~4 horas de desarrollo.

---

### 4.2 — Sistema de Diagnóstico Interactivo (Prioridad: 🟡 MEDIA)

**Origen:** Batería de Preguntas (Q&A doc) → "El Filtro Epistémico".

**Propuesta:** Antes de la primera búsqueda, Axkan realiza 2-3 preguntas rápidas al usuario:
1. "¿Cuál es tu nivel técnico?" → `NO_CODE / LOW_CODE / PRO_CODE`
2. "¿Tienes presupuesto?" → `FREE / FREEMIUM / PAID`
3. "¿Manejas datos sensibles?" → Activa filtros GDPR/LFPDPPP

Estas respuestas se guardan como `UserConstraints` y se aplican automáticamente a todas las búsquedas RAG de la sesión.

**Impacto UX:** Reduce la "parálisis por análisis" y mejora la precisión de las recomendaciones.

**Esfuerzo:** ~3 horas.

---

### 4.3 — Streaming de Respuestas (Prioridad: 🟡 MEDIA)

**Propuesta:** Cuando se integre el LLM real, usar Server-Sent Events (SSE) para mostrar la respuesta token por token (efecto "máquina de escribir").

**Impacto UX:** Percepción de velocidad. El usuario ve la respuesta formándose en tiempo real.

**Esfuerzo:** ~2 horas.

---

### 4.4 — Renderizado Markdown en el Chat (Prioridad: 🟡 MEDIA)

**Propuesta:** Instalar `react-markdown` + `remark-gfm` para renderizar las respuestas del chat con formato rico: negritas, listas, enlaces clickeables, código.

**Impacto UX:** Las prescripciones de Axkan se verán profesionales y estructuradas.

**Esfuerzo:** ~1 hora.

---

### 4.5 — Dashboard de Afiliados (Prioridad: 🟢 BAJA — Fase futura)

**Origen:** Q&A doc → "Sistema agresivo de afiliados".

**Propuesta:** Portal donde afiliados pueden:
- Ver sus referidos (solo progreso, NUNCA contenido — privacidad suprema)
- Monitorear comisiones
- Generar sus propios links de referencia

**Requiere:** Autenticación, roles (Cliente/Afiliado), Stripe Connect.

**Esfuerzo:** ~40+ horas. **Recomendación:** Diferir a v2.0.

---

### 4.6 — Bio Check-in (Ortocronobiología) (Prioridad: 🟢 BAJA — Fase futura)

**Origen:** Deep Research doc → Bio-Sincronización.

**Propuesta:** Modal al inicio de sesión que pregunta nivel de energía (1-10) y horas de sueño. Estos datos modulan las recomendaciones (herramientas fáciles si energía baja, complejas si energía alta).

**Decisión del Director (registrada):** "Vamos a dejar ese aspecto para más adelante. Ahora vamos a enfocarnos en crear la estructura bruta y funcional."

**Esfuerzo:** ~6 horas cuando se active.

---

## ORDEN DE EJECUCIÓN (Revenue-First / FinOps)

> **Principio Director:** Primero generar ingresos, después gastar en LLMs.

| # | Tarea | Genera $$$ | Cuesta $$$ | Estado |
|:---:|:---|:---:|:---:|:---:|
| 1 | 🎨 Refinar sidebar (Lucide + tipografía) | No | No | ✅ Completado |
| 2 | 🔄 Botón "Nuevo Diagnóstico" funcional | No | No | ✅ Completado |
| 3 | 📄 Landing page profesional (`/`) | No | No | ✅ Completado |
| 4 | 📜 Páginas legales (Privacidad + Términos + Acerca) | No | No | ✅ Completado |
| 5 | 🔐 Migrar DB a Supabase remota | No | No | 🔜 Siguiente |
| 6 | 🔐 Integrar Supabase Auth (registro/login) | No | No | Pendiente |
| 7 | 🚀 Deploy a Netlify (URL live) | No | No | Pendiente |
| 8 | 🔗 **Activar links de afiliados en UI** | **SÍ** ✅ | No | Pendiente |
| 9 | 💰 **Motor de tracking `generateTrackingLink()`** | **SÍ** ✅ | No | Pendiente |
| 10 | 🌐 Integración mxwithme.com (publicar proyecto) | No | No | Pendiente |
| 11 | 📝 Crear `identity.ts` (personalidad) | No | No | Pendiente |
| 12 | 📄 Renderizado Markdown en chat | No | No | Pendiente |
| 13 | 🧠 Capas selectivas (Capa 0 + 1 GRATIS) | No | **No** | Pendiente |
| 14 | 🧠 Integración LLM (solo cuando afiliados generen) | No | **SÍ** | Bloqueado |
| 15 | 🎯 Sistema de Diagnóstico Interactivo | No | Depende | Bloqueado |
| 16 | ⚡ Streaming SSE | No | Depende | Bloqueado |

---

## PRINCIPIOS FinOps APLICADOS

1. **Waterfall Model Selection:** Nunca enviar a un modelo Frontier lo que puede resolver un modelo ligero.
2. **Budget Gatekeeper:** Si el costo acumulado de una sesión supera $1.00, pausar y notificar.
3. **Capa 0 Gratuita:** Saludos y queries directas nunca deben consumir tokens de LLM.
4. **Subsidiación por Afiliados:** Cada centavo gastado en inferencia debe ser compensado por el ingreso potencial de los links de afiliado entregados.
5. **Previsibilidad:** El modelo "Resolver" (single-shot) garantiza costos por consulta predecibles, a diferencia del modelo "Router" agéntico (loops impredecibles).

---

*Documento generado por Antigravity — Sesión del 12/02/2026*
*Referencia: `docs/plans/insumos_originales/` (5 documentos estratégicos analizados)*
