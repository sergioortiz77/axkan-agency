# **INFORME DE INTELIGENCIA ESTRATÉGICA: ARQUITECTURA DE DATOS MAESTRA PARA HERRAMIENTAS DE IA Y MATRICES DE VALIDACIÓN CRÍTICA**

## **1\. Resumen Ejecutivo: La Imperativa de la Inteligencia de Datos**

Para la Dirección de Información (CIO) de Axkan Agency, la construcción de una Base de Datos Maestra de Inteligencia Artificial trasciende la mera catalogación de activos de software; constituye una infraestructura crítica de inteligencia competitiva en un mercado caracterizado por una volatilidad extrema y una opacidad técnica deliberada. Hacia el año fiscal 2026, el ecosistema global de IA ha mutado de una fase de exploración experimental a una etapa de consolidación industrial, donde la distinción entre valor tecnológico real y artificios de marketing —comúnmente denominados "Wrappers" o envoltorios— define la viabilidad operativa y financiera de cualquier implementación corporativa.

Este informe de investigación profunda (*Deep Research*) diseña la arquitectura de fuentes primarias necesaria para poblar dicho catálogo maestro. El análisis no se limita a listar herramientas, sino que establece los canales de datos duros (*Hard Data*) y blandos (*Soft Data*) que permitirán a Axkan Agency auditar automáticamente la solvencia técnica, la estabilidad comercial y el cumplimiento legal de cada activo. Se han identificado y validado fuentes que permiten la trazabilidad desde la interfaz de usuario hasta el Modelo Fundacional subyacente (ej. GPT-4, Claude 3.5, Llama 3), desvelando así la dependencia tecnológica y los riesgos de bloqueo del proveedor (*vendor lock-in*).

Asimismo, ante la inminente reestructuración del marco regulatorio en México con la transición de funciones del INAI a la nueva Secretaría Anticorrupción y Buen Gobierno, y la entrada en vigor de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de 2025, este informe integra fuentes de auditoría de cumplimiento que son mandatorias para cualquier operación que procese datos personales en territorio nacional. La estrategia de datos aquí presentada prioriza la ingestión automatizada vía API y *scraping* ético sobre la curación manual, asegurando que el catálogo de Axkan permanezca vivo y sincronizado con el estado del arte de la ingeniería global.

## ---

**2\. Matriz de Inteligencia de Fuentes Primarias (Formato Estructurado)**

A continuación, se presenta la selección curada de fuentes de datos, clasificadas según su utilidad para la ingestión técnica, validación comercial y auditoría legal. Esta matriz responde directamente al requisito de estructuración de datos para la ingesta en el sistema de gestión de Axkan.

| Nombre de la Fuente | Tipo (API/Repo/Web/Comunidad) | Calidad de Datos (1-5) | Descripción Técnica y Valor Estratégico para Axkan |
| :---- | :---- | :---- | :---- |
| **Artificial Analysis** | Web / Data Benchmark | 5 | **Fuente Crítica de Hard Data.** Proporciona métricas de rendimiento de inferencia (tokens/segundo), latencia y precios combinados de modelos fundacionales. Esencial para calcular el margen de sobreprecio de los "Wrappers" frente al costo base de la API.1 |
| **PartnerStack Marketplace** | Directorio / API | 5 | **Validación Comercial.** La presencia aquí indica madurez empresarial (programas de afiliados B2B estructurados). Permite inferir la salud financiera a través de las comisiones ofrecidas (ej. 30% recurrente indica alto LTV).3 |
| **LMSYS Chatbot Arena** | Repo / Dataset (CSV) | 5 | **Preferencia Humana.** Dataset de código abierto que clasifica modelos por Elo Rating basado en pruebas ciegas. Permite distinguir qué modelo subyacente es superior en tareas creativas vs. razonamiento.5 |
| **Futurepedia** | Web / Scraper (Apify) | 4 | **Catálogo General.** Fuente primaria para taxonomía y descubrimiento. Su estructura de datos es extraíble mediante actores de Apify para obtener descripciones, precios y categorías verificadas.6 |
| **There's An AI For That** | Web / Scraper | 4 | **Tendencias Históricas.** Única fuente con línea de tiempo de lanzamientos y métrica de "Guardados". Permite filtrar herramientas abandonadas ("abandonware") vs. herramientas con tracción real.8 |
| **OpenTools Registry** | API (Plugin) | 4 | **Integración Técnica.** Enfocado en desarrolladores. Su API expone metadatos sobre disponibilidad de API y licencias, crucial para integraciones técnicas internas.9 |
| **Mozilla Privacy Not Included** | Web / Auditoría | 5 | **Auditoría de Seguridad.** Evaluaciones profundas sobre encriptación, gestión de contraseñas y "nivel de espionaje" (Creepiness Score). Filtro obligatorio para herramientas de RRHH y Salud.11 |
| **GitHub: Awesome-AI-Agents** | Repo (Markdown) | 5 | **Soft Data Técnica.** Lista curada por ingenieros sobre marcos de agentes autónomos (CrewAI, LangChain). Filtra el ruido de marketing para revelar herramientas de orquestación real.13 |
| **CloudEagle** | Plataforma SaaS | 4 | **Gestión de Shadow AI.** Herramienta empresarial para descubrir uso no autorizado de IA dentro de la organización y gestionar renovaciones y cumplimiento.15 |
| **Secretaría Anticorrupción (MX)** | Marco Legal | 5 | **Cumplimiento Local.** Fuente normativa para los nuevos lineamientos de protección de datos en IA bajo la LFPDPPP 2025 y la nueva unidad de datos de la Secretaría.16 |

