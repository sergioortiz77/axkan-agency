# **Informe Exhaustivo sobre Infraestructura de Hardware para Cronobiología Computacional: Compatibilidad, Especificaciones y Validación en los Ecosistemas pyActigraphy y HypnosPy**

## **1\. El Nuevo Paradigma de la Actigrafía Computacional: De Cajas Negras a Ciencia Abierta**

La actigrafía, definida como el monitoreo continuo de la actividad motora humana mediante acelerometría vestible, ha constituido durante las últimas cuatro décadas el estándar de oro ("gold standard") para la evaluación objetiva de los patrones de sueño-vigilia y los ritmos circadianos en entornos de vida libre o ambulatorios.1 Tradicionalmente, este campo ha estado dominado por un modelo de "jardín vallado", donde los fabricantes de hardware (como Philips Respironics, ActiGraph o Ambulatory Monitoring Inc.) proveían no solo los sensores físicos, sino también el software propietario indispensable para decodificar, procesar y analizar los datos recolectados. Este enfoque, aunque funcional para la práctica clínica estándar, ha presentado limitaciones significativas para la investigación científica avanzada: la opacidad de los algoritmos de detección de sueño (frecuentemente "cajas negras" patentadas), la dificultad para procesar grandes volúmenes de datos ("Big Data") y la incompatibilidad entre formatos de archivo de diferentes marcas.3

La emergencia de librerías de código abierto basadas en Python, específicamente **pyActigraphy** y **HypnosPy**, representa un cambio de paradigma fundamental. Estas herramientas no solo democratizan el acceso a algoritmos de análisis de vanguardia —como el Análisis de Fluctuación Sin Tendencia (DFA) o el Espectro Singular (SSA)— sino que también actúan como puentes universales, permitiendo la ingestión de datos de una heterogeneidad de dispositivos que abarca desde los actígrafos clínicos históricos hasta los modernos sensores de consumo masivo.3

Este informe técnico analiza en profundidad el ecosistema de hardware compatible con estas dos librerías, basándose estrictamente en la documentación oficial de sus repositorios y la literatura científica asociada. Se examinan las especificaciones técnicas, la validación científica, los modelos de distribución y los costos de los dispositivos soportados, proporcionando una guía exhaustiva para investigadores que buscan transicionar hacia flujos de trabajo de ciencia abierta en cronobiología.

## ---

**2\. Ecosistema de Hardware en pyActigraphy: Soporte Nativo y Legado**

La librería **pyActigraphy**, desarrollada y mantenida por la comunidad científica (liderada por Grégory Hammad et al.), se distingue por su robusta capacidad de ingeniería inversa. Su arquitectura está diseñada para leer de forma nativa los formatos de archivo propietarios —a menudo binarios y cerrados— de los fabricantes más relevantes de la historia de la actigrafía. Esto permite a los investigadores no solo utilizar hardware actual, sino también "rescatar" y reanalizar bases de datos históricas almacenadas en formatos obsoletos, asegurando la continuidad de estudios longitudinales.4

### **2.1. Ametris (Anteriormente ActiGraph): La Familia wGT3X-BT**

El dispositivo **wGT3X-BT**, fabricado por ActiGraph (empresa recientemente reestructurada bajo la marca **Ametris**), es posiblemente el acelerómetro más citado en la literatura científica sobre actividad física y sueño. La documentación de pyActigraphy confirma el soporte completo para la lectura de archivos nativos .agd (ActiGraph Data) generados por este dispositivo, lo que permite a los usuarios evitar el software propietario ActiLife para la extracción de datos.4

#### **2.1.1. Especificaciones Técnicas y Sensores**

El wGT3X-BT es un monitor de actividad MEMS (Sistemas Microelectromecánicos) triaxial que destaca por su versatilidad y validación.

| Característica | Especificación Técnica Detallada |
| :---- | :---- |
| **Sensor Primario** | Acelerómetro MEMS triaxial con rango dinámico de \+/- 8G. |
| **Frecuencia de Muestreo** | Configurable por el usuario entre 30 Hz y 100 Hz. |
| **Resolución** | Convertidor analógico-digital de 12 bits. |
| **Sensor de Luz Ambiental** | Fotodiodo integrado que registra valores de lux minuto a minuto. |
| **Detección de Uso** | Sensor capacitivo en la parte posterior ("Wear Time Sensor") para detectar contacto con la piel. |
| **Comunicación** | USB y Bluetooth® LE (Smart) para transmisión inalámbrica y monitorización de frecuencia cardíaca (opcional). |
| **Almacenamiento** | Memoria Flash no volátil de 4 GB (aprox. 180 días de registro). |
| **Batería** | Polímero de litio recargable. Autonomía de 25 días. |
| **Resistencia al Agua** | IPX7 (Sumergible a 1 metro durante 30 minutos). |
| **Dimensiones y Peso** | 4.6 x 3.3 x 1.5 cm; 19 gramos. |

