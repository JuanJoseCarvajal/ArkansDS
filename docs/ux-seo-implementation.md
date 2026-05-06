# ARKAN DX: implementación UX hermética, SEO y frontend

## Marco iniciático

La web se construye como un recorrido iniciatico y hermetico orientado a un resultado claro: convertir percepcion en confianza y confianza en leads cualificados. No se usa lo hermetico como decoracion visual, sino como metodo de analisis y arquitectura.

Principios del sistema:

- Psicoanalisis aplicado: detectar sintoma, deseo, objecion y resistencia en la experiencia digital. No es terapia ni diagnostico clinico; es lectura estrategica de fricciones, promesas y bloqueos de decision.
- Semiotica de Peirce: cada pantalla se analiza como relacion entre signo, objeto e interpretante. El objetivo es que el usuario produzca una interpretacion clara y una accion posible.
- Topologia del recorrido: la experiencia se modela por bordes, umbrales, bucles, salidas y puntos de retorno. La conversion se entiende como cruce de umbral, no como boton aislado.
- Magia operativa en 11 pasos: secuencia de transformacion desde confusion hasta manifestacion medible.

Los 11 pasos:

| Paso | Operacion | Funcion UX/SEO | Resultado |
|---|---|---|---|
| 1 | Separacion | Distinguir ruido, signo y sintomas de friccion | Diagnostico real de conversion |
| 2 | Purificacion | Eliminar exceso, contradiccion y carga cognitiva | Mensaje e interfaz mas claros |
| 3 | Invocacion | Nombrar el deseo que mueve la busqueda | Propuesta de valor legible |
| 4 | Inscripcion | Convertir estrategia en signos, jerarquias y patrones | Sistema visual/verbal consistente |
| 5 | Correspondencia | Alinear promesa, evidencia, interfaz y accion | Confianza entre SEO, copy y UI |
| 6 | Umbral | Disenar el momento de decision | CTAs y formularios sin friccion |
| 7 | Transmutacion | Convertir objeciones en comprension | Argumentos, casos y prueba social |
| 8 | Union | Integrar marca, deseo, tecnica y medicion | Experiencia coherente |
| 9 | Revelacion | Hacer visible el valor implicito | Posicionamiento memorable |
| 10 | Manifestacion | Llevar el sistema a codigo y contenido | Web Next.js lista para operar |
| 11 | Retorno | Medir, interpretar y ajustar | Aprendizaje continuo |

## 1. Sitemap + SEO Structure

| Nivel | Página | URL | Keyword principal | Keywords secundarias | Intención |
|---|---|---|---|---|---|
| 1 | Home | `/` | diseno UX iniciatico | agencia UX/UI hermetica, semiotica UX, desarrollo web Next.js | Comercial transaccional |
| 1 | Servicios | `/servicios` | servicios hermeticos UX/UI | arquitectura web hermetica, topologia UX, estrategia semiotica | Comercial |
| 2 | Lectura UX/UI | `/servicios#ux-ui-design` | UX iniciatico | semiotica UX, analisis de friccion | Comercial |
| 2 | Arquitectura web | `/servicios#desarrollo-web` | desarrollo web Next.js | web semantica SEO, analitica de conversion | Comercial tecnico |
| 2 | Producto topologico | `/servicios#producto-digital` | topologia UX | journey mapping, umbrales de decision | Comercial |
| 2 | Estrategia semiotica | `/servicios#estrategia-digital` | semiotica Peirce UX | estrategia digital, oferta como signo | Comercial |
| 1 | Casos de estudio | `/casos-estudio` | casos UX hermetico | portfolio semiotica UX, casos desarrollo web | Comercial investigativa |
| 1 | Sobre nosotros | `/sobre-nosotros` | agencia hermetica UX/UI | equipo estrategia semiotica, agencia Next.js | Confianza |
| 1 | Blog | `/blog` | blog semiotica UX | psicoanalisis UX, topologia UX, SEO tecnico | Informacional |
| 1 | Contacto | `/contacto` | lectura iniciatica UX | diagnostico UX, consultoria web hermetica | Transaccional |

