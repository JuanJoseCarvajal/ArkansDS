export type Locale = 'es' | 'en';

export const locales: Record<Locale, { label: string; flag: string; native: string }> = {
  es: { label: 'Spanish', flag: '🇪🇸', native: 'Espanol' },
  en: { label: 'English', flag: '🇺🇸', native: 'English' }
};

export const siteContent = {
  es: {
    nav: {
      links: [
        { href: '/servicios', label: 'Servicios' },
        { href: '/casos-estudio', label: 'Casos' },
        { href: '/sobre-nosotros', label: 'Nosotros' },
        { href: '/blog', label: 'Insights' },
        { href: '/backoffice', label: 'Backoffice' },
        { href: '/contacto', label: 'Contacto' }
      ],
      cta: 'Agendar consulta',
      aria: 'Agendar una consulta',
      language: 'Idioma'
    },
    footer: {
      copy:
        'Agencia hermetica de UX/UI, semiotica y desarrollo web para marcas que necesitan claridad, confianza y conversion medible.',
      links: [
        ['Servicios', '/servicios'],
        ['Casos de estudio', '/casos-estudio'],
        ['Sobre nosotros', '/sobre-nosotros'],
        ['Blog', '/blog'],
        ['Backoffice', '/backoffice'],
        ['Contacto', '/contacto']
      ]
    },
    services: [
      {
        title: 'Lectura UX/UI iniciatica',
        slug: '/servicios#ux-ui-design',
        summary:
          'Leemos la experiencia como un campo de signos, deseo y friccion para disenar interfaces que orientan la decision sin manipularla.',
        bullets: ['Sintoma de friccion', 'Mapa de deseo', 'Prototipo ritual']
      },
      {
        title: 'Arquitectura web hermetica',
        slug: '/servicios#desarrollo-web',
        summary:
          'Construimos sitios rapidos, semanticos y escalables donde cada pagina opera como una camara: entrada, tension, prueba y conversion.',
        bullets: ['Next.js semantico', 'SEO tecnico', 'Analitica de umbrales']
      },
      {
        title: 'Diseno topologico de producto',
        slug: '/servicios#producto-digital',
        summary:
          'Modelamos recorridos, bordes, repeticiones y puntos de paso para convertir complejidad en un producto comprensible y deseable.',
        bullets: ['Nudos de uso', 'Umbrales de confianza', 'Validacion simbolica']
      },
      {
        title: 'Estrategia semiotica y comercial',
        slug: '/servicios#estrategia-digital',
        summary:
          'Alineamos signo, interpretante y accion para que posicionamiento, contenido y conversion funcionen como un sistema legible.',
        bullets: ['Triada de Peirce', 'Arquitectura SEO', 'Oferta como signo']
      }
    ],
    initiaticSteps: [
      ['Separacion', 'Distinguir el ruido del signo', 'Diagnostico del problema real de conversion'],
      ['Purificacion', 'Eliminar friccion, exceso y contradiccion', 'Interfaz y narrativa con menor carga cognitiva'],
      ['Invocacion', 'Nombrar el deseo que mueve la busqueda', 'Propuesta de valor precisa y emocionalmente legible'],
      ['Inscripcion', 'Convertir estrategia en signos, jerarquias y patrones', 'Sistema visual y verbal consistente'],
      ['Correspondencia', 'Alinear lo que se promete, se muestra y se puede hacer', 'Confianza entre SEO, copy, UI y producto'],
      ['Umbral', 'Disenar el punto donde el usuario decide avanzar', 'CTAs y formularios sin friccion innecesaria'],
      ['Transmutacion', 'Transformar objeciones en comprension', 'Casos, pruebas y argumentos comerciales claros'],
      ['Union', 'Integrar marca, deseo, tecnica y medicion', 'Experiencia digital coherente de punta a punta'],
      ['Revelacion', 'Hacer visible el valor que antes estaba implicito', 'Mensaje memorable y posicionamiento diferencial'],
      ['Manifestacion', 'Llevar el sistema a codigo, performance y contenido', 'Web Next.js lista para operar y escalar'],
      ['Retorno', 'Medir, interpretar y ajustar el circuito', 'Aprendizaje continuo orientado a leads cualificados']
    ].map(([name, principle, outcome]) => ({ name, principle, outcome })),
    cases: [
      {
        title: 'Fintech B2B: onboarding con menos friccion',
        category: 'UX/UI + producto',
        result: '+38% activacion en usuarios nuevos',
        summary:
          'Redisenamos el flujo de alta, simplificamos la jerarquia de informacion y creamos estados de confianza para decisiones financieras sensibles.'
      },
      {
        title: 'SaaS industrial: web comercial orientada a demos',
        category: 'Next.js + SEO',
        result: '+64% solicitudes calificadas',
        summary:
          'Reestructuramos la narrativa, los CTAs y la arquitectura tecnica para transformar trafico especializado en conversaciones comerciales.'
      },
      {
        title: 'Healthtech: sistema de diseno para escalar',
        category: 'Design system',
        result: '3 equipos trabajando con una misma UI',
        summary:
          'Creamos tokens, componentes, patrones de accesibilidad y documentacion para acelerar releases sin perder consistencia visual.'
      }
    ],
    blogPosts: [
      ['Los 11 pasos iniciaticos para convertir una web en sistema de decision', '/blog/web-agencia-digital-convierte-leads', 'web hermetica para conversion', 'Informacional comercial'],
      ['Peirce aplicado a UX: signo, interpretante y accion en interfaces', '/blog/arquitectura-seo-servicios-ux-ui', 'semiotica Peirce UX', 'Informacional'],
      ['Topologia del deseo digital: bordes, umbrales y recorridos', '/blog/design-systems-startups', 'topologia UX', 'Informacional'],
      ['Analisis psicoanalitico de una homepage: sintoma, deseo y objecion', '/blog/nextjs-sitios-corporativos-premium', 'psicoanalisis UX', 'Informacional tecnico']
    ].map(([title, slug, keyword, intent]) => ({ title, slug, keyword, intent })),
    pages: {
      home: {
        eyebrow: 'UX iniciatico + semiotica + Next.js',
        title: 'Disenamos experiencias digitales como ritos de claridad, deseo y conversion.',
        intro:
          'ARKAN DX une UX/UI, semiotica de Peirce, topologia del recorrido y analisis psicoanalitico aplicado para transformar una web en un sistema de decision: legible, medible y orientado a leads cualificados.',
        primary: 'Iniciar diagnostico',
        secondary: 'Ver casos de estudio',
        operation: 'Operacion hermetica',
        operationItems: ['Signo', 'Deseo', 'Umbral', 'Conversion'],
        symptomEyebrow: 'Sintoma',
        symptomTitle: 'La mayoria de webs muestran una oferta, pero no producen una transformacion.',
        symptomBody: [
          'Una web iniciatica no es una galeria de efectos. Es un pasaje: separa ruido, revela deseo, organiza signos y acompana al usuario hasta un umbral de accion claro.',
          'Desde el analisis psicoanalitico, la friccion aparece como sintoma: una objecion no dicha, una promesa confusa, una autoridad insuficiente. Desde Peirce, cada pantalla debe convertir signo en interpretante y luego en accion.'
        ],
        methodEyebrow: 'Metodo',
        methodTitle: 'Los 11 pasos de la magia aplicados a experiencia digital.',
        methodIntro:
          'No usamos lo hermetico como estetica vacia. Lo usamos como estructura operacional: una secuencia de analisis, simbolizacion, diseno y medicion que lleva una presencia digital desde confusion hasta conversion.',
        servicesEyebrow: 'Operaciones',
        servicesTitle: 'Diseno, simbolo, codigo y estrategia trabajando como un mismo sistema.',
        explore: 'Explorar servicio',
        proofEyebrow: 'Pruebas',
        proofTitle: 'Toda transformacion debe dejar una evidencia.',
        proofLink: 'Ver portfolio completo',
        differenceEyebrow: 'Diferenciador',
        differenceTitle: 'Pensamos tu web como un dispositivo simbolico de conversion.',
        differenceBody: [
          'Cada pagina tiene una funcion dentro del rito: atraer, separar, revelar, probar, conducir y cerrar. Por eso definimos jerarquia, signos, contenido, componentes y medicion antes de decorar.',
          'El resultado es una presencia digital con estetica hermetica, fundamentos SEO y un recorrido comercial que respeta la inteligencia del usuario mientras orienta una accion concreta.'
        ],
        nextEyebrow: 'Siguiente paso',
        nextTitle:
          'Si tu web debe transformar percepcion en confianza, empecemos por el diagnostico iniciatico.',
        nextBody:
          'Leemos signos, deseo, friccion, topologia del recorrido, SEO tecnico y oportunidades de conversion para definir una hoja de ruta clara.',
        nextCta: 'Solicitar lectura inicial',
        stepLabel: 'Paso'
      },
      services: {
        eyebrow: 'Operaciones iniciaticas',
        title: 'UX/UI, semiotica y desarrollo para convertir complejidad en accion clara.',
        intro:
          'Trabajamos desde el sintoma hasta el sistema: analizamos deseo, objecion, signos, recorrido y tecnica para que tu web explique, convenza, posicione y genere demanda cualificada.',
        processTitle: 'Proceso de trabajo: lectura antes de manifestacion.',
        process: [
          'Lectura del sintoma: negocio, usuario, deseo y objecion.',
          'Triada semiotica: signo, interpretante y accion esperada.',
          'Topologia del recorrido: bordes, umbrales, bucles y salidas.',
          'Manifestacion: Next.js, SEO tecnico, analitica y sistema visual.'
        ],
        ctaTitle: 'Construyamos una experiencia que vuelva evidente por que elegirte.',
        cta: 'Hablar del proyecto'
      },
      contact: {
        eyebrow: 'Primer umbral',
        title: 'Cuentanos que transformacion debe producir tu experiencia digital.',
        intro:
          'En la primera lectura revisamos contexto, deseo, sintomas de friccion, signos actuales y oportunidades de alto impacto. Sin misterio innecesario: saldras con una direccion clara.',
        form: {
          name: 'Nombre',
          email: 'Email',
          message: 'Que sintoma o resultado quieres trabajar',
          submit: 'Enviar lectura',
          nameError: 'Cuentanos tu nombre.',
          emailError: 'Usa un email valido.',
          messageError: 'Danos al menos 20 caracteres de contexto.',
          success: 'Recibido. Te responderemos con los proximos pasos.'
        }
      },
      about: {
        eyebrow: 'Sobre ARKAN DX',
        title: 'Disenamos desde la lectura del signo, el deseo y el umbral.',
        intro:
          'Somos una agencia hermetica de experiencia digital para equipos que necesitan algo mas que una web bonita: una estructura iniciatica capaz de producir claridad, confianza y accion medible.',
        cards: [
          ['Lectura', 'Antes de disenar interpretamos sintomas: friccion, deseo, objecion, exceso y silencio.'],
          ['Correspondencia', 'Cada signo debe alinear promesa, evidencia, interfaz y accion esperada.'],
          ['Manifestacion', 'El sistema termina en codigo rapido, accesible, medible y preparado para escalar.']
        ],
        distinctTitle: 'Que nos hace distintos de una agencia tradicional.',
        distinctBody:
          'No separamos estrategia, contenido, diseno y desarrollo en entregables aislados. Los trabajamos como operaciones de un mismo rito digital: separar ruido, revelar valor, ordenar signos, cruzar umbrales y medir la transformacion.',
        ctaTitle: 'Hablemos del sistema simbolico que tu marca necesita.',
        cta: 'Solicitar lectura'
      },
      blog: {
        eyebrow: 'Grimorio estrategico',
        title: 'Lecturas accionables sobre signos, deseo, interfaces y conversion.',
        intro:
          'Contenido para fundadores, marketers y equipos de producto que quieren usar semiotica, UX, SEO y tecnologia para orientar decisiones claras sin caer en persuasion vacia.',
        intent: 'Intencion',
        read: 'Leer estructura del articulo'
      },
      cases: {
        eyebrow: 'Pruebas de manifestacion',
        title: 'Trabajo disenado para transformar sintomas en metricas.',
        intro:
          'Seleccion de proyectos donde lectura simbolica, interfaz, topologia del recorrido y tecnologia se integraron para mejorar activacion, confianza comercial y calidad de leads.',
        result: 'Resultado',
        ctaTitle: 'Toda magia debe probarse en una metrica.',
        ctaBody: 'Definamos que transformacion debe ocurrir antes de disenar la primera pantalla.',
        cta: 'Iniciar lectura'
      }
    }
  },
  en: {
    nav: {
      links: [
        { href: '/servicios', label: 'Services' },
        { href: '/casos-estudio', label: 'Cases' },
        { href: '/sobre-nosotros', label: 'About' },
        { href: '/blog', label: 'Insights' },
        { href: '/backoffice', label: 'Backoffice' },
        { href: '/contacto', label: 'Contact' }
      ],
      cta: 'Book a call',
      aria: 'Book a consultation',
      language: 'Language'
    },
    footer: {
      copy:
        'Hermetic UX/UI, semiotics and web development agency for brands that need clarity, trust and measurable conversion.',
      links: [
        ['Services', '/servicios'],
        ['Case studies', '/casos-estudio'],
        ['About us', '/sobre-nosotros'],
        ['Blog', '/blog'],
        ['Backoffice', '/backoffice'],
        ['Contact', '/contacto']
      ]
    },
    services: [
      {
        title: 'Initiatic UX/UI audit',
        slug: '/servicios#ux-ui-design',
        summary:
          'We read the experience as a field of signs, desire and friction to design interfaces that guide decisions without manipulating them.',
        bullets: ['Friction symptoms', 'Desire map', 'Ritual prototype']
      },
      {
        title: 'Hermetic web architecture',
        slug: '/servicios#desarrollo-web',
        summary:
          'We build fast, semantic and scalable websites where every page operates as a chamber: entry, tension, proof and conversion.',
        bullets: ['Semantic Next.js', 'Technical SEO', 'Threshold analytics']
      },
      {
        title: 'Topological product design',
        slug: '/servicios#producto-digital',
        summary:
          'We model journeys, edges, repetitions and passage points to turn complexity into a product people can understand and want.',
        bullets: ['Usage knots', 'Trust thresholds', 'Symbolic validation']
      },
      {
        title: 'Semiotic and commercial strategy',
        slug: '/servicios#estrategia-digital',
        summary:
          'We align sign, interpretant and action so positioning, content and conversion work as a legible system.',
        bullets: ['Peirce triad', 'SEO architecture', 'Offer as sign']
      }
    ],
    initiaticSteps: [
      ['Separation', 'Distinguish noise from signal', 'Diagnosis of the real conversion problem'],
      ['Purification', 'Remove friction, excess and contradiction', 'Interface and narrative with lower cognitive load'],
      ['Invocation', 'Name the desire behind the search', 'Precise value proposition with emotional clarity'],
      ['Inscription', 'Turn strategy into signs, hierarchy and patterns', 'Consistent visual and verbal system'],
      ['Correspondence', 'Align what is promised, shown and possible', 'Trust between SEO, copy, UI and product'],
      ['Threshold', 'Design the point where the user decides to advance', 'CTAs and forms without needless friction'],
      ['Transmutation', 'Transform objections into understanding', 'Clear cases, proof and commercial arguments'],
      ['Union', 'Integrate brand, desire, technology and measurement', 'Coherent end-to-end digital experience'],
      ['Revelation', 'Make previously implicit value visible', 'Memorable message and differentiated positioning'],
      ['Manifestation', 'Bring the system into code, performance and content', 'Next.js website ready to operate and scale'],
      ['Return', 'Measure, interpret and adjust the circuit', 'Continuous learning aimed at qualified leads']
    ].map(([name, principle, outcome]) => ({ name, principle, outcome })),
    cases: [
      {
        title: 'B2B fintech: onboarding with less friction',
        category: 'UX/UI + product',
        result: '+38% activation among new users',
        summary:
          'We redesigned the signup flow, simplified information hierarchy and created trust states for sensitive financial decisions.'
      },
      {
        title: 'Industrial SaaS: demo-oriented commercial website',
        category: 'Next.js + SEO',
        result: '+64% qualified requests',
        summary:
          'We rebuilt the narrative, CTAs and technical architecture to turn specialized traffic into commercial conversations.'
      },
      {
        title: 'Healthtech: design system built to scale',
        category: 'Design system',
        result: '3 teams working with one UI',
        summary:
          'We created tokens, components, accessibility patterns and documentation to accelerate releases without losing consistency.'
      }
    ],
    blogPosts: [
      ['The 11 initiatic steps for turning a website into a decision system', '/blog/web-agencia-digital-convierte-leads', 'hermetic website for conversion', 'Commercial informational'],
      ['Peirce applied to UX: sign, interpretant and action in interfaces', '/blog/arquitectura-seo-servicios-ux-ui', 'Peirce semiotics UX', 'Informational'],
      ['Topology of digital desire: edges, thresholds and journeys', '/blog/design-systems-startups', 'UX topology', 'Informational'],
      ['Psychoanalytic analysis of a homepage: symptom, desire and objection', '/blog/nextjs-sitios-corporativos-premium', 'psychoanalysis UX', 'Technical informational']
    ].map(([title, slug, keyword, intent]) => ({ title, slug, keyword, intent })),
    pages: {
      home: {
        eyebrow: 'Initiatic UX + semiotics + Next.js',
        title: 'We design digital experiences as rituals of clarity, desire and conversion.',
        intro:
          'ARKAN DX combines UX/UI, Peircean semiotics, journey topology and applied psychoanalytic analysis to transform a website into a decision system: legible, measurable and focused on qualified leads.',
        primary: 'Start diagnosis',
        secondary: 'View case studies',
        operation: 'Hermetic operation',
        operationItems: ['Sign', 'Desire', 'Threshold', 'Conversion'],
        symptomEyebrow: 'Symptom',
        symptomTitle: 'Most websites show an offer, but they do not produce a transformation.',
        symptomBody: [
          'An initiatic website is not a gallery of effects. It is a passage: it separates noise, reveals desire, organizes signs and guides the user toward a clear action threshold.',
          'From psychoanalytic analysis, friction appears as a symptom: an unspoken objection, a vague promise, insufficient authority. From Peirce, every screen must convert sign into interpretant and then into action.'
        ],
        methodEyebrow: 'Method',
        methodTitle: 'The 11 steps of magic applied to digital experience.',
        methodIntro:
          'We do not use the hermetic as empty aesthetics. We use it as an operational structure: a sequence of analysis, symbolization, design and measurement that moves a digital presence from confusion to conversion.',
        servicesEyebrow: 'Operations',
        servicesTitle: 'Design, symbol, code and strategy working as one system.',
        explore: 'Explore service',
        proofEyebrow: 'Proof',
        proofTitle: 'Every transformation must leave evidence.',
        proofLink: 'View full portfolio',
        differenceEyebrow: 'Differentiator',
        differenceTitle: 'We think of your website as a symbolic conversion device.',
        differenceBody: [
          'Every page has a role within the ritual: attract, separate, reveal, prove, guide and close. That is why we define hierarchy, signs, content, components and measurement before decorating.',
          'The result is a digital presence with hermetic aesthetics, SEO foundations and a commercial journey that respects the user intelligence while guiding a concrete action.'
        ],
        nextEyebrow: 'Next step',
        nextTitle: 'If your website must turn perception into trust, let us begin with the initiatic diagnosis.',
        nextBody:
          'We read signs, desire, friction, journey topology, technical SEO and conversion opportunities to define a clear roadmap.',
        nextCta: 'Request initial reading',
        stepLabel: 'Step'
      },
      services: {
        eyebrow: 'Initiatic operations',
        title: 'UX/UI, semiotics and development to turn complexity into clear action.',
        intro:
          'We work from symptom to system: we analyze desire, objection, signs, journey and technology so your website can explain, persuade, position and generate qualified demand.',
        processTitle: 'Work process: reading before manifestation.',
        process: [
          'Symptom reading: business, user, desire and objection.',
          'Semiotic triad: sign, interpretant and expected action.',
          'Journey topology: edges, thresholds, loops and exits.',
          'Manifestation: Next.js, technical SEO, analytics and visual system.'
        ],
        ctaTitle: 'Let us build an experience that makes it obvious why people should choose you.',
        cta: 'Discuss the project'
      },
      contact: {
        eyebrow: 'First threshold',
        title: 'Tell us what transformation your digital experience should produce.',
        intro:
          'In the first reading we review context, desire, friction symptoms, current signs and high-impact opportunities. No unnecessary mystery: you leave with a clear direction.',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'What symptom or outcome do you want to work on?',
          submit: 'Send reading request',
          nameError: 'Tell us your name.',
          emailError: 'Use a valid email.',
          messageError: 'Give us at least 20 characters of context.',
          success: 'Received. We will reply with the next steps.'
        }
      },
      about: {
        eyebrow: 'About ARKAN DX',
        title: 'We design from the reading of sign, desire and threshold.',
        intro:
          'We are a hermetic digital experience agency for teams that need more than a pretty website: they need an initiatic structure capable of producing clarity, trust and measurable action.',
        cards: [
          ['Reading', 'Before designing, we interpret symptoms: friction, desire, objection, excess and silence.'],
          ['Correspondence', 'Every sign must align promise, evidence, interface and expected action.'],
          ['Manifestation', 'The system ends in fast, accessible, measurable code ready to scale.']
        ],
        distinctTitle: 'What makes us different from a traditional agency.',
        distinctBody:
          'We do not split strategy, content, design and development into isolated deliverables. We work with them as operations of one digital ritual: separate noise, reveal value, order signs, cross thresholds and measure transformation.',
        ctaTitle: 'Let us talk about the symbolic system your brand needs.',
        cta: 'Request reading'
      },
      blog: {
        eyebrow: 'Strategic grimoire',
        title: 'Actionable readings on signs, desire, interfaces and conversion.',
        intro:
          'Content for founders, marketers and product teams that want to use semiotics, UX, SEO and technology to guide clear decisions without empty persuasion.',
        intent: 'Intent',
        read: 'Read article structure'
      },
      cases: {
        eyebrow: 'Proof of manifestation',
        title: 'Work designed to turn symptoms into metrics.',
        intro:
          'Selected projects where symbolic reading, interface, journey topology and technology came together to improve activation, commercial trust and lead quality.',
        result: 'Result',
        ctaTitle: 'Every magic must be proven in a metric.',
        ctaBody: 'Let us define what transformation must happen before designing the first screen.',
        cta: 'Start reading'
      }
    }
  }
} as const;

