import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getPostBySlug, getPostById } from "@/lib/api";

// Generate static params for all posts
export async function generateStaticParams() {
  const { mockPosts } = await import("@/lib/posts");
  return mockPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Intentar obtener por slug primero, si no funciona fallback a datos mock con contenido
  let post = await getPostBySlug(resolvedParams.slug);
  
  // Si no se encuentra por slug o no tiene contenido, usar datos mock con contenido
  if (!post || !post.content) {
    const { mockPostsWithContent } = await import("@/lib/posts");
    post = mockPostsWithContent.find(p => p.slug === resolvedParams.slug) || mockPostsWithContent[0];
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 main-container rounded-2xl my-8">
        {/* Hero Image */}
        <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-6 flex items-center justify-center">
          <span className="text-zinc-400 dark:text-zinc-600 text-sm sm:text-base">Imagen de {post.title}</span>
        </div>
        
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-zinc-50 mb-4">
            {post.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300">
            {post.summary}
          </p>
        </div>
        
        {/* Title and Metadata */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-medium">
            <span>Por Equipo de Desarrollo</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="prose prose-base sm:prose-lg prose-zinc dark:prose-invert max-w-none sm:max-w-3xl mx-auto mb-12 sm:mb-20 main-container rounded-2xl p-6 sm:p-8">
          <div className="space-y-4 sm:space-y-6">
            {post.content?.map((paragraph: string, index: number) => (
              <p key={index} className="text-zinc-800 dark:text-zinc-200 leading-relaxed text-sm sm:text-base">
                {paragraph}
              </p>
            ))}
            
            {/* Content específico según el post */}
            {post.slug === 'mi-primer-blogpost' && (
              <>
                {/* Recuerdo especial para el post destacado */}
                <div className="bg-gradient-to-r from-blue-600/90 to-indigo-700/90 dark:from-blue-800/80 dark:to-indigo-900/80 p-6 rounded-lg my-6 shadow-lg border border-blue-700/30 transform transition-all hover:scale-[1.01]">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-50 mb-2">
                        Mi Recuerdo Favorito
                      </h4>
                      <p className="text-blue-100/90 leading-relaxed text-sm">
                        Recuerdo como si fuera ayer la primera vez que mi código funcionó sin errores. Era una simple calculadora en JavaScript, pero para mí era como haber construido un rascacielos. Salté de la silla, grité &quot;¡FUNCIONA!&quot; y mi perro me miró como si estuviera loco. Ese momento me enseñó que en programación, las pequeñas victorias son las que nos mantienen vivos. Nunca subestimes el poder de un &quot;Hola Mundo&quot; que finalmente funciona.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Consejo profesional para el post destacado */}
                <div className="bg-gradient-to-r from-amber-800/90 to-amber-900/90 dark:from-amber-900/80 dark:to-amber-950/90 p-6 rounded-lg my-8 shadow-lg border border-amber-700/30 transform transition-all hover:scale-[1.01]">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-amber-50 mb-2">
                        Consejo Profesional
                      </h4>
                      <p className="text-amber-100/90 leading-relaxed text-sm">
                        El método Pomodoro (25 minutos de enfoque seguidos de 5 minutos de descanso) es particularmente efectivo para sesiones de programación, ya que mantiene tu mente fresca y ayuda a evitar el agotamiento. Pero el verdadero secreto es usar esos 5 minutos de descanso para levantarte, moverte y desconectar completamente de la pantalla.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {post.slug === 'desarrollo-web-moderno' && (
              <div className="bg-gradient-to-r from-green-600/90 to-emerald-700/90 dark:from-green-800/80 dark:to-emerald-900/80 p-6 rounded-lg my-8 shadow-lg border border-green-700/30 transform transition-all hover:scale-[1.01]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-green-50 mb-2">
                      Consejo Profesional
                    </h4>
                    <p className="text-green-100/90 leading-relaxed text-sm">
                      No intentes aprender todas las tecnologías a la vez. Elige un stack (por ejemplo, React + Next.js + TypeScript) y domínalo antes de pasar a otra cosa. La profundidad es más valiosa que la amplitud cuando estás empezando. Un desarrollador que domina bien una tecnología es más útil que uno que conoce superficialmente diez.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {post.slug === 'tips-desarrolladores' && (
              <div className="bg-gradient-to-r from-purple-600/90 to-violet-700/90 dark:from-purple-800/80 dark:to-violet-900/80 p-6 rounded-lg my-8 shadow-lg border border-purple-700/30 transform transition-all hover:scale-[1.01]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-purple-50 mb-2">
                      Consejo Profesional
                    </h4>
                    <p className="text-purple-100/90 leading-relaxed text-sm">
                      El debugging es 80% entender el sistema y 20% encontrar el error. Antes de empezar a buscar bugs, asegúrate de entender completamente cómo funciona tu código. Dibuja diagramas, explica tu código en voz alta (rubber duck debugging), y documenta tus suposiciones. Los bugs se vuelven obvios cuando entiendes el sistema.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {post.slug === 'react-nextjs' && (
              <div className="bg-gradient-to-r from-cyan-600/90 to-blue-700/90 dark:from-cyan-800/80 dark:to-blue-900/80 p-6 rounded-lg my-8 shadow-lg border border-cyan-700/30 transform transition-all hover:scale-[1.01]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-cyan-50 mb-2">
                      Consejo Profesional
                    </h4>
                    <p className="text-cyan-100/90 leading-relaxed text-sm">
                      Aprende React Hooks profundamente antes de pasar a Next.js. Muchos desarrolladores saltan directamente a Next.js sin entender los fundamentos de React. Domina useState, useEffect, useContext y los custom hooks. Next.js es simplemente React con superpoderes, pero necesitas entender los poderes base primero.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {post.slug === 'typescript-avanzado' && (
              <div className="bg-gradient-to-r from-indigo-600/90 to-blue-700/90 dark:from-indigo-800/80 dark:to-blue-900/80 p-6 rounded-lg my-8 shadow-lg border border-indigo-700/30 transform transition-all hover:scale-[1.01]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-indigo-50 mb-2">
                      Consejo Profesional
                    </h4>
                    <p className="text-indigo-100/90 leading-relaxed text-sm">
                      Empieza con tipos estrictos desde el principio. Es tentador usar `any` al principio y &quot;después tiparlo&quot;, pero eso nunca sucede. Configura tu tsconfig.json con &quot;strict&quot;: true desde el día uno. El dolor inicial se paga mil veces con bugs evitados y código mantenible. TypeScript es como un seguro: pagas un poco ahora para evitar desastres después.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {post.slug === 'css-grid-flexbox' && (
              <div className="bg-gradient-to-r from-pink-600/90 to-rose-700/90 dark:from-pink-800/80 dark:to-rose-900/80 p-6 rounded-lg my-8 shadow-lg border border-pink-700/30 transform transition-all hover:scale-[1.01]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-pink-50 mb-2">
                      Consejo Profesional
                    </h4>
                    <p className="text-pink-100/90 leading-relaxed text-sm">
                      Piensa en Grid como arquitectura y Flexbox como diseño de interiores. Grid para la estructura general de tu página (header, sidebar, main, footer), Flexbox para los componentes internos (navegación, cards, botones). Usa DevTools para visualizar las cuadrículas y entender qué está haciendo cada propiedad. La práctica hace al maestro, pero la comprensión hace al experto.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {post.slug === 'optimizacion-rendimiento' && (
              <div className="bg-gradient-to-r from-red-600/90 to-orange-700/90 dark:from-red-800/80 dark:to-orange-900/80 p-6 rounded-lg my-8 shadow-lg border border-red-700/30 transform transition-all hover:scale-[1.01]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-red-50 mb-2">
                      Consejo Profesional
                    </h4>
                    <p className="text-red-100/90 leading-relaxed text-sm">
                      Mide antes de optimizar. Usa herramientas como Lighthouse, WebPageTest y Chrome DevTools para identificar los cuellos de botella reales. No optimices ciegamente lo que crees que es lento. Los datos no mienten: una imagen sin optimizar puede causar más daño que 100 líneas de JavaScript ineficiente. El profiling es tu mejor amigo para optimizar de forma inteligente, no a ciegas.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Back to Blog Link */}
        <div className="text-center mb-8 sm:mb-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 hover:scale-105 text-sm sm:text-base w-full sm:w-fit"
          >
            Volver al blog
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