La inclusión de un sensor de luz ambiental es crítica para la cronobiología, ya que la luz es el principal *zeitgeber* (sincronizador externo) del reloj circadiano humano. pyActigraphy permite extraer y correlacionar estas series temporales de luz con los patrones de actividad.6 El sensor capacitivo de "tiempo de uso" resuelve uno de los problemas metodológicos más graves en la actigrafía: distinguir entre el sueño (inmovilidad) y los periodos en los que el usuario se ha quitado el dispositivo.

#### **2.1.2. Validación Científica**

La validación del wGT3X-BT es extensa. Revisiones sistemáticas han demostrado que posee una buena validez de criterio para el conteo de pasos y la estimación de distancia en adultos y ancianos, superando a modelos predecesores como el GT1M.8 En el contexto clínico, se ha validado su precisión para medir el gasto energético en pacientes con enfermedades neurodegenerativas (como la enfermedad de Huntington) en comparación con la calorimetría indirecta.10 Sin embargo, es crucial notar que los datos brutos de actigrafía pueden sobreestimar la ritmicidad circadiana en pacientes con trastornos de la conciencia o movilidad reducida si no se corrigen los movimientos pasivos (e.g., cuidados de enfermería), una corrección que pyActigraphy facilita mediante algoritmos de filtrado.11

#### **2.1.3. Precios y Distribución**

Ametris ha transicionado hacia un modelo de ventas consultivas, donde los precios no son fijos sino que dependen del volumen y la naturaleza del estudio.

* **Costos:** Históricamente, el wGT3X-BT se posicionaba en el rango de **$225 a $400 USD** por unidad para investigación académica, siendo una opción más económica que los actígrafos puramente clínicos.12 Actualmente, el dispositivo se considera un producto "legacy" (legado), y Ametris promueve activamente sus nuevas líneas como el **ActiGraph LEAP** y el **CentrePoint Insight Watch**, aunque el soporte para el wGT3X-BT continúa debido a su masiva base instalada.14  
* **Distribuidores:**  
  * **Global:** Ametris (Sede en Pensacola, FL, EE.UU.) gestiona las ventas directas.14  
  * **Europa:** La red de revendedores autorizados incluye a **Timik** (Escandinavia), **TSP Diffusion** (Francia, Italia, Chipre, Suiza) y **ProCare** (Benelux, Alemania).15  
  * **Asia:** Distribuidores como **B\&E Teksystems** (China), **Shinwoo LS** (Corea del Sur) y **ProMedical** (Taiwán) aseguran la cobertura en el mercado asiático.17

### ---

**2.2. CamNtech: La Excelencia Europea en Monitorización del Sueño**

La empresa británica **CamNtech** es heredera directa de la tecnología original de Actiwatch, desarrollada inicialmente por Cambridge Neurotechnology antes de la adquisición de la marca por Philips. pyActigraphy ofrece soporte completo para la lectura de archivos de los modelos **Actiwatch 4, 7, L(-Plus)** y el actual buque insignia, el **MotionWatch 8**.3

#### **2.2.1. MotionWatch 8: Especificaciones y Diseño**

El MotionWatch 8 (MW8) se ha diseñado específicamente para superar las limitaciones de la actigrafía de consumo en estudios clínicos de larga duración. Su característica más distintiva es la ausencia de una base de carga propietaria; cuenta con un conector USB integrado directamente en el cuerpo del reloj, simplificando enormemente la logística en ensayos multicéntricos.18

| Característica | Especificación Técnica Detallada |
| :---- | :---- |
| **Acelerómetro** | Triaxial de tecnología MEMS (Rango 0.01g a 8g; Frecuencia 3-11 Hz). |
| **Sensor de Luz** | Sensor de luz ambiental con respuesta espectral ajustada al ojo humano. |
| **Batería** | Pila de botón de litio CR2032 reemplazable por el usuario. |
| **Autonomía** | De 3 a 6 meses de grabación continua, eliminando la necesidad de recarga. |
| **Almacenamiento** | 4 Mbits de memoria no volátil (aprox. 120 días con épocas de 1 min). |
| **Resistencia al Agua** | IPX7 (Resistente al agua, apto para ducha y natación superficial). |
| **Peso** | Ultraligero: 9.1 gramos (sin correa). |
| **Marcador de Eventos** | Botón físico prominente para marcar "Lights Out" / "Lights On". |