## ---

**3\. Análisis Profundo de Fuentes Técnicas: Distinción de "Foundation Models"**

El pilar central de la base de datos de Axkan es la capacidad de discernir la tecnología subyacente de cada herramienta. La proliferación de aplicaciones que son meras interfaces sobre APIs de terceros (Wrappers) representa un riesgo de *vendor lock-in* y volatilidad de precios. Para mitigar esto, la base de datos debe poblarse con inteligencia técnica que vincule cada herramienta comercial con su modelo fundacional.

### **3.1 Artificial Analysis: La Autoridad en Benchmarking de Modelos**

**Artificial Analysis** se establece como la fuente de "Hard Data" más confiable para métricas de rendimiento independientes. A diferencia de las hojas de especificaciones de marketing, esta fuente realiza pruebas empíricas continuas sobre los endpoints de inferencia.

* **Integración de Datos:** La base de datos de Axkan debe ingerir el **Índice de Inteligencia de Artificial Analysis**, que evalúa modelos en tareas complejas como razonamiento científico (GPQA Diamond) y codificación (SciCode).2  
* **Detección de Wrappers por Costos:** Al importar los datos de "Precio por Millón de Tokens" de los modelos fundacionales (ej. GPT-4o, Claude 3.5 Sonnet, Llama 3), Axkan puede establecer un algoritmo de validación financiera. Si una herramienta SaaS cobra una suscripción mensual fija que es desproporcionadamente baja comparada con el costo de inferencia de su supuesto modelo base, es un indicador de que la herramienta podría estar utilizando un modelo cuantizado de menor calidad o imponiendo límites de uso ocultos (throttling).  
* **Latencia y Velocidad:** Para aplicaciones de cara al cliente (chatbots, agentes de voz), la métrica de "Tiempo hasta el primer token" (TTFT) es crítica. Artificial Analysis desglosa esto por proveedor de nube, permitiendo a Axkan decidir no solo qué modelo usar, sino a través de qué proveedor (ej. usar Llama 3 a través de Groq para baja latencia vs. AWS Bedrock para estabilidad).1

### **3.2 LMSYS Chatbot Arena: Validación por Preferencia Humana**

Mientras que los benchmarks sintéticos miden la capacidad teórica, el **Chatbot Arena** de LMSYS mide la utilidad percibida.

* **Metodología de Ingesta:** El repositorio de GitHub de LMSYS contiene datasets abiertos de batallas de modelos (pares de respuestas juzgadas por humanos).5 Ingestar estos datos permite a Axkan entrenar modelos de preferencia interna o simplemente utilizar el ranking Elo actualizado para validar las afirmaciones de los proveedores.  
* **Aplicación Estratégica:** Si una herramienta de generación de texto afirma ser superior a GPT-4, Axkan puede consultar el ranking Elo actual. Si el modelo base de dicha herramienta tiene un Elo significativamente inferior, la afirmación se descarta automáticamente como hipérbole de marketing.

