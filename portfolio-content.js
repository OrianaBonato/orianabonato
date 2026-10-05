// Shared content for the responsive proposals (home + SmartRest). Mirrors Portfolio Desktop / Project Detail.
(function () {
  const home = {
    en: {
      navWork: 'Work', navAbout: 'About', navExp: 'Experience', navContact: 'Contact',
      role1: 'Frontend Developer', role2: '· UX/UI Designer', heroCta: 'See my work',
      location: 'Based in Vigo, Spain. Looking for a frontend role on a product team where design and code work side by side — remote, hybrid or on-site.',
      heroWork: 'Selected work 2019 — 2026',
      lblApproach: '(01) — Approach',
      approachBody: 'I think in systems before screens: every spacing and button state is a decision that comes alive in code. So I follow each one all the way, from the Figma prototype to the Angular or React component that makes it work.',
      lblWork: '(02) — Selected work', swipe: 'Swipe →', work1: 'Selected', work2: 'Work',
      more: 'More projects on request.', getInTouch: 'Get in touch',
      lblAbout: '(03) — About me', hello1: 'Hello,', hello2: "I'm Oriana", cv: 'Download CV',
      aboutTitle: 'Every branch I explored led me to code.',
      aboutSub: "[Frontend developer with a graphic designer's eye]",
      aboutBody1: 'I started in graphic design in 2019 and spent the following years trying a bit of everything: brand identity, editorial, photography, social media, websites. Somewhere along the way I noticed that almost everything I worked on had code behind it, quietly making it move, respond and come to life.',
      aboutBody2: 'I wanted to understand how the work actually gets finished, so I went further. I earned a Higher National Diploma in Web Application Development while working, and today I build with Angular, React and TypeScript, plus Java and Spring Boot when a project needs a backend. Design is still where I started, and it shapes how I build: with the system, the spacing and the behaviour in mind from the first line.',
      capTitles: ['Design', 'Development', 'Tools'],
      lblExp: '(04) — Experience', exp1: "Where I've", exp2: 'worked',
      readMore: 'Read more +', readLess: 'Read less −',
      cta: "Have a project in mind? Let's work together.", talk: "Let's talk",
      social: 'Social', menu: 'Menu', time: 'Local time', based: 'Based in', basedVal: 'Vigo, Spain — remote (CET)',
      credit: 'Designed & coded by Oriana Bonato',
      exp: [
        { date: 'Jul 2024 – Jun 2026', title: 'Web Designer & Developer',
          desc: "Two years, three roles in the same company: Web Designer, then Web Development Intern, then Creative Designer. As a web designer, I launched 100+ websites for freelancers and small businesses in construction, wellness, beauty and health. I handled each launch end to end: domain, DNS and SSL setup, semantic HTML with on-page SEO, Search Console and Analytics, a custom colour, type and button system for every site, and direct contact with each client. As a development intern, I built the templates for an AI app that generates branded Instagram posts by filling each slot with the client's logo, colours and fonts. I worked on my own feature branch in an existing Node.js and Supabase codebase, and developed a React and Tailwind landing page with a booking system. As Creative Designer, I defined the visual rules of Sygna's design system, strict enough for the dev team to automate image generation with Claude and the Canva MCP. I also handed off screens to frontend developers through the Figma MCP in Cursor." },
        { date: 'Oct 2020 – Present', title: 'Brand & Web Designer',
          desc: "Brand identities and websites for small businesses starting from scratch: a hair salon, a smash burger restaurant, an interior design studio and a psychology practice, among others. I build each identity as a system rather than a logo, with palette, type and rules that still hold when the brand moves to a website, a menu or a billboard. I've also worked as an external designer for Exlabesa, producing commercial materials, large-format advertising and floor-plan illustrations within their brand guidelines." },
        { date: 'Mar 2019 – Jun 2020', title: 'Graphic Designer',
          desc: "My first agency job, in a multidisciplinary team managing 15+ client accounts. I designed websites, visual identities and campaigns for digital and print, including catalogues, billboards, large-format graphics and social media ads, and did the product photography and retouching myself. It's where I learned to handle a brief, a deadline and a client in the same week." },
      ],
    },
    es: {
      navWork: 'Proyectos', navAbout: 'Sobre mí', navExp: 'Experiencia', navContact: 'Contacto',
      role1: 'Desarrolladora Frontend', role2: '· Diseñadora UX/UI', heroCta: 'Ver proyectos',
      location: 'Vivo en Vigo. Busco un puesto frontend en un equipo de producto donde diseño y código trabajen juntos: en remoto, híbrido o presencial.',
      heroWork: 'Proyectos 2019 — 2026',
      lblApproach: '(01) — Enfoque',
      approachBody: 'Pienso en sistemas antes que en pantallas: cada espaciado y cada estado de un botón es una decisión que cobra vida en el código. Por eso acompaño cada una de principio a fin, desde el prototipo en Figma hasta el componente en Angular o React que la hace funcionar.',
      lblWork: '(02) — Proyectos', swipe: 'Desliza →', work1: 'Proyectos', work2: 'destacados',
      more: 'Más proyectos bajo petición.', getInTouch: 'Hablemos',
      lblAbout: '(03) — Sobre mí', hello1: 'Hola,', hello2: 'soy Oriana', cv: 'Descargar CV',
      aboutTitle: 'Cada rama que exploré me llevó al código.',
      aboutSub: 'Desarrolladora frontend con ojo de diseñadora gráfica.',
      aboutBody1: 'Empecé en diseño gráfico en 2019 y pasé los años siguientes probando un poco de todo: identidad de marca, editorial, fotografía, redes sociales, webs. Por el camino me di cuenta de que casi todo lo que tocaba tenía código detrás, haciendo que las cosas se movieran, respondieran y cobraran vida.',
      aboutBody2: 'Quería entender cómo se termina el trabajo, así que fui más allá. Me formé como Técnica Superior en Desarrollo de Aplicaciones Web (DAW) mientras trabajaba, y hoy desarrollo con Angular, React y TypeScript, además de Java y Spring Boot cuando un proyecto necesita backend. El diseño sigue siendo mi punto de partida y marca cómo construyo: pensando en el sistema, el espaciado y el comportamiento desde la primera línea.',
      capTitles: ['Diseño', 'Desarrollo', 'Herramientas'],
      lblExp: '(04) — Experiencia', exp1: 'Dónde he', exp2: 'trabajado',
      readMore: 'Leer más +', readLess: 'Leer menos −',
      cta: '¿Tienes un proyecto en mente? Trabajemos juntos.', talk: 'Hablemos',
      social: 'Redes', menu: 'Menú', time: 'Hora local', based: 'Ubicación', basedVal: 'Vigo, España — en remoto (CET)',
      credit: 'Diseñado y programado por Oriana Bonato',
      exp: [
        { date: 'Jul 2024 – Jun 2026', title: 'Diseñadora y Desarrolladora Web',
          desc: 'Dos años y tres puestos en la misma empresa: Diseñadora Web, Becaria de Desarrollo Web y Creative Designer. Como diseñadora web lancé más de 100 webs para autónomos y pymes de construcción, bienestar, estética y salud. Me encargaba de cada lanzamiento de principio a fin: dominio, DNS y certificado SSL, HTML semántico con SEO on-page, Search Console y Analytics, un sistema propio de colores, tipografías y botones para cada web, y trato directo con cada cliente. En las prácticas de desarrollo creé las plantillas de una app con IA que genera posts de Instagram insertando en cada hueco el logo, los colores y la tipografía del cliente. Trabajé en mi propia rama de feature sobre un código existente en Node.js y Supabase, y desarrollé una landing con sistema de reservas en React y Tailwind. Como Creative Designer definí las reglas visuales del design system de Sygna, lo bastante estrictas para que el equipo de desarrollo automatizara la generación de imágenes con Claude y el MCP de Canva. También hice el handoff de pantallas a los desarrolladores frontend mediante el MCP de Figma en Cursor.' },
        { date: 'Oct 2020 – Actualidad', title: 'Diseñadora de Marca y Web',
          desc: 'Identidades de marca y webs para negocios que empiezan desde cero: una peluquería, una hamburguesería smash, un estudio de interiorismo y una consulta de psicología, entre otros. Construyo cada identidad como un sistema y no como un logo, con paleta, tipografía y reglas que se sostienen cuando la marca pasa a una web, una carta o una valla. También he trabajado como diseñadora externa para Exlabesa, creando material comercial, publicidad en gran formato e ilustraciones de planos dentro de sus guías de marca.' },
        { date: 'Mar 2019 – Jun 2020', title: 'Diseñadora Gráfica',
          desc: 'Mi primera agencia, en un equipo multidisciplinar con más de 15 cuentas de cliente. Diseñé webs, identidades visuales y campañas para digital e impresión, entre ellas catálogos, vallas, gran formato y anuncios para redes, y me encargué de la fotografía de producto y el retoque. Ahí aprendí a gestionar un brief, un plazo y un cliente en la misma semana.' },
      ],
    },
  };
  const places = [
    { place: 'SIWEB', url: 'https://siweb.es/' },
    { place: 'Freelance', url: 'https://www.behance.net/ocbonato96' },
    { place: 'Cen Palabras Marketing & Advertising', url: 'https://www.cenpalabras.com/servicios/' },
  ];
  const projects = [
    { index: '01', name: 'SmartRest', tag: 'App Web Frontend / Backend', year: '2026', img: 'img/cards-projects/P00_SMARTREST.png', url: 'smartrest.html' },
    { index: '02', name: 'Churrería Romero', tag: 'Web Design', year: '2025', img: 'img/CHURRERIA/logo-blanco.png', url: 'churreria-romero.html' },
    { index: '03', name: 'Estudio 96', tag: 'Brand identity', year: '2023', img: 'img/ESTUDIO96/logo-e96-blanco.svg', url: 'estudio-96.html' },
  ];
  const capItems = ['Branding, Art direction, Editorial, UI design', 'HTML, CSS, JavaScript, Angular, Webflow', 'Figma, Photoshop, Illustrator, After Effects'];
  const tools = ['figma', 'photoshop', 'illustrator', 'after-effects', 'html5', 'css3', 'javascript', 'angular', 'github', 'git'].map((n) => 'img/icons/' + n + '.svg');
  const marquee = ['Frontend Development', 'Web Design', 'UI/UX', 'Branding', 'Graphic Design'];

  // Splits the approach text into two paint blocks; [Figma]/[Angular]/[React] in Courier, sentence-end dots in purple.
  function approach(lang) {
    const words = home[lang].approachBody.split(' ');
    const cut = words.findIndex((w) => w === 'code.' || w === 'código.') + 1;
    const tok = (w, fw, last) => {
      const m = w.match(/^(Figma|Angular|React)([.,:;]?)$/);
      if (m) return { t: '[' + m[1] + ']' + m[2], dot: '', ff: "'Courier New',monospace", fw: 400 };
      if (last && w.endsWith('.')) return { t: w.slice(0, -1), dot: '.', ff: "'Bricolage Grotesque',sans-serif", fw };
      return { t: w, dot: '', ff: "'Bricolage Grotesque',sans-serif", fw };
    };
    const a = words.slice(0, cut), b = words.slice(cut);
    return { w1: a.map((w, i) => tok(w, 700, i === a.length - 1)), w2: b.map((w, i) => tok(w, 300, i === b.length - 1)) };
  }

  function smartrest(lang) {
    const C = (en, es) => (lang === 'es' ? es : en);
    const img = (f) => 'img/SMARTREST/' + f + '.webp';
    return {
      t: {
        back: C('← Work', '← Proyectos'), caseStudy: C('Case study', 'Caso de estudio'),
        role: C('Role', 'Rol'), stack: 'Stack', duration: C('Duration', 'Duración'), links: C('Links', 'Enlaces'),
        problem: C('The problem', 'El problema'), built: C('What I built', 'Qué construí'), interface: C('Interface', 'Interfaz'),
        decisions: C('Technical decisions', 'Decisiones técnicas'), ba: C('Before / After', 'Antes / Después'),
        learned: C('What I learned', 'Qué aprendí'), next: C('Next project', 'Siguiente proyecto'),
        baNote: C('Drag to compare the first version with the redesign.', 'Arrastra para comparar la primera versión con el rediseño.'),
        v1: 'V1', v2: 'V2', swipe: C('Swipe →', 'Desliza →'),
        credit: C('Designed & coded by Oriana Bonato', 'Diseñado y programado por Oriana Bonato'),
      },
      p: {
        index: '01', name: 'SmartRest', logo: 'img/SMARTREST/logo-blanco.png', year: '2026', tag: 'App Web Frontend / Backend',
        summary: C('Restaurant management app, my final project for the HND in Web Application Development.', 'App de gestión de restaurantes, mi proyecto final del Ciclo Superior de DAW.'),
        role: C('Full-stack developer (solo)', 'Desarrolladora full-stack (en solitario)'),
        stack: ['Java 17', 'Spring Boot', 'MySQL', 'Angular 20'],
        duration: C('16 weeks', '16 semanas'), period: C('Nov 2025 – Feb 2026', 'nov 2025 – feb 2026'),
        links: [
          { label: C('Frontend repo', 'Repo frontend'), url: 'https://github.com/OrianaBonato/smartrest-frontend' },
          { label: C('Backend repo', 'Repo backend'), url: 'https://github.com/OrianaBonato/smartrest-backend' },
        ],
        problem: C(
          "In a busy restaurant, most operational mistakes come down to fragmented communication: misrouted orders, delays, duplicated work. The floor takes the order, the kitchen and bar execute it, and the real status of each table often lives in someone's head or on a scrap of paper. SmartRest brings that flow into a single web app, so floor, kitchen and bar staff coordinate through the same order tickets.",
          'En un restaurante con mucho movimiento, la mayoría de los errores (comandas mal dirigidas, retrasos, trabajo duplicado) vienen de una comunicación fragmentada. La sala toma el pedido, cocina y barra lo ejecutan, y el estado real de cada mesa suele estar en la cabeza de alguien o en un papel. SmartRest reúne ese flujo en una sola aplicación web, para que sala, cocina y barra se coordinen a través de las mismas comandas.'
        ),
        built: (lang === 'es' ? [
          'Login y control de acceso para cuatro roles: administración, sala, cocina y barra.',
          'Gestión de mesas y servicios, que incluye abrir y cerrar un servicio y seguir el estado de cada mesa.',
          'Líneas de comanda que se envían automáticamente a cocina o a barra según el producto y avanzan por estados (pendiente → en preparación → lista → entregada).',
          'Una API REST por capas en Spring Boot (controller, service, repository, DTO), consumida desde un frontend en Angular con una vista propia para cada rol.',
          'Una interfaz responsive con Angular Material, pensada para tablets en sala y en cocina.',
        ] : [
          'Role-based login and access control for four roles: admin, floor, kitchen and bar.',
          "Table and service management, including opening and closing a service and tracking each table's status.",
          'Order lines routed automatically to kitchen or bar depending on the product, moving through a status pipeline (pending → in progress → ready → delivered).',
          'A layered REST API in Spring Boot (controller, service, repository, DTO) consumed by an Angular frontend, with a dedicated view per role.',
          'A responsive UI built with Angular Material and designed for tablets on the floor and in the kitchen.',
        ]).map((text, i) => ({ n: String(i + 1).padStart(2, '0'), text })),
        gallery: {
          sala: {
            label: C('Floor', 'Sala'), ratio: '900/1298', note: '',
            desktop: [
              { src: img('v2-sala-abrir-1-desktop'), cap: C('Opening a service', 'Abrir servicio') },
              { src: img('v2-sala-abrir-2-desktop'), cap: C('Choosing a table', 'Elegir mesa') },
              { src: img('v2-sala-abrir-3-desktop'), cap: C('Service open', 'Servicio abierto') },
              { src: img('v2-cuenta-desktop'), cap: C('Table bill', 'Cuenta de mesa') },
              { src: img('v2-sala-mesas-desktop'), cap: C('Tables overview', 'Vista de mesas') },
            ],
            tablet: [
              { src: img('v2-sala-mesas-tablet'), cap: C('Tables', 'Mesas') },
              { src: img('v2-sala-abrir-tablet'), cap: C('Opening a service', 'Abrir servicio') },
              { src: img('v2-comanda-tablet'), cap: C('Taking an order', 'Tomando una comanda') },
              { src: img('v2-sala-comanda-2-tablet'), cap: C('Order summary', 'Resumen de comanda') },
              { src: img('v2-sala-enviada-tablet'), cap: C('Order sent', 'Comanda enviada') },
              { src: img('v2-sala-cuenta-tablet'), cap: C('Table bill', 'Cuenta de mesa') },
            ],
          },
          cocina: {
            label: C('Kitchen & bar', 'Cocina y barra'), ratio: '900/1203',
            note: C('The bar uses the same screen design as the kitchen, with its own queue.', 'La barra usa el mismo diseño de pantalla que la cocina, con su propia cola.'),
            desktop: [
              { src: img('v2-cocina-desktop'), cap: C('Kitchen queue', 'Cola de cocina') },
              { src: img('v2-cocina-pendiente-desktop'), cap: C('Pending → in progress', 'Pendiente → en preparación') },
              { src: img('v2-cocina-listas-desktop'), cap: C('Ready orders', 'Comandas listas') },
              { src: img('v2-cocina-canceladas-desktop'), cap: C('Cancelled orders', 'Comandas canceladas') },
              { src: img('v2-barra-desktop'), cap: C('Bar queue', 'Cola de barra') },
            ],
            tablet: [
              { src: img('v2-cocina-tablet'), cap: C('Kitchen queue', 'Cola de cocina') },
              { src: img('v2-cocina-listas-tablet'), cap: C('Ready orders', 'Comandas listas') },
              { src: img('v2-cocina-canceladas-tablet'), cap: C('Cancelled orders', 'Comandas canceladas') },
            ],
          },
        },
        ba: {
          sala: { label: C('Floor', 'Sala'), before: img('v1-sala-mesas-desktop'), after: img('v2-sala-mesas-desktop'), tBefore: img('v1-sala-mesas-tablet'), tAfter: img('v2-sala-mesas-tablet'), tRatio: '3/4', desc: '' },
          cocina: { label: C('Kitchen', 'Cocina'), before: img('v1-cocina-desktop'), after: img('v2-cocina-desktop'), tBefore: img('v1-cocina-tablet'), tAfter: img('v2-cocina-tablet'), tRatio: '900/1203', desc: C('The bar uses the same screen design as the kitchen.', 'La barra usa el mismo diseño de pantalla que la cocina.') },
        },
        decisions: lang === 'es' ? [
          'Elegí Angular porque era uno de los frameworks más pedidos en los puestos a los que apuntaba, y quería experiencia práctica real con él, más allá de los ejercicios del ciclo.',
          'El modelo de datos refleja las entidades reales del restaurante en lugar de un CRUD genérico. Mesas y servicios están separados: una mesa puede tener muchos servicios a lo largo del tiempo, pero solo uno abierto a la vez. Cada línea de comanda pertenece a la vez a un servicio y a un producto, y eso es lo que permite que cocina y barra tengan cada una su propia cola filtrada en lugar de una lista compartida.',
          'Para el control de acceso tomé una decisión consciente de MVP. En vez de JWT, el rol se guarda al iniciar sesión y viaja en cada petición en una cabecera propia, X-ROL, que cada endpoint comprueba. Fue más rápido de construir y de enseñar, pero no es autenticación real, porque cualquiera podría falsificar esa cabecera. Sustituirla por autenticación con tokens es lo primero que cambiaría, y ya encabeza el roadmap del proyecto.',
          'Construí la primera versión con apoyo de GPT-5.3-Codex. Ahora estoy rediseñando el frontend, un rediseño que planifiqué con Claude Design, y lo publicaré en el mismo repo cuando esté terminado.',
        ] : [
          'I chose Angular because it was one of the frameworks most requested in the roles I was aiming for, and I wanted real hands-on experience with it beyond coursework.',
          "The data model mirrors the restaurant's real entities instead of a generic CRUD structure. Tables and services are separate: a table can have many services over time, but only one open at a time. Every order line belongs to both a service and a product, which is what lets kitchen and bar each pull their own filtered queue instead of sharing one list.",
          "For access control I made a deliberate MVP trade-off. Instead of JWT, the role is captured at login and sent with every request in a custom X-ROL header, which each endpoint checks. It was faster to build and demo, but it isn't real authentication, because anyone could forge that header. Replacing it with token-based auth is the first change I'd make, and it's already at the top of the project's roadmap.",
          "I built the first version with development support from GPT-5.3-Codex. I'm now redesigning the frontend, a redesign I planned with Claude Design, and it will be published in the same repo once it's finished.",
        ],
        learned: C(
          "This was the project where I finally saw the whole picture I'd been curious about for years: what happens behind an interface to make it work. Designing the API and then consuming it from Angular showed me how a status on the backend becomes a queue in the UI, and how a data modeling decision shapes what the frontend can show. It's an academic MVP, not a production system, and the auth shortcut above is the clearest proof of that. But it's the project that turned curiosity into a way of working.",
          'Fue el proyecto en el que por fin vi completo lo que llevaba años queriendo entender: qué pasa detrás de una interfaz para que funcione. Diseñar la API y después consumirla desde Angular me enseñó cómo un estado en el backend se convierte en una cola en la interfaz, y cómo una decisión en el modelo de datos condiciona lo que el frontend puede mostrar. Es un MVP académico, no un sistema en producción, y el atajo de autenticación es la prueba más clara. Pero es el proyecto que convirtió la curiosidad en una forma de trabajar.'
        ),
        next: { name: 'Churrería Romero', tag: 'Branding / Web · 2025', url: 'churreria-romero.html' },
      },
    };
  }

  window.OB_CONTENT = { home, places, projects, capItems, tools, marquee, approach, smartrest };
  window.dispatchEvent(new Event('ob-content'));
})();