La autonomía de varios meses es una ventaja decisiva para estudios longitudinales de cronobiología, ya que elimina el sesgo de datos perdido por olvidos de recarga, un problema común en dispositivos recargables como el Apple Watch o Fitbit.19

#### **2.2.2. Validación Científica y Limitaciones**

El MotionWatch 8 posee una validación robusta contra polisomnografía (PSG). Estudios recientes han demostrado una sensibilidad muy alta para la detección de sueño (94.8%), lo que lo hace excelente para medir el Tiempo Total de Sueño (TST). Sin embargo, comparte la limitación inherente a la actigrafía de acelerometría pura: una especificidad baja para detectar vigilia (33.1%), lo que puede llevar a sobreestimar la eficiencia del sueño en pacientes con insomnio severo o sueño muy fragmentado.20 A pesar de esto, se han establecido puntos de corte ("cut-points") validados para clasificar niveles de actividad (sedentaria, ligera, moderada-vigorosa) en poblaciones de adultos mayores, proporcionando un marco de referencia sólido para la investigación en envejecimiento saludable.21

#### **2.2.3. Distribución y Costos**

El MotionWatch 8 se posiciona en el segmento premium del mercado de investigación.

* **Precio:** Aproximadamente **$995 USD** o entre **£600 y £800 GBP** por unidad, dependiendo del volumen y la configuración (kits con software).13  
* **Distribuidores:** CamNtech opera con un modelo dual.  
  * **Venta Directa:** CamNtech Ltd (Cambridge, UK) para Europa y el resto del mundo; CamNtech Inc (Boerne, Texas) para el mercado norteamericano.22  
  * **Soporte:** La empresa promueve la ciencia abierta ofreciendo un "Sleep Toolkit" gratuito que permite generar informes básicos sin costos de licencia de software adicionales, alineándose con la filosofía de pyActigraphy.24

### ---

**2.3. Condor Instruments: Innovación Latinoamericana en Sensores Multiespectrales**

**Condor Instruments**, con sede en São Paulo, Brasil, ha emergido como un actor global clave, especialmente tras la retirada de Philips del mercado. Su dispositivo **ActTrust 2** es soportado nativamente por pyActigraphy, lo que subraya la relevancia de la tecnología latinoamericana en el consorcio global de investigación.5

#### **2.3.1. ActTrust 2: Más Allá del Movimiento**

El ActTrust 2 redefine la actigrafía al integrar una matriz de sensores ambientales que lo convierten en una herramienta de dosimetría de luz avanzada, esencial para estudios modernos de ritmos circadianos que requieren evaluar la exposición a luz azul (melanópica).

| Característica | Especificación Técnica Detallada |
| :---- | :---- |
| **Acelerometría** | Triaxial MEMS. Modos de procesamiento: PIM (Proportional Integral Mode), ZCM, TAT. |
| **Sensores de Luz** | Espectrometría dedicada: Sensores independientes para luz Roja, Verde, Azul (RGB) e Infrarroja (IR). |
| **Luz Melanópica** | Cálculo específico de irradiancia melanópica (supresión de melatonina). |
| **Termometría** | Sensor de temperatura de la piel (muñeca) y sensor de temperatura ambiental. |
| **Batería** | Recargable, con autonomía de hasta 3 meses (épocas de 60s). |
| **Resistencia** | IP67 (Totalmente estanco al polvo, inmersión temporal). |
| **Interfaz** | Pantalla LCD con reloj y feedback visual. |

El sensor de **temperatura de la piel** es una característica diferenciadora crítica. El ritmo de temperatura periférica es un marcador robusto del sistema circadiano, a menudo más fiable que la actividad motora en pacientes encamados o con movilidad reducida. La capacidad de medir luz azul (460-480 nm) permite investigar directamente la disrupción circadiana provocada por la iluminación artificial nocturna.26

#### **2.3.2. Validación y Contexto Regional**

El ActTrust 2 es el sucesor espiritual del **Tempatilumi (ACT10)**, un dispositivo histórico desarrollado en la Universidad de São Paulo (USP) que también es soportado por pyActigraphy para permitir el análisis de datos retrospectivos de la investigación brasileña.5 La validación del ActTrust 2 es sólida, habiendo sido utilizado en condiciones extremas como expediciones en el Ártico y en submarinos, entornos donde la desincronización circadiana es severa. Estudios publicados en *Biology* y otras revistas de alto impacto han utilizado el ActTrust 2 para calcular métricas complejas como el "Normalized Amplitude of Blue Light Exposure" (NA BLE), demostrando su utilidad para cuantificar la "higiene de luz" circadiana.29 Aunque Condor suministra el software propietario **ActStudio**, la integración con pyActigraphy ofrece una vía de validación independiente, permitiendo a los investigadores auditar los algoritmos de cálculo de temperatura y luz.5