### **3.3 Repositorios de GitHub como Fuente de Verdad**

Para herramientas que afirman ser "Open Source" o propietarias, los repositorios de GitHub actúan como el registro notarial.

* Awesome-Foundation-Models 18: Este repositorio debe ser escaneado para mantener una lista actualizada de modelos fundacionales reales. Cualquier herramienta que no aparezca aquí o que no declare explícitamente su arquitectura debe ser clasificada preliminarmente como un Wrapper.  
* Foundation-models-for-cbmir 19: Para casos de uso especializados (ej. medicina, análisis de imágenes biológicas), este repositorio identifica modelos fundacionales específicos que los directorios generalistas ignoran. Esto es vital si Axkan planea auditar herramientas para clientes del sector salud o científico.

## ---

**4\. Inteligencia Comercial y Monetización: Validación de Modelos de Negocio**

La sostenibilidad de una herramienta de IA es tan importante como su capacidad técnica. Una herramienta técnicamente brillante sin un modelo de negocio claro es un riesgo operativo (podría desaparecer en 6 meses). La presencia en redes de afiliados y marketplaces de socios es el indicador más fuerte de salud comercial B2B.

### **4.1 PartnerStack: El Estándar de Madurez B2B**

PartnerStack no es simplemente un directorio de enlaces; es una plataforma de gestión de ecosistemas. Las empresas que utilizan PartnerStack han invertido en infraestructura de seguimiento, atribución y pagos a socios, lo que indica una operación madura y financiada.

* **Datos a Extraer vía API/Scraping:**  
  * **Estructura de Comisiones:** Herramientas que ofrecen comisiones recurrentes vitalicias (ej. 30% *lifetime*) 3 sugieren una alta retención de clientes (LTV) y confianza en su producto. Herramientas con modelos de pago único (CPA) pueden estar más enfocadas en la adquisición agresiva con menor retención.  
  * **Programas Específicos Identificados:**  
    * **Browse AI:** Herramienta de scraping no-code con validación de empresas Fortune 500 y un programa de socios robusto (20% recurrente).20 Esto la valida como una herramienta de infraestructura, no solo un juguete.  
    * **Descript:** Edición de video/audio basada en IA. Su presencia confirma su estatus como estándar de la industria para creadores.21  
* **Valor para Axkan:** Integrar la API de PartnerStack 22 permite a Axkan monitorear la "salud" del programa de socios. Un programa que reduce comisiones o cierra inscripciones es una señal temprana de problemas financieros o cambios estratégicos adversos.

### **4.2 Impact Radius y Vendr: Inteligencia de Precios y Gran Consumo**

* **Impact Radius:** Alberga marcas de consumo masivo y herramientas de diseño (ej. Canva, Adobe). La presencia aquí indica una orientación B2C o Prosumer. Para Axkan, estas herramientas son útiles para equipos creativos pero pueden carecer de las características de seguridad empresarial (SSO, RBAC) que requieren los clientes corporativos grandes.23  
* **Vendr:** Esta plataforma de gestión de compras SaaS ofrece "benchmarks de precios" reales. Al consultar los datos de Vendr, Axkan puede saber el precio real de transacción de herramientas empresariales (como Splunk o Elastic), que a menudo difiere del precio de lista. Esto es inteligencia pura para la negociación de contratos.24

## ---

**5\. "Soft Data" Específica: Ingeniería de Flujos de Trabajo**

La distinción entre un "influencer de IA" y un "ingeniero de IA" es crítica para filtrar el ruido. La base de datos debe priorizar fuentes que demuestren la implementación técnica, no solo la demostración de características.

### **5.1 Canales de YouTube de Ingeniería (Nivel Técnico Alto)**

El análisis de contenido de video revela capacidades que las hojas de especificaciones ocultan. Se priorizan canales que muestran código y arquitecturas de sistemas.

