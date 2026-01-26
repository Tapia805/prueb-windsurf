// Datos de posts extraídos del proyecto
const mockPosts = [
  {
    id: 1,
    title: "Mi primer blogpost",
    summary: "El arte de aprender a programar sin morir en el intento: una historia real de frustración y superación.",
    slug: "mi-primer-blogpost",
    content: [
      "Todo comenzó con un 'Hola Mundo' que tomó tres horas hacer. No es broma. Estaba en mi cuarto, a las 2 AM, con 15 pestañas abiertas de Stack Overflow, sintiendo que era el humano más estúpido del planeta.",
      "Mi primer error real fue pensar que necesitaba aprender todo de golpe. Python, JavaScript, React, SQL, Docker... intenté aprenderlos simultáneamente. El resultado: no aprendí nada bien y casi abandono la programación para siempre.",
      "La salvación llegó en forma de un tweet simple: 'Aprende una cosa a la vez. Domínala. Luego pasa a la siguiente'. Sonó obvio, pero para mí fue una revelación. Dejé de intentar beber del mar con sorbete.",
      "Empecé con JavaScript puro. Sin frameworks, sin herramientas fancy. Solo variables, funciones, loops. Después de un mes, finalmente podía construir una calculadora funcional. Fue mi primer 'lo logré'.",
      "Lo curioso es que cuanto más simple era el proyecto, más aprendía. Una to-do list me enseñó sobre arrays y manipulación del DOM. Un juego simple me enseñó sobre game loops y estado. Cada pequeño proyecto era una nueva pieza del rompecabezas.",
      "Hoy, años después, me doy cuenta de que el secreto no era ser genio. Era ser consistente. 30 minutos diarios valen más que 8 horas un domingo. La programación no es una carrera, es un maratón de pequeños pasos.",
      "Si estás empezando y sientes que no puedes, te digo: es normal. Todos pasamos por eso. La diferencia no es talento, es no rendirse. Tu 'Hola Mundo' de 3 horas será la base de tu próximo proyecto increíble."
    ],
    date: "22 de Enero, 2025",
    readTime: "8 min de lectura"
  },
  {
    id: 2,
    title: "Desarrollo web moderno",
    summary: "Explorando las últimas tendencias en desarrollo web y las mejores prácticas.",
    slug: "desarrollo-web-moderno",
    content: [
      "Mi viaje en el desarrollo web comenzó en una época donde HTML y CSS eran reyes. Recuerdo pasar noches enteras tratando de centrar un div, usando floats y position absolute. Parecía magia oscura, pero funcionaba.",
      "Luego llegó jQuery, y de repente todo se volvió más fácil. Podíamos hacer animaciones, AJAX, manipular el DOM con pocas líneas. Fue como descubrir un superpoder que no sabía que tenía.",
      "La verdadera revolución llegó con Angular y React. De repente, las aplicaciones web podían sentirse como aplicaciones de escritorio. El estado se gestionaba de forma predecible, los componentes se reutilizaban, el código se volvía mantenible.",
      "Hoy vivimos en la era de los meta-frameworks. Next.js, Nuxt, SvelteKit. No solo construyes interfaces, sino aplicaciones completas con routing, SSR, optimización automática. Es como tener un equipo de desarrolladores trabajando contigo.",
      "Lo más emocionante es que esto es solo el comienzo. WebAssembly promete llevar lenguajes como Rust y C++ al navegador. Edge computing está cambiando cómo pensamos en el despliegue. El futuro del desarrollo web es brillante, y estamos aquí para construirlo."
    ],
    date: "15 de Enero, 2025",
    readTime: "6 min de lectura"
  },
  {
    id: 3,
    title: "Tips para desarrolladores",
    summary: "Consejos útiles para mejorar tu productividad como desarrollador de software.",
    slug: "tips-desarrolladores",
    content: [
      "Después de más de una década escribiendo código, he aprendido que ser un buen desarrollador va mucho más allá de conocer sintaxis. Se trata de construir sistemas, pensar críticamente y colaborar efectivamente.",
      "Mi primer gran lección vino de un bug que me tomó tres días resolver. Estaba seguro de que el problema era en la base de datos, en el servidor, en cualquier parte menos en mi código. Cuando finalmente lo encontré -un simple error de tipeo- aprendí que debugging no es encontrar errores, es entender sistemas.",
      "El control de versiones con Git fue otra revelación. Al principio lo usaba solo como respaldo. Luego descubrí las branches, los pull requests, el código colaborativo. Mi productividad se multiplicó, pero más importante, mi código mejoró drásticamente gracias al code review.",
      "Las herramientas de automatización cambiaron todo. Scripts para despliegue, linting, testing. Lo que antes me tomaba horas manuales, ahora sucede en segundos. La automatización no es pereza, es inteligencia aplicada al flujo de trabajo.",
      "El consejo más valioso que puedo compartir: documenta tu código como si tú mismo del futuro fuera a mantenerlo. Porque créeme, ese futuro llegará más rápido de lo que piensas, y te lo agradecerás."
    ],
    date: "10 de Enero, 2025",
    readTime: "5 min de lectura"
  },
  {
    id: 4,
    title: "React y Next.js",
    summary: "Cómo construir aplicaciones modernas con React y el framework Next.js.",
    slug: "react-nextjs",
    content: [
      "Mi primer encuentro con React fue confuso. ¿Por qué alguien complicaría HTML con JavaScript? ¿Qué era este JSX? Parecía un paso atrás, una sobreingeniería innecesaria. Qué equivocado estaba.",
      "Todo hizo clic cuando construí mi primera aplicación real. La forma en que React maneja el estado, el ciclo de vida de los componentes, la reactividad. Era como tener un superpoder. Las interfaces se volvían vivas, respondían a las interacciones de forma mágica.",
      "Luego descubrí Next.js y mi mundo se expandió. Server-side rendering, static generation, routing automático. De repente, las aplicaciones React podían ser rápidas, SEO-friendly y escalables sin sacrificar la experiencia del desarrollador.",
      "El ecosistema es abrumador al principio. Hooks, Context API, Redux, Zustand. Pero cada herramienta tiene su propósito. Aprendí que no necesitas todo, solo lo que tu proyecto realmente necesita.",
      "Hoy, cuando empiezo un nuevo proyecto, React y Next.js son mi elección predeterminada. No porque sean las únicas opciones, sino porque me permiten concentrarme en lo importante: resolver problemas y crear valor para los usuarios."
    ],
    date: "5 de Enero, 2025",
    readTime: "6 min de lectura"
  },
  {
    id: 5,
    title: "TypeScript avanzado",
    summary: "Dominando TypeScript para proyectos grandes y escalables.",
    slug: "typescript-avanzado",
    content: [
      "Mi relación con TypeScript comenzó de forma tímida. Solo lo usaba para tipos básicos, evitando las características 'complicadas'. Pensaba: 'Para qué necesito genéricos si puedo usar any?'. Qué error tan grande.",
      "Todo cambió cuando me uní a un equipo grande. De repente, mi código con anys se volvió un problema. Los bugs aparecían en producción, la refactorización era imposible, los nuevos desarrolladores se perdían constantemente.",
      "La revelación llegó con los genéricos. `<T>`, `<K extends keyof T>`, `Partial<T>`. Parecía jeroglíficos, pero de repente mi código se volvió seguro. El IDE me ayudaba, los errores se detectaban antes de ejecutar, la refactorización era segura.",
      "Luego descubrí los tipos condicionales, los mapped types, los utility types. Era como tener un lenguaje dentro del lenguaje. Podía crear tipos que se adaptaban a mis datos, que validaban estructuras complejas, que predecían errores.",
      "Hoy no puedo imaginar trabajar sin TypeScript. No es solo seguridad de tipos, es documentación viva, es comunicación clara con el equipo, es confianza en cada cambio. El costo inicial de aprendizaje se paga mil veces en productividad y tranquilidad."
    ],
    date: "28 de Diciembre, 2024",
    readTime: "7 min de lectura"
  },
  {
    id: 6,
    title: "CSS Grid vs Flexbox",
    summary: "Cuándo usar cada uno y cómo dominar el layout moderno.",
    slug: "css-grid-flexbox",
    content: [
      "Recuerdo cuando CSS era el enemigo. Pasaba horas luchando con floats, con position absolute, con clear fixes. Parecía que el navegador conspiraba contra mí. Cada layout nuevo era una batalla.",
      "Luego llegó Flexbox y fue como ver la luz. De repente, alinear elementos era fácil. `justify-content`, `align-items`, `flex-direction`. Todo tenía sentido. Podía centrar cosas sin trucos raros. Era magia.",
      "Pero luego apareció CSS Grid y me confundí de nuevo. ¿Cuándo usar Flexbox? ¿Cuándo usar Grid? ¿Eran competidores o complementarios? Intenté usar Grid para todo, pero a veces Flexbox era más simple.",
      "La clave que aprendí: no son enemigos, son herramientas diferentes. Flexbox es para componentes, para alinear elementos en una dimensión. Grid es para layouts, para controlar dos dimensiones. Como usar un martillo vs una sierra.",
      "Hoy los uso juntos. Grid para la estructura general de la página, Flexbox para los componentes internos. Navbar con Flexbox, sidebar con Grid, cards con Flexbox, layout principal con Grid. Es como tener un conjunto completo de herramientas de carpintería.",
      "La mejor parte: ya no le temo al CSS. Es un aliado poderoso que me permite crear interfaces hermosas y responsivas sin hacks ni trucos. Solo práctica y entender qué herramienta usar para cada trabajo."
    ],
    date: "20 de Diciembre, 2024",
    readTime: "5 min de lectura"
  },
  {
    id: 7,
    title: "Optimización de rendimiento",
    summary: "Técnicas profesionales para optimizar el rendimiento de aplicaciones web modernas.",
    slug: "optimizacion-rendimiento",
    content: [
      "Mi primera lección sobre rendimiento fue dolorosa. Lanzé una aplicación que funcionaba perfectamente en mi localhost, pero en producción tardaba 8 segundos en cargar. Los usuarios abandonaban antes de ver el contenido. Fue humillante.",
      "El problema era simple: estaba cargando una librería de 2MB para mostrar un simple carousel. No entendía el concepto de bundle size, de lazy loading, de tree shaking. Para mí, si funcionaba, estaba bien. Qué error tan grande.",
      "La revelación llegó cuando usé Lighthouse por primera vez. Vi los números rojos, las advertencias, las sugerencias. Era como un espejo que me mostraba todas mis malas prácticas. Empecé a optimizar: imágenes WebP, code splitting, caching apropiado.",
      "Lo más sorprendente fue que las optimizaciones más simples tenían el mayor impacto. Comprimir imágenes, usar CDNs, minificar CSS, eliminar JavaScript no utilizado. Cosas que tomaban minutos pero mejoraban el rendimiento en segundos.",
      "Hoy mido todo. Core Web Vitals, Time to Interactive, First Contentful Paint. Tengo monitoreo en producción, alertas cuando algo se lento. La optimización no es un evento único, es un proceso continuo.",
      "La verdad es que el rendimiento es parte de la experiencia de usuario. Una aplicación rápida se siente profesional, confiable. Una aplicación lenta se siente rota, barata. En el mundo digital, la velocidad es confianza."
    ],
    date: "15 de Diciembre,, 2024",
    readTime: "7 min de lectura"
  }
];