Jerarquía máxima: 2 niveles reales y anclas de servicio como tercer nivel semántico sin crear profundidad innecesaria.

## 2. Estructura detallada por páginas

### Home

Objetivo UX: explicar valor premium en menos de 10 segundos, demostrar criterio y llevar a diagnóstico o casos.

Secciones:

| Sección | Headings | Copy | CTA | UI | Visual |
|---|---|---|---|---|---|
| Hero | H1: Disenamos experiencias digitales como ritos de claridad, deseo y conversion. | ARKAN DX une UX/UI, semiotica de Peirce, topologia del recorrido y analisis psicoanalitico aplicado para transformar una web en un sistema de decision. | Iniciar diagnostico / Ver casos | Layout 12 columnas, bloque de operaciones laterales | Fondo oscuro hermetico con luz sutil, tipografia grande, sin mockups genericos |
| Sintoma | H2: La mayoria de webs muestran una oferta, pero no producen una transformacion. | Una web iniciatica no es una galeria de efectos. Es un pasaje: separa ruido, revela deseo, organiza signos y acompana al usuario hasta un umbral de accion claro. | Implicito hacia metodo | Texto editorial en dos columnas | Banda sobria de contraste |
| Metodo 11 pasos | H2: Los 11 pasos de la magia aplicados a experiencia digital. | Secuencia operacional desde separacion hasta retorno. | Hacia servicios | Grid de operaciones | Cards con numero, principio y resultado |
| Servicios destacados | H2: Diseño, tecnología y estrategia trabajando como un mismo sistema. H3 por servicio | Cards con resumen real de UX/UI, desarrollo Next.js, producto y estrategia. | Explorar servicio | Grid 2x2 | Cards con borde fino y estados hover |
| Casos | H2: Resultados que se pueden explicar. H3 por caso | Casos orientados a activación, demos y escalabilidad visual. | Ver portfolio completo | Cards de resultado | Indicadores cuantitativos como señal visual |
| Diferenciador | H2: Pensamos tu web como producto digital, no como folleto online. | Cada página tiene una intención: captar demanda, educar, demostrar criterio o generar contacto. | Hacia contacto | Texto + argumento | Sección sin card para elevar claridad |
| CTA final | H2: Si tu web debe vender confianza antes de vender servicios, empecemos por el diagnóstico. | Revisamos posicionamiento, experiencia, SEO técnico y oportunidades de conversión. | Solicitar diagnóstico | Bloque centrado | Luz sutil de cierre |

### Servicios

Objetivo UX: ayudar al usuario a mapear su necesidad con una oferta clara y reducir dudas sobre proceso.

Secciones:

| Sección | Headings | Copy | CTA | UI | Visual |
|---|---|---|---|---|---|
| Hero | H1: UX/UI, desarrollo web y estrategia para convertir complejidad en crecimiento. | Trabajamos desde la definición de producto hasta la implementación frontend para que tu web no dependa de adornos: debe explicar, convencer, posicionar y generar demanda cualificada. | Hablar del proyecto | Texto amplio | Hero editorial |
| Servicios | H2 por servicio | Copy específico por disciplina con bullets accionables. | Explorar contacto | Filas/cards amplias | Sistema modular |
| Proceso | H2: Proceso de trabajo: estrategia antes de producción. | Diagnóstico, arquitectura, diseño, desarrollo y medición. | Implícito | Lista numerada | Banda técnica |
| CTA | H2: Construyamos una experiencia que haga más fácil elegirte. | Cierre directo. | Hablar del proyecto | CTA centrado | Fondo luminoso |

### Casos de estudio

Objetivo UX: demostrar capacidad sin depender de imágenes decorativas.

Secciones: hero con propuesta, cards por caso con categoría, problema, intervención resumida y resultado; CTA para planear un caso nuevo.

Visual: tarjetas amplias con métrica protagonista, estilo editorial y espacio negativo.

### Sobre nosotros

Objetivo UX: construir confianza, criterio y percepción senior.

Secciones: hero de manifiesto, valores operativos, diferencia frente a agencia tradicional y CTA.

Copy clave: "No separamos estrategia, contenido, diseño y desarrollo en entregables aislados. Los trabajamos como partes de un mismo producto digital."