* **IBM Technology:** A diferencia de otros canales corporativos, IBM ofrece explicaciones agnósticas y profundas sobre conceptos como RAG (Retrieval-Augmented Generation), bases de datos vectoriales y gobernanza de IA. Es una fuente educativa para el equipo técnico de Axkan.26  
* **Implementaciones Prácticas (Tyler Reed / CodeWithBrandon):** Se identificaron canales que demuestran flujos de trabajo complejos, como "Construir un equipo de ingeniería de IA autónomo dentro de n8n".27 Este tipo de contenido es *oro molido* para Axkan, ya que valida que una herramienta (en este caso, n8n) es capaz de orquestar agentes múltiples, una capacidad técnica superior a la de un simple chatbot.  
* **Matt Wolfe (FutureTools):** Aunque tiene un enfoque amplio, su resumen semanal ("This Week in AI") es una fuente eficiente para mantenerse al día con los lanzamientos de modelos open source y actualizaciones de APIs.28

### **5.2 Substacks y Listas "Awesome" en GitHub**

* **The Pragmatic Engineer (Gergely Orosz):** Ofrece una perspectiva desde la ingeniería de software senior. Cuando este boletín menciona una herramienta de IA para codificación o productividad, viene con el sello de aprobación de la ingeniería de "Big Tech".29  
* **SemiAnalysis:** Proporciona análisis profundo sobre la economía de los semiconductores y los costos de cómputo. Es esencial para entender la viabilidad a largo plazo de los proveedores de modelos fundacionales (ej. ¿Es sostenible el precio de GPT-4o?).29  
* Awesome-AI-Agents 13 & Awesome-RAG 30: Estos repositorios son taxonomías vivas. Permiten a Axkan clasificar herramientas en categorías precisas como "RAG Modular", "Agentes Autónomos", o "Orquestación de Flujos". Si una herramienta no aparece en estas listas comunitarias ni se integra con los frameworks mencionados (LangChain, LlamaIndex), es probable que sea un sistema cerrado y limitado.

## ---

**6\. Cumplimiento Legal y Gobernanza: El Contexto Mexicano y Global**

La auditoría legal es el filtro final y más importante. Una herramienta puede ser técnicamente superior y comercialmente viable, pero si viola la LFPDPPP o el GDPR, es inutilizable para Axkan.

### **6.1 Auditoría de Privacidad: Mozilla "Privacy Not Included"**

La guía de Mozilla es la auditoría pública más rigurosa sobre privacidad de aplicaciones.

* **Métricas de Auditoría:** Axkan debe incorporar el campo "Creepiness Score" (Nivel de Invasión) en su base de datos. Las herramientas marcadas con la etiqueta "Privacy Not Included" (Privacidad No Incluida) deben ser bloqueadas por defecto.11  
* **Hallazgos Críticos:**  
  * **Chatbots Románticos y de Salud Mental:** Categorías de altísimo riesgo. Aplicaciones como *Replika* o *Anima* recopilan datos íntimos y a menudo comparten información con anunciantes, violando principios básicos de minimización de datos.11  
  * **Seguridad IoT:** Mozilla evalúa si los dispositivos tienen actualizaciones automáticas de seguridad y contraseñas fuertes. Muchos dispositivos "inteligentes" fallan en estos básicos.12

### **6.2 El Nuevo Marco Regulatorio en México (2025-2026)**

El panorama regulatorio en México está sufriendo una transformación estructural que impacta directamente la operación de Axkan.

* **Transición Institucional:** Con la extinción del INAI, las funciones de tutela de datos personales están siendo transferidas a la nueva **Secretaría Anticorrupción y Buen Gobierno**.16 Axkan debe monitorear los lineamientos emitidos por la nueva **Unidad de Protección de Datos en Inteligencia Artificial**.  
* **LFPDPPP de 2025:** La nueva Ley Federal introduce conceptos críticos:  
  * **Derecho de Oposición al Tratamiento Automatizado:** Los ciudadanos tienen derecho a oponerse a decisiones tomadas únicamente por IA que les afecten jurídicamente.16 Esto obliga a Axkan a asegurar que cualquier herramienta de IA utilizada para perfilar clientes o empleados tenga capacidad de intervención humana (*Human-in-the-loop*).  
  * **Auditorías de Confidencialidad:** La ley exige auditorías internas continuas sobre las fuentes de datos y políticas de retención. La base de datos maestra debe registrar no solo qué herramienta se usa, sino *dónde* almacena los datos (residencia de datos) para facilitar estas auditorías obligatorias.  
* **Responsabilidad Extendida:** La definición de "Responsable" se ha ampliado para incluir a quienes procesan datos, no solo a quienes deciden sobre ellos. Esto significa que si Axkan usa un Wrapper que filtra datos, Axkan es solidariamente responsable. Por ello, la distinción técnica entre Wrapper y Modelo Fundacional se convierte en una distinción de responsabilidad legal.