// Servidor Bun.js con endpoint /posts
const server = Bun.serve({
  port: 3001, // Puerto diferente al del frontend
  routes: {
    // Endpoint GET /posts - Lista todos los posts
    "/posts": {
      GET: () => {
        return Response.json({
          success: true,
          data: mockPosts,
          total: mockPosts.length
        });
      }
    },
    
    // Endpoint GET /posts/:id - Obtener un post específico
    "/posts/:id": (req) => {
      const id = parseInt(req.params.id);
      const post = mockPosts.find(p => p.id === id);
      
      if (!post) {
        return Response.json({
          success: false,
          error: "Post not found"
        }, { status: 404 });
      }
      
      return Response.json({
        success: true,
        data: post
      });
    },
    
    // Endpoint GET /posts/slug/:slug - Obtener post por slug
    "/posts/slug/:slug": (req) => {
      const slug = req.params.slug;
      const post = mockPosts.find(p => p.slug === slug);
      
      if (!post) {
        return Response.json({
          success: false,
          error: "Post not found"
        }, { status: 404 });
      }
      
      return Response.json({
        success: true,
        data: post
      });
    }
  },
  
  // Fallback para rutas no encontradas
  fetch(req) {
    return new Response("Not Found", { status: 404 });
  }
});

console.log(`🚀 Servidor Bun.js corriendo en: ${server.url}`);
console.log(`📝 Endpoint disponible: ${server.url}posts`);
console.log(`📝 Endpoint individual: ${server.url}posts/:id`);
console.log(`📝 Endpoint por slug: ${server.url}posts/slug/:slug`);