### Blog / Insights

Objetivo UX: captar demanda informacional, demostrar expertise y alimentar interlinking a servicios.

Secciones: hero editorial, grid de artículos, enlaces a servicios relacionados dentro de cada artículo futuro.

### Contacto

Objetivo UX: convertir intención en conversación sin fricción.

Secciones: promesa de diagnóstico, formulario corto, validación clara.

Campos recomendados: nombre, email, contexto. En fase CMS/CRM añadir presupuesto, timeline y tipo de proyecto si el volumen crece.

## 3. SEO On-Page

### Home

- Meta title: Agencia UX/UI y desarrollo web premium
- Meta description: Diseñamos webs y productos digitales con UX/UI, SEO técnico y desarrollo Next.js para convertir visitantes en leads cualificados.
- Slug: `/`
- H1: Diseñamos experiencias digitales premium que convierten atención en oportunidades reales.
- H2: Problema, servicios, casos, diferenciador, CTA.
- Interlinking: servicios, casos, contacto.

### Servicios

- Meta title: Servicios UX/UI, desarrollo web y estrategia digital
- Meta description: Servicios de UX/UI, desarrollo web Next.js, diseño de producto digital y estrategia para marcas que buscan crecer con claridad.
- Slug: `/servicios`
- Interlinking: home, casos, contacto, posts de blog sobre SEO/UX.

### Casos de estudio

- Meta title: Casos de estudio UX/UI y desarrollo web
- Meta description: Portfolio de proyectos UX/UI, producto digital y desarrollo web orientados a conversión, confianza y crecimiento medible.
- Slug: `/casos-estudio`
- Interlinking: servicios específicos, contacto.

### Sobre nosotros

- Meta title: Sobre nosotros | Agencia digital ARKAN DX
- Meta description: Conoce el enfoque de ARKAN DX: estrategia, UX/UI, producto digital y desarrollo frontend para experiencias premium.
- Slug: `/sobre-nosotros`
- Interlinking: servicios, casos, contacto.

### Blog

- Meta title: Blog de UX/UI, SEO y desarrollo web
- Meta description: Insights sobre UX/UI, diseño de producto, SEO técnico, desarrollo Next.js y estrategia digital para equipos premium.
- Slug: `/blog`
- Interlinking: cada post debe enlazar a un servicio y a un caso.

### Contacto

- Meta title: Contacto | Diagnóstico UX/UI y web
- Meta description: Agenda un diagnóstico para mejorar UX/UI, desarrollo web, SEO técnico o estrategia digital de tu marca.
- Slug: `/contacto`
- Interlinking: recibe enlaces desde todos los CTAs principales.

## 4. Design System

Tipografía:

- H1: 48-72px desktop, 36-48px mobile, peso 600, line-height 1.05.
- H2: 36-48px desktop, 30-36px mobile, peso 600.
- Body: 16-18px, line-height 1.7.
- Microcopy: 12px uppercase, tracking amplio solo para etiquetas.

Colores:

- Background: `#060607`
- Surface: `#0d0d11`
- Elevated: `#12121a`
- Ink: `#f5f7ff`
- Accent: `#aa8a57`
- Electric: `#5c88ff`

Grid:

- Container: `max-w-6xl`, padding 24px mobile, 32px desktop.
- Sistema 12 columnas para heroes y secciones comerciales.
- Cards: radio 8px, borde `white/10`, sin cards anidadas.

Espaciado:

- Secciones: 80px mobile, 112px desktop.
- Gaps principales: 40-48px.
- Cards: 24-32px padding.

Componentes reutilizables:

- `Container`: ancho y padding global.
- `Section`: ritmo vertical, tono visual, animación.
- `Button`: CTA primario.
- `ContactForm`: formulario cliente validado.
- Data en `lib/site.ts`: servicios, casos y blog.

## 5. Frontend Implementation

La base implementada usa:

- Next.js App Router.
- Tailwind CSS.
- Metadata por página.
- Redirects 301 desde `/services`, `/about`, `/contact`.
- HTML semántico con `section`, `article`, `nav`, `aside`, `dl`, `ol`.