#### **2.3.3. Distribución**

* **Sede:** São Paulo, Brasil.31  
* **Red Global:** Condor Instruments ha establecido una red de distribución efectiva para penetrar mercados dominados por marcas europeas y norteamericanas.  
  * **Europa:** TIVAL Sensors (Alemania), Condor Benelux (Países Bajos), Schmachtl GmbH (Austria).32  
  * **Asia:** Distribuidores en China, Corea del Sur y Taiwán.  
  * **Costos:** Los precios se manejan bajo cotización directa, posicionándose competitivamente frente a CamNtech y Ametris.

### ---

**2.4. El Legado de Philips Respironics: Actiwatch**

La familia **Actiwatch** (modelos Actiwatch 2 y Actiwatch Spectrum Plus/Pro) ha sido, hasta hace poco, el estándar indiscutible en la investigación clínica del sueño. pyActigraphy mantiene un soporte vital para estos dispositivos.5 **Situación de Mercado:** Philips anunció la discontinuación de toda su línea de actigrafía en 2022, cesando el soporte técnico a finales de 2023\.33 Esto ha generado un "vacío" en el mercado que empresas como Condor y CamNtech están llenando. Sin embargo, la inmensa cantidad de datos históricos generados por estos dispositivos (petabytes de información en estudios como MESA) hace que la compatibilidad de pyActigraphy sea esencial para la ciencia de datos retrospectiva.34

### ---

**2.5. Dispositivos Históricos y de Nicho**

pyActigraphy demuestra su compromiso con la preservación de datos científicos al soportar dispositivos de nicho:

* **Daqtometer (Daqtix):** Un dispositivo alemán utilizado extensivamente en estudios de cronotipos (MCTQ) en Europa. Aunque la empresa Daqtix parece haber cesado sus operaciones comerciales a gran escala, el soporte de pyActigraphy asegura que los datos de cohortes alemanas puedan seguir siendo analizados.35  
* **Tempatilumi (CE Brasil):** Como se mencionó, este precursor del ActTrust fue fundamental en la cronobiología brasileña. Su inclusión permite integrar décadas de investigación latinoamericana en metaanálisis globales.5

## ---

**3\. Ecosistema de Datos Crudos y Biobancos: Axivity y GENEActiv**

Para la investigación epidemiológica a gran escala (biobancos con N \> 10,000), el costo y la accesibilidad a los datos crudos (acelerometría pura en *g*) son prioritarios sobre los algoritmos propietarios de sueño. pyActigraphy soporta estos dispositivos mediante la integración con paquetes como accelerometer.

### **3.1. Axivity AX3 / AX6: El Estándar del UK Biobank**

El **AX3** de Axivity (Newcastle, UK) es un dispositivo disruptivo por su filosofía "Open Movement". Utiliza un formato de archivo de código abierto (.cwa) que pyActigraphy puede ingerir y procesar.37

* **Especificaciones:** Sensor MEMS triaxial, sensor de luz y temperatura. Memoria de 512 MB (14 días a 100 Hz). Sumergible IPx8 (1.5 metros).  
* **Economía:** Es extremadamente competitivo, con un precio aproximado de **£139 GBP** (\~$180 USD) por sensor ("Puck"). Esto lo hace viable para estudios poblacionales masivos.  
* **Validación:** Su validación es extensa debido a su uso en el **UK Biobank** (100,000 participantes). Estudios comparativos muestran una alta equivalencia con GENEActiv y ActiGraph cuando se procesan los datos crudos con algoritmos estandarizados como GGIR o pyActigraphy.38

### **3.2. GENEActiv: Pioneros en Datos Crudos**

Fabricado por **ActivInsights**, el GENEActiv fue el primer dispositivo diseñado específicamente para entregar datos crudos no filtrados, eliminando el concepto de "counts" (cuentas) propietario.

* **Uso:** Dispositivo de elección en el estudio **Whitehall II**.  
* **Características:** Robusto, sumergible, sin botones (para evitar manipulación por el participante).  
* **Precio:** Rango medio (**$200 \- $400 USD**), requiriendo bases de carga ("cradles") específicas.12

## ---

**4\. El Enfoque Agnóstico de HypnosPy: Integración de Wearables de Consumo**

Mientras pyActigraphy se especializa en la decodificación de formatos nativos de investigación, **HypnosPy** adopta una filosofía agnóstica de alto nivel. Su arquitectura se basa en la abstracción de "Wearable Objects", permitiendo ingerir datos de cualquier fuente siempre que puedan convertirse a un formato tabular estandarizado (CSV).40