export const backofficeContent = {
  es: {
    title: 'Backoffice de agencia',
    eyebrow: 'Operacion interna',
    intro:
      'Centro operativo para seguir clientes, solicitudes, citas, usuarios internos y rendimiento comercial de ARKAN DX.',
    metrics: [
      ['Clientes activos', '18', '+4 este mes'],
      ['Solicitudes abiertas', '27', '9 de alta prioridad'],
      ['Citas agendadas', '12', '5 esta semana'],
      ['Ingresos pipeline', '$86.4k', '+18% mensual']
    ],
    tabs: ['Dashboard', 'Clientes', 'Solicitudes', 'Citas', 'Usuarios'],
    requestsTitle: 'Solicitudes recientes',
    clientsTitle: 'Clientes',
    appointmentsTitle: 'Citas proximas',
    usersTitle: 'Equipo interno',
    status: {
      discovery: 'Descubrimiento',
      proposal: 'Propuesta',
      delivery: 'Entrega',
      urgent: 'Urgente',
      active: 'Activo',
      waiting: 'Esperando cliente'
    },
    columns: {
      client: 'Cliente',
      owner: 'Responsable',
      status: 'Estado',
      value: 'Valor',
      request: 'Solicitud',
      priority: 'Prioridad',
      appointment: 'Cita',
      role: 'Rol'
    },
    enhancementsTitle: 'Mejoras recomendadas',
    enhancements: [
      'Login con roles: admin, estrategia, diseno, desarrollo y ventas.',
      'CRM conectado al formulario de contacto para crear solicitudes automaticamente.',
      'Calendario sincronizado con Google Calendar o Outlook.',
      'Estados Kanban para solicitudes, propuestas y entregas.',
      'Dashboard financiero con pipeline, ingresos cerrados y carga del equipo.'
    ]
  },
  en: {
    title: 'Agency backoffice',
    eyebrow: 'Internal operations',
    intro:
      'Operating center to track clients, requests, appointments, internal users and commercial performance for ARKAN DX.',
    metrics: [
      ['Active clients', '18', '+4 this month'],
      ['Open requests', '27', '9 high priority'],
      ['Booked appointments', '12', '5 this week'],
      ['Pipeline revenue', '$86.4k', '+18% monthly']
    ],
    tabs: ['Dashboard', 'Clients', 'Requests', 'Appointments', 'Users'],
    requestsTitle: 'Recent requests',
    clientsTitle: 'Clients',
    appointmentsTitle: 'Upcoming appointments',
    usersTitle: 'Internal team',
    status: {
      discovery: 'Discovery',
      proposal: 'Proposal',
      delivery: 'Delivery',
      urgent: 'Urgent',
      active: 'Active',
      waiting: 'Waiting on client'
    },
    columns: {
      client: 'Client',
      owner: 'Owner',
      status: 'Status',
      value: 'Value',
      request: 'Request',
      priority: 'Priority',
      appointment: 'Appointment',
      role: 'Role'
    },
    enhancementsTitle: 'Recommended enhancements',
    enhancements: [
      'Role-based login: admin, strategy, design, development and sales.',
      'CRM connected to the contact form to create requests automatically.',
      'Calendar sync with Google Calendar or Outlook.',
      'Kanban states for requests, proposals and deliveries.',
      'Financial dashboard with pipeline, closed revenue and team workload.'
    ]
  }
} as const;