Ejemplo de página completa: `app/page.tsx`.

Ejemplo de card:

```tsx
<article className="rounded-lg border border-white/10 bg-elevated/70 p-6 shadow-card">
  <h3 className="text-xl font-semibold">{service.title}</h3>
  <p className="mt-3 leading-7 text-white/70">{service.summary}</p>
</article>
```

## 6. UX + SEO Strategy

La arquitectura mejora SEO porque separa búsquedas transaccionales (`/servicios`, `/contacto`) de búsquedas de confianza (`/casos-estudio`, `/sobre-nosotros`) y búsquedas informacionales (`/blog`). Esto permite atacar intención real sin forzar una landing única a responderlo todo.

El contenido convierte porque cada sección resuelve una duda comercial: qué hacen, por qué importa, cómo trabajan, qué resultados producen y cuál es el siguiente paso. La fricción baja al usar CTAs consistentes, formularios cortos y rutas predecibles.

La diferencia frente a agencias tradicionales es el enfoque de producto: no vender "diseño bonito", sino un sistema de adquisición, claridad y confianza construido con UX, SEO, copy y frontend.

## 7. Blog Strategy

| Artículo | Keyword | Intención | Estructura |
|---|---|---|---|
| Cómo diseñar una web de agencia digital que convierta leads cualificados | web agencia digital | Informacional comercial | H1; H2 problema; H2 arquitectura; H2 copy; H2 CTAs; H2 checklist |
| Arquitectura SEO para servicios UX/UI | SEO para servicios UX UI | Informacional | H1; H2 intención; H2 sitemap; H2 headings; H2 interlinking; H2 errores |
| Design systems en startups | design system startup | Informacional | H1; H2 señales; H2 tokens; H2 componentes; H2 governance |
| Next.js para sitios corporativos premium | Next.js SEO CMS | Técnico | H1; H2 App Router; H2 metadata; H2 performance; H2 CMS |
| Cuánto cuesta rediseñar una web B2B premium | rediseño web B2B | Comercial | H1; H2 variables; H2 rangos; H2 ROI; H2 briefing |
| UX writing para mejorar conversión en formularios | UX writing formularios | Informacional | H1; H2 fricción; H2 labels; H2 errores; H2 ejemplos |
| Cómo elegir una agencia UX/UI | agencia UX UI | Comercial | H1; H2 criterios; H2 señales de calidad; H2 preguntas; H2 comparación |
| SEO técnico para páginas de servicios | SEO páginas de servicios | Técnico | H1; H2 metadata; H2 schema; H2 internal links; H2 performance |
| Landing page vs sitio corporativo: qué necesita tu marca | landing page vs sitio web | Informacional comercial | H1; H2 diferencias; H2 cuándo usar; H2 arquitectura recomendada |
| Cómo medir si tu nueva web está convirtiendo mejor | medir conversión web | Informacional | H1; H2 KPIs; H2 eventos; H2 dashboards; H2 decisiones |

## 8. Bonus

Backlinks:

- Publicar casos con datos y metodología en directorios de diseño y tecnología.
- Guest posts en blogs SaaS, producto y marketing B2B.
- Crear recursos linkables: checklist SEO para servicios, briefing UX/UI, auditoría de homepage.
- Colaborar con estudios de branding, consultoras CRM y agencias paid media para enlaces contextuales.

Escalado SEO:

- Crear clusters por servicio: UX/UI, Next.js, producto digital, SEO técnico.
- Convertir cada caso en artículo largo con problema, proceso, decisiones y resultados.
- Publicar comparativas y guías de compra para intención comercial.
- Mantener calendario editorial mensual con 2 posts informacionales y 1 pieza BOFU.

CMS:

- Sanity recomendado si se busca flexibilidad editorial, previews y modelado fino de casos.
- Contentful recomendado si el equipo ya usa flujos enterprise y permisos complejos.
- Modelos mínimos: `Post`, `CaseStudy`, `Service`, `Author`, `SEO`.
- Campos SEO por documento: title, description, canonical, keywords, ogImage, noIndex.
- En Next.js: usar ISR para blog/casos y preview mode para editores.