### **4.1. El Puente con los Dispositivos de Consumo (Garmin y Apple)**

HypnosPy es la herramienta clave para integrar la revolución de los "wearables" comerciales en la investigación científica. A través de la ingestión de archivos CSV, permite analizar datos de:

* **Garmin:** Dispositivos como Vivosmart 4, Fenix o Forerunner. HypnosPy incluye scripts dedicados (garmin\_playground.ipynb) para procesar exportaciones de datos de frecuencia cardíaca, pasos y estrés.41  
  * **Desafío de Exportación:** Garmin no ofrece exportación directa de datos crudos (acelerometría Hz a Hz) al usuario final por defecto. Los investigadores deben utilizar la API de Garmin Health o plataformas intermediarias como **Labfront** para obtener archivos CSV/FIT con la resolución necesaria para HypnosPy.42  
* **Apple Watch:** Vía exportación de Apple Health (XML/CSV). Estudios recientes validan al Apple Watch como uno de los dispositivos de consumo con mayor sensibilidad para la detección de sueño (88% de acuerdo con PSG), superando a muchos competidores en la distinción sueño/vigilia, aunque la clasificación de fases sigue siendo menos precisa que la PSG clínica.43

### **4.2. Bases de Datos Públicas: MESA Sleep**

HypnosPy brilla en su capacidad para conectarse con grandes repositorios de datos abiertos. Incluye preprocesadores nativos para el **Multi-Ethnic Study of Atherosclerosis (MESA)**, permitiendo a los investigadores descargar datasets masivos del *National Sleep Research Resource* (NSRR) y aplicarlos inmediatamente en sus tuberías de análisis. Esto facilita el entrenamiento de nuevos algoritmos de aprendizaje automático (Machine Learning) utilizando miles de noches de datos de referencia (Actiwatch Spectrum \+ PSG).40

## ---

**5\. Análisis Comparativo Técnico y Recomendaciones**

La selección del dispositivo adecuado depende del equilibrio entre presupuesto, necesidad de sensores específicos y el tipo de datos requeridos (crudos vs. procesados).

### **5.1. Tabla Comparativa de Especificaciones Clave**

| Dispositivo | Fabricante | Librería Principal | Tipo de Datos | Precio Aprox. (Investigación) | Batería | Sensores Adicionales Críticos |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **wGT3X-BT** | Ametris (ActiGraph) | pyActigraphy | .agd (Prop.), Raw | \~$250 \- $400+ (Legacy) | 25 días | Luz, Uso (Capacitivo) |
| **MotionWatch 8** | CamNtech | pyActigraphy | .awd (Prop.), Counts | \~$995 / £600 | 3-6 meses | Luz |
| **ActTrust 2** | Condor Inst. | pyActigraphy | Binario, Raw | Cotización | 3 meses | Luz RGB+IR, Temp Piel |
| **AX3 / AX6** | Axivity | pyActigraphy\* | .cwa (Open), Raw | **\~£139 ($180)** | 14-30 días | Luz, Temp |
| **GENEActiv** | ActivInsights | pyActigraphy\* | .bin, Raw | \~$200 \- $300 | 30-60 días | Temp (cuerpo), Luz |
| **Garmin/Apple** | Varios | HypnosPy | CSV (Exportado) | $150 \- $400 | 1-2 días | PPG (HR), SpO2, GPS |

*\*Nota: El análisis de AX3 y GENEActiv en pyActigraphy suele requerir dependencias adicionales o conversión previa.*

### **5.2. Escenarios de Implementación Recomendados**

1. **Ensayos Clínicos de Sueño (Alta Precisión):**  
   * **Recomendación:** **MotionWatch 8** o **ActTrust 2**.  
   * *Justificación:* La autonomía de meses es crítica para evitar pérdida de datos. La compatibilidad nativa con pyActigraphy asegura que se puedan auditar los algoritmos de sueño. ActTrust 2 es superior si el estudio requiere variables de temperatura periférica o luz azul.  
2. **Epidemiología a Gran Escala (Biobancos):**  
   * **Recomendación:** **Axivity AX3**.  
   * *Justificación:* Su bajo costo permite escalar a miles de participantes. El formato de datos abierto garantiza que los datos serán legibles en 20 años, independientemente de la supervivencia de la empresa fabricante.  
3. **Investigación Ecológica / Ciencia Ciudadana:**  
   * **Recomendación:** **Garmin / Apple Watch \+ HypnosPy**.  
   * *Justificación:* Aprovecha dispositivos que los participantes ya poseen (BYOD \- Bring Your Own Device). HypnosPy gestiona la limpieza de estos datos ruidosos. Ideal para estudios de correlación entre sueño y frecuencia cardíaca en población general.