### **6.3 Compliance Internacional: EU AI Act**

Aunque Axkan opere en México, el **EU AI Act** establece el estándar global ("Efecto Bruselas"). Herramientas clasificadas como de "Alto Riesgo" bajo esta normativa (ej. selección de personal, biometría) deben ser tratadas con extrema precaución. Las herramientas de cumplimiento como **CloudEagle** 15 y los checkers de la Future of Life Institute 32 pueden integrarse para automatizar esta clasificación de riesgo.

## ---

**7\. Estrategia de Implementación y Arquitectura de Datos**

Para operacionalizar esta inteligencia, se propone la siguiente arquitectura de ingestión para la Base de Datos Maestra.

### **7.1 Arquitectura de Ingestión Automatizada**

El sistema no debe depender de la entrada manual. Se deben configurar "Actores" de scraping y conexiones API:

1. **Nivel de Descubrimiento (Broad Crawl):**  
   * Utilizar **Apify** con el actor Futurepedia Scraper 6 para ingerir nuevas herramientas semanalmente.  
   * Extraer metadatos de **There's An AI For That** para capturar tendencias de lanzamiento y popularidad ("Save Count").8  
2. **Nivel de Enriquecimiento Técnico:**  
   * Cruzar los nombres de herramientas con la API de **OpenTools** 10 para obtener enlaces a repositorios y documentación técnica.  
   * Consultar **Artificial Analysis** para obtener benchmarks del modelo fundacional subyacente (si se declara).  
3. **Nivel de Validación Comercial:**  
   * Consultar la API de **PartnerStack** 4 para verificar la existencia de programas de socios activos y detalles de comisiones.  
4. **Nivel de Auditoría Legal:**  
   * Cruzar con la lista negra de **Mozilla Privacy Not Included**.  
   * Verificar si la política de privacidad menciona cumplimiento con GDPR o LFPDPPP (búsqueda de palabras clave automatizada).

### **7.2 Estructura de Datos Propuesta (Esquema de Tabla)**

| Campo | Fuente de Datos | Lógica de Negocio |
| :---- | :---- | :---- |
| ID\_Herramienta | Interno | Identificador único. |
| Nombre\_Oficial | Futurepedia | Nombre comercial. |
| Modelo\_Fundacional | Artificial Analysis / Manual | **Crítico.** ¿Es GPT-4, Claude, o Propietario? Define riesgo de dependencia. |
| Tipo\_Tecnico | Heurística | "Wrapper", "Modelo", "Plataforma". |
| Estado\_Comercial | PartnerStack | "Enterprise" (si está en PartnerStack), "Consumer" (Impact), "Indie". |
| Riesgo\_Privacidad | Mozilla / CloudEagle | Escala 1-5. 5 \= "Privacy Not Included". |
| Cumplimiento\_MX | Revisión Legal | ¿Permite derechos ARCO? ¿Dónde se alojan los datos? |
| Recurso\_Ingenieria | YouTube / GitHub | Enlace a tutorial técnico validado (ej. video de IBM o repo Awesome). |

### **7.3 Conclusión y Siguientes Pasos**

La construcción de esta base de datos es un ejercicio de **soberanía tecnológica**. Al distinguir entre la "capa de pintura" (Wrappers) y el "motor" (Modelos Fundacionales), y al validar la solvencia comercial y legal de cada proveedor, Axkan Agency se protege contra la volatilidad del mercado y asegura una operación resiliente ante el nuevo marco regulatorio mexicano de 2025\.

**Acción Inmediata:** Configurar los *scrapers* de Apify para Futurepedia y PartnerStack Marketplace para generar el primer volcado de datos crudos ("Raw Data Lake"), y proceder a la clasificación técnica manual de las 50 herramientas más críticas utilizando los benchmarks de Artificial Analysis.

#### **Obras citadas**