## ---

**6\. Conclusión y Perspectivas Futuras**

La investigación y desarrollo en actigrafía computacional ha alcanzado un punto de inflexión. La retirada de Philips ha fracturado el monopolio tradicional, abriendo el mercado a una competencia saludable entre la ingeniería de precisión europea (CamNtech), la innovación multisensorial latinoamericana (Condor Instruments) y el pragmatismo de datos abiertos británico (Axivity).

La validación científica ya no reside exclusivamente en el hardware. Herramientas como **pyActigraphy** y **HypnosPy** han trasladado la carga de la prueba hacia el software. Al utilizar estas librerías, los investigadores garantizan que sus análisis sean transparentes, reproducibles y auditables, superando la era de las "cajas negras" propietarias. Para el investigador moderno, la elección del hardware es ahora, en última instancia, una elección sobre qué tipo de datos desea alimentar a estas potentes tuberías de análisis de código abierto.

La recomendación final para laboratorios de cronobiología es diversificar su flota: mantener dispositivos de grado clínico (como ActTrust 2 o MotionWatch 8\) para protocolos rigurosos de laboratorio y fase circadiana, e integrar dispositivos de datos crudos de bajo costo (Axivity) para estudios de campo extensivos, unificando todo el procesamiento bajo el paraguas coherente de Python.

#### **Obras citadas**