1. Language Model Benchmarking Methodology \- Artificial Analysis, fecha de acceso: febrero 12, 2026, [https://artificialanalysis.ai/methodology](https://artificialanalysis.ai/methodology)  
2. GPT-4o mini \- Intelligence, Performance & Price Analysis, fecha de acceso: febrero 12, 2026, [https://artificialanalysis.ai/models/gpt-4o-mini](https://artificialanalysis.ai/models/gpt-4o-mini)  
3. Artificial Intelligence \- PartnerStack, fecha de acceso: febrero 12, 2026, [https://market.partnerstack.com/artificial-intelligence](https://market.partnerstack.com/artificial-intelligence)  
4. Retrieve a marketplace program \- the PartnerStack Docs, fecha de acceso: febrero 12, 2026, [https://docs.partnerstack.com/reference/get\_v2-marketplace-programs-company-key](https://docs.partnerstack.com/reference/get_v2-marketplace-programs-company-key)  
5. DaoyuanLi2816/Kaggle-4th-Place-Solution-LMSYS-Chatbot-Arena-Human-Preference-Predictions \- GitHub, fecha de acceso: febrero 12, 2026, [https://github.com/DaoyuanLi2816/Kaggle-4th-Place-Solution-LMSYS-Chatbot-Arena-Human-Preference-Predictions](https://github.com/DaoyuanLi2816/Kaggle-4th-Place-Solution-LMSYS-Chatbot-Arena-Human-Preference-Predictions)  
6. Extract Best AI Tools from Futurepedia \- MrScraper, fecha de acceso: febrero 12, 2026, [https://mrscraper.com/usecase/Extract-Best-AI-Tools-from-Futurepedia](https://mrscraper.com/usecase/Extract-Best-AI-Tools-from-Futurepedia)  
7. Browse AI: Scrape and Monitor Data from Any Website with No Code, fecha de acceso: febrero 12, 2026, [https://www.browse.ai/](https://www.browse.ai/)  
8. Most Saved AIs \- There's An AI For That, fecha de acceso: febrero 12, 2026, [https://theresanaiforthat.com/most-saved/](https://theresanaiforthat.com/most-saved/)  
9. MCP Server Registry \- OpenTools, fecha de acceso: febrero 12, 2026, [https://opentools.com/registry](https://opentools.com/registry)  
10. Create API-based Message Extension \- Teams \- Microsoft Learn, fecha de acceso: febrero 12, 2026, [https://learn.microsoft.com/en-us/microsoftteams/platform/messaging-extensions/api-based-overview](https://learn.microsoft.com/en-us/microsoftteams/platform/messaging-extensions/api-based-overview)  
11. AI Chatbots | Privacy & Security Guide | Mozilla Foundation, fecha de acceso: febrero 12, 2026, [https://foundation.mozilla.org/en/privacynotincluded/categories/ai-chatbots/](https://foundation.mozilla.org/en/privacynotincluded/categories/ai-chatbots/)  
12. The State of Mozilla: 2018 Annual Report, fecha de acceso: febrero 12, 2026, [https://www.mozilla.org/en-US/foundation/annualreport/2018/](https://www.mozilla.org/en-US/foundation/annualreport/2018/)  
13. 500-AI-Agents-Projects \- UseCase \- GitHub, fecha de acceso: febrero 12, 2026, [https://github.com/ashishpatel26/500-AI-Agents-Projects](https://github.com/ashishpatel26/500-AI-Agents-Projects)  
14. slavakurilyak/awesome-ai-agents: Awesome list of 300+ agentic AI resources \- GitHub, fecha de acceso: febrero 12, 2026, [https://github.com/slavakurilyak/awesome-ai-agents](https://github.com/slavakurilyak/awesome-ai-agents)  
15. AI Compliance Checklist: SOC 2, GDPR, and EU AI Act | CloudEagle ..., fecha de acceso: febrero 12, 2026, [https://www.cloudeagle.ai/blogs/ai-compliance-checklist](https://www.cloudeagle.ai/blogs/ai-compliance-checklist)  
16. Mexico's new Federal Data Protection Law: What it means for ..., fecha de acceso: febrero 12, 2026, [https://www.hoganlovells.com/en/publications/mexicos-new-federal-data-protection-law-what-it-means-for-companies](https://www.hoganlovells.com/en/publications/mexicos-new-federal-data-protection-law-what-it-means-for-companies)  
17. Página 1 de 43 INICIATIVA CON PROYECTO DE DECRETO POR EL QUE SE EXPIDE LA LEY GENERAL PARA EL DESARROLLO ÉTICO Y TECNOLÓGICO \- SIL, fecha de acceso: febrero 12, 2026, [http://sil.gobernacion.gob.mx/Archivos/Documentos/2025/09/asun\_4926724\_20250917\_1758560760.pdf](http://sil.gobernacion.gob.mx/Archivos/Documentos/2025/09/asun_4926724_20250917_1758560760.pdf)  
18. uncbiag/Awesome-Foundation-Models \- GitHub, fecha de acceso: febrero 12, 2026, [https://github.com/uncbiag/Awesome-Foundation-Models](https://github.com/uncbiag/Awesome-Foundation-Models)  
19. MIC-DKFZ/foundation-models-for-cbmir \- GitHub, fecha de acceso: febrero 12, 2026, [https://github.com/MIC-DKFZ/foundation-models-for-cbmir](https://github.com/MIC-DKFZ/foundation-models-for-cbmir)  
20. Browse AI \- Partnerstack \- Program Directory, fecha de acceso: febrero 12, 2026, [https://market.partnerstack.com/page/browseai](https://market.partnerstack.com/page/browseai)  
21. 5 AI Marketing Tools That Stand Above the Rest | IMPACT, fecha de acceso: febrero 12, 2026, [https://www.impactplus.com/blog/ai-tools-marketing](https://www.impactplus.com/blog/ai-tools-marketing)  
22. Using the Partner API and Postbacks \- PartnerStack support, fecha de acceso: febrero 12, 2026, [https://support.partnerstack.com/hc/en-us/articles/31444178237587-Using-the-Partner-API-and-Postbacks](https://support.partnerstack.com/hc/en-us/articles/31444178237587-Using-the-Partner-API-and-Postbacks)  
23. Affiliate Partner Marketplace \- impact.com, fecha de acceso: febrero 12, 2026, [https://impact.com/partners/affiliate-partners/](https://impact.com/partners/affiliate-partners/)  
24. Vendr Pricing Guide \- Should You Choose It? \- CloudEagle.ai, fecha de acceso: febrero 12, 2026, [https://www.cloudeagle.ai/blogs/vendr-pricing-guide](https://www.cloudeagle.ai/blogs/vendr-pricing-guide)  
25. Elastic Software Pricing & Plans 2025: See Your Cost \- Vendr, fecha de acceso: febrero 12, 2026, [https://www.vendr.com/marketplace/elastic](https://www.vendr.com/marketplace/elastic)  
26. How to Build No Code AI Workflows | AI Automation | Simplilearn \- YouTube, fecha de acceso: febrero 12, 2026, [https://www.youtube.com/watch?v=rZRPElFzrqc](https://www.youtube.com/watch?v=rZRPElFzrqc)  
27. I Built a Fully Autonomous AI Engineering Team in n8n (End‑to‑End Workflow Tutorial \+ Live Demo) \- YouTube, fecha de acceso: febrero 12, 2026, [https://www.youtube.com/watch?v=FQGEE1iCrkk](https://www.youtube.com/watch?v=FQGEE1iCrkk)  
28. Don't learn AI Agents without Learning these Fundamentals \- YouTube, fecha de acceso: febrero 12, 2026, [https://www.youtube.com/watch?v=ZaPbP9DwBOE](https://www.youtube.com/watch?v=ZaPbP9DwBOE)  
29. Best Technology Newsletters on Substack, fecha de acceso: febrero 12, 2026, [https://substack.com/top/technology](https://substack.com/top/technology)  
30. Danielskry/Awesome-RAG: Awesome list of Retrieval-Augmented Generation (RAG) applications in Generative AI. \- GitHub, fecha de acceso: febrero 12, 2026, [https://github.com/Danielskry/Awesome-RAG](https://github.com/Danielskry/Awesome-RAG)  
31. fecha de acceso: diciembre 31, 1969, [https://foundation.mozilla.org/en/privacynotincluded/categories/ai-apps/](https://foundation.mozilla.org/en/privacynotincluded/categories/ai-apps/)  
32. EU AI Act Compliance Checker | EU Artificial Intelligence Act, fecha de acceso: febrero 12, 2026, [https://artificialintelligenceact.eu/assessment/eu-ai-act-compliance-checker/](https://artificialintelligenceact.eu/assessment/eu-ai-act-compliance-checker/)