1. Wearables in Chronomedicine and Interpretation of Circadian Health \- PMC \- NIH, fecha de acceso: febrero 11, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC11816745/](https://pmc.ncbi.nlm.nih.gov/articles/PMC11816745/)  
2. Actigraphy (Actigraph Devices to track sleep patterns and mood Disorders) ; How it works, Definition \- YouTube, fecha de acceso: febrero 11, 2026, [https://www.youtube.com/watch?v=FbmrmyJuSmM](https://www.youtube.com/watch?v=FbmrmyJuSmM)  
3. pyActigraphy: Open-source python package for actigraphy data visualization and analysis \- ORBi, fecha de acceso: febrero 11, 2026, [https://orbi.uliege.be/bitstream/2268/267574/1/Hammad\_2021\_PlosComputBiol.pdf](https://orbi.uliege.be/bitstream/2268/267574/1/Hammad_2021_PlosComputBiol.pdf)  
4. pyActigraphy 1.2.1 documentation, fecha de acceso: febrero 11, 2026, [https://ghammad.github.io/pyActigraphy/](https://ghammad.github.io/pyActigraphy/)  
5. pyActigraphy: Open-source python package for actigraphy data visualization and analysis, fecha de acceso: febrero 11, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC8555797/](https://pmc.ncbi.nlm.nih.gov/articles/PMC8555797/)  
6. ActiGraph wGT3X-BT \+ ActiLife \- Amazon S3, fecha de acceso: febrero 11, 2026, [https://s3.amazonaws.com/actigraphcorp.com/wp-content/uploads/2018/02/27121030/ActiGraph\_wGT3X-BT\_UserGuide\_11272017\_FINAL\_WEB.pdf](https://s3.amazonaws.com/actigraphcorp.com/wp-content/uploads/2018/02/27121030/ActiGraph_wGT3X-BT_UserGuide_11272017_FINAL_WEB.pdf)  
7. ActiGraph wGT3X-BT, fecha de acceso: febrero 11, 2026, [https://actigraphcorp-v3-staging.azurewebsites.net/actigraph-wgt3x-bt/](https://actigraphcorp-v3-staging.azurewebsites.net/actigraph-wgt3x-bt/)  
8. Criterion validity of ActiGraph monitoring devices for step counting and distance measurement in adults and older adults: a systematic review \- PubMed, fecha de acceso: febrero 11, 2026, [https://pubmed.ncbi.nlm.nih.gov/36253787/](https://pubmed.ncbi.nlm.nih.gov/36253787/)  
9. Criterion validity of ActiGraph monitoring devices for step counting and distance measurement in adults and older adults: a systematic review \- PMC, fecha de acceso: febrero 11, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC9575229/](https://pmc.ncbi.nlm.nih.gov/articles/PMC9575229/)  
10. Validation of ActiGraph and Fitbit in the assessment of energy expenditure in Huntington's disease \- PubMed, fecha de acceso: febrero 11, 2026, [https://pubmed.ncbi.nlm.nih.gov/38286064/](https://pubmed.ncbi.nlm.nih.gov/38286064/)  
11. Actigraphy in brain-injured patients – A valid measurement for assessing circadian rhythms?, fecha de acceso: febrero 11, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC7216424/](https://pmc.ncbi.nlm.nih.gov/articles/PMC7216424/)  
12. collecting activity and sleep data in the health and retirement study, fecha de acceso: febrero 11, 2026, [https://surveydatascience.isr.umich.edu/wp-content/uploads/2024/06/Jessica-Fual-SLIDES-HRS\_Actigraphy\_JPSM\_APR2021\_v2-SEMINAR-040721.pdf](https://surveydatascience.isr.umich.edu/wp-content/uploads/2024/06/Jessica-Fual-SLIDES-HRS_Actigraphy_JPSM_APR2021_v2-SEMINAR-040721.pdf)  
13. Actigraphy \- Perelman School of Medicine at the University of ..., fecha de acceso: febrero 11, 2026, [https://www.med.upenn.edu/cbti/assets/user-content/documents/Day1-Talk5AlternativeMeasures--Actigraphy--JE.pdf](https://www.med.upenn.edu/cbti/assets/user-content/documents/Day1-Talk5AlternativeMeasures--Actigraphy--JE.pdf)  
14. wGT3X-BT | Ametris Wearable Devices, fecha de acceso: febrero 11, 2026, [https://actigraphcorp.com/actigraph-wgt3x-bt/](https://actigraphcorp.com/actigraph-wgt3x-bt/)  
15. International Resellers \- ActiGraph, fecha de acceso: febrero 11, 2026, [https://ametris.com/international-resellers](https://ametris.com/international-resellers)  
16. ActiGraph \- ProCare, fecha de acceso: febrero 11, 2026, [https://www.procarebv.nl/product/actigraph-en/](https://www.procarebv.nl/product/actigraph-en/)  
17. International Resellers \- ActiGraph, fecha de acceso: febrero 11, 2026, [https://actigraphcorp-v3-staging.azurewebsites.net/international-resellers/](https://actigraphcorp-v3-staging.azurewebsites.net/international-resellers/)  
18. MotionWatch 8 \- CamNtech USA, fecha de acceso: febrero 11, 2026, [https://www.camntechusa.com/product-page/motionwatch-8](https://www.camntechusa.com/product-page/motionwatch-8)  
19. MotionWatch Rugged \- CamNtech, fecha de acceso: febrero 11, 2026, [https://www.camntech.com/motionwatch-r/](https://www.camntech.com/motionwatch-r/)  
20. Validation of MotionWatch8 Actigraphy Against Polysomnography in Menopausal Women Under Warm Conditions \- PMC, fecha de acceso: febrero 11, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC12115337/](https://pmc.ncbi.nlm.nih.gov/articles/PMC12115337/)  
21. Measuring physical activity in older adults: calibrating cut-points for the MotionWatch 8, fecha de acceso: febrero 11, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC4548198/](https://pmc.ncbi.nlm.nih.gov/articles/PMC4548198/)  
22. Distributors \- CamNtech, fecha de acceso: febrero 11, 2026, [https://www.camntech.com/local-support/](https://www.camntech.com/local-support/)  
23. CamNtech: Home, fecha de acceso: febrero 11, 2026, [https://www.camntech.com/](https://www.camntech.com/)  
24. Free Actigraphy Sleep Toolkit for Researchers \- Activinsights, fecha de acceso: febrero 11, 2026, [https://activinsights.com/digital-health-technologies/activinsights-actigraphy-sleep-toolkit/](https://activinsights.com/digital-health-technologies/activinsights-actigraphy-sleep-toolkit/)  
25. ActTrust 2 \- Condor Instruments, fecha de acceso: febrero 11, 2026, [https://condorinst.com/en/acttrust-two-actigraph/](https://condorinst.com/en/acttrust-two-actigraph/)  
26. ActLumus Actigraph \- Condor Instruments, fecha de acceso: febrero 11, 2026, [https://condorinst.com/en/actlumus-actigraph/](https://condorinst.com/en/actlumus-actigraph/)  
27. Condor Instruments: Actiwatch Alternatives | Actiwatch Replacement, fecha de acceso: febrero 11, 2026, [https://condorinst.com/en/](https://condorinst.com/en/)  
28. (PDF) Consenso Brasileiro de Actigrafia \- ResearchGate, fecha de acceso: febrero 11, 2026, [https://www.researchgate.net/publication/358348693\_Consenso\_Brasileiro\_de\_Actigrafia](https://www.researchgate.net/publication/358348693_Consenso_Brasileiro_de_Actigrafia)  
29. Normalized Amplitude of Blue Light Exposure (NA BLE) as a Novel Index for Circadian Light Hygiene: Associations with Actigraphy Measures and Seasonal Dependencies | Russian Open Medical Journal, fecha de acceso: febrero 11, 2026, [https://romj.org/2025-0401](https://romj.org/2025-0401)  
30. Blue Light and Temperature Actigraphy Measures Predicting Metabolic Health Are Linked to Melatonin Receptor Polymorphism \- PMC, fecha de acceso: febrero 11, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10813279/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10813279/)  
31. Contato \- Condor Instruments, fecha de acceso: febrero 11, 2026, [https://condorinst.com/pt/contato/](https://condorinst.com/pt/contato/)  
32. Distribution Partners \- TIVAL Sensors GmbH, fecha de acceso: febrero 11, 2026, [https://tival-sensors.com/distribution-partners](https://tival-sensors.com/distribution-partners)  
33. Company Name \- Philips, fecha de acceso: febrero 11, 2026, [https://www.philips.com/c-dam/b2bhc/master/sites/actigraphy/research-aw-discontinuation-announcement-letter-dec.pdf](https://www.philips.com/c-dam/b2bhc/master/sites/actigraphy/research-aw-discontinuation-announcement-letter-dec.pdf)  
34. The Clear Choice for Digital Health Research | Ametris \- ActiGraph, fecha de acceso: febrero 11, 2026, [https://landing.ametris.com/philips-actiwatch-alternative](https://landing.ametris.com/philips-actiwatch-alternative)  
35. The Munich ChronoType Questionnaire for Shift-Workers (MCTQShift) \- Ornge, fecha de acceso: febrero 11, 2026, [https://www.ornge.ca/Media/Ornge/Documents/Campaign%20Documents/ACAT/Munich-ChronoType-Questionnaire-Guidance-(1).pdf](https://www.ornge.ca/Media/Ornge/Documents/Campaign%20Documents/ACAT/Munich-ChronoType-Questionnaire-Guidance-\(1\).pdf)  
36. Wearable Light-and-Motion Dataloggers for Sleep/Wake Research: A Review \- MDPI, fecha de acceso: febrero 11, 2026, [https://www.mdpi.com/2076-3417/12/22/11794](https://www.mdpi.com/2076-3417/12/22/11794)  
37. AX3 \- Axivity | Product, fecha de acceso: febrero 11, 2026, [https://axivity.com/product/ax3](https://axivity.com/product/ax3)  
38. Accelerometer-assessed Physical Activity in Epidemiology: Are Monitors Equivalent? \- PubMed, fecha de acceso: febrero 11, 2026, [https://pubmed.ncbi.nlm.nih.gov/28976493/](https://pubmed.ncbi.nlm.nih.gov/28976493/)  
39. Publications \- Axivity, fecha de acceso: febrero 11, 2026, [https://axivity.com/publications](https://axivity.com/publications)  
40. HypnosPy/HypnosPy: A Device-Agnostic, Open-Source ... \- GitHub, fecha de acceso: febrero 11, 2026, [https://github.com/HypnosPy/HypnosPy](https://github.com/HypnosPy/HypnosPy)  
41. Parkinson's Disease Medication Wear-off Prediction Models Supplemented by Wearable Activity Data | Garmin Blog, fecha de acceso: febrero 11, 2026, [https://www.garmin.com/en-US/blog/health/parkinsons-disease-medication-wear-off-prediction-models-supplemented-by-wearable-activity-data/](https://www.garmin.com/en-US/blog/health/parkinsons-disease-medication-wear-off-prediction-models-supplemented-by-wearable-activity-data/)  
42. Sleep 1.2 Data Integration Across Devices \- Labfront, fecha de acceso: febrero 11, 2026, [https://www.labfront.com/course-video/data-integration-across-devices](https://www.labfront.com/course-video/data-integration-across-devices)  
43. A Validation of Six Wearable Devices for Estimating Sleep, Heart Rate and Heart Rate Variability in Healthy Adults \- PubMed, fecha de acceso: febrero 11, 2026, [https://pubmed.ncbi.nlm.nih.gov/36016077/](https://pubmed.ncbi.nlm.nih.gov/36016077/)  
44. Performance of seven consumer sleep-tracking devices compared with polysomnography \- PMC, fecha de acceso: febrero 11, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC8120339/](https://pmc.ncbi.nlm.nih.gov/articles/PMC8120339/)  
45. HypnosPy/cgm\_playground.ipynb at master \- GitHub, fecha de acceso: febrero 11, 2026, [https://github.com/HypnosPy/HypnosPy/blob/master/cgm\_playground.ipynb](https://github.com/HypnosPy/HypnosPy/blob/master/cgm_playground.ipynb)