"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

// Mock data para projects
const mockProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Tienda online con carrito de compras y pasarela de pago",
    image: "project1"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación para gestionar tareas y proyectos en equipo",
    image: "project2"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard en tiempo real con pronósticos y mapas",
    image: "project3"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Herramienta de análisis para redes sociales",
    image: "project4"
  }
];

// Mock data para talks con historias
const mockTalks = [
  {
    id: 1,
    title: "TypeScript en el mundo real",
    summary: "Cómo implementar TypeScript en proyectos grandes y evitar errores comunes",
    image: "talk1",
    story: [
      "Esta charla nació de mi propia frustración. Estaba trabajando en un proyecto grande con más de 50 desarrolladores, y los errores de runtime estaban matando nuestra productividad. Cada deploy era como jugar a la lotería.",
      "Comenzamos a migrar a TypeScript, pero lo hicimos mal. Solo usábamos tipos básicos, any por doquier, y no aprovechábamos el poder real del sistema de tipos. Fue como comprar un Ferrari solo para ir al supermercado.",
      "La revelación llegó cuando un bug costó a la empresa $50,000. Un simple error de tipeo que TypeScript podría haber evitado. Ese día me di cuenta de que no era opcional, era una necesidad.",
      "En esta charla, comparto todo lo que aprendí: desde configurar un proyecto TypeScript desde cero hasta patrones avanzados que salvamos en producción. Hablo de tipos condicionales, genéricos, y cómo crear un sistema de tipos que trabaje para ti, no contra ti.",
      "La parte favorita de la audiencia siempre es cuando muestro errores reales que cometimos y cómo TypeScript los evitó. Es como ver fantasmas que ya no pueden asustarte."
    ]
  },
  {
    id: 2,
    title: "CSS Grid vs Flexbox",
    summary: "Cuándo usar cada herramienta y dominar el layout moderno",
    image: "talk2",
    story: [
      "Confieso que durante años odié CSS. Cada layout era una batalla, cada navegador un enemigo. Usaba floats, position absolute, hacks horribles. Mi código CSS parecía una receta de brujería.",
      "Llegó Flexbox y fue como ver la luz. De repente podía centrar cosas sin trucos raros. Pero luego apareció Grid y me confundí de nuevo. ¿Eran competidores? ¿Debía elegir uno?",
      "La respuesta llegó cuando trabajé en un proyecto complejo de dashboard. Necesitaba tanto control de componentes como control de layout general. Intenté usar solo Grid para todo, fue un desastre. Intenté usar solo Flexbox, otro desastre.",
      "La epifanía fue entender que son herramientas diferentes, no enemigos. Como un carpintero con su martillo y su sierra. No usas una sierra para clavar un clavo, ni un martillo para cortar madera.",
      "En esta charla, muestro ejemplos reales de cuándo usar cada uno. Construyo un layout completo usando ambas herramientas en armonía. La gente siempre se sorprende de lo simple que es cuando entiendes el propósito de cada herramienta."
    ]
  }
];

export default function About() {
  const [expandedTalk, setExpandedTalk] = useState<number | null>(null);

  const toggleTalk = (talkId: number) => {
    setExpandedTalk(expandedTalk === talkId ? null : talkId);
  };
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* About Me Section */}
        <section className="mb-16 sm:mb-20">
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-6 sm:p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 main-container">
            <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-zinc-50 mb-6 sm:mb-8">About me</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Left: Profile Image */}
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-zinc-200 dark:bg-zinc-800 rounded-2xl flex items-center justify-center">
                  <span className="text-zinc-400 dark:text-zinc-600 text-sm sm:text-base">Foto de perfil</span>
                </div>
              </div>
              
              {/* Right: Text and Button */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
                  Desarrollador Full Stack apasionado por crear experiencias digitales
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                  Con más de 5 años de experiencia en desarrollo web, me especializo en React, Next.js y TypeScript. 
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                  Me apasiona resolver problemas complejos y crear aplicaciones que no solo funcionen bien, sino que brinden una experiencia excepcional a los usuarios.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  Cuando no estoy programando, disfruto compartir conocimiento a través de mi blog y contribuir a proyectos open source.
                </p>
                <Link 
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Ver Blog
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-zinc-50 mb-6 sm:mb-8">Projects</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {mockProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  {/* Project Image */}
                  <div className="w-full h-32 sm:h-40 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-zinc-400 dark:text-zinc-600 text-xs sm:text-sm">{project.title}</span>
                  </div>
                  
                  {/* Project Info */}
                  <h3 className="font-semibold text-black dark:text-zinc-50 mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors text-sm sm:text-base">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Talks Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-zinc-50 mb-6 sm:mb-8">Talks</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {mockTalks.map((talk) => (
              <div key={talk.id} className="group cursor-pointer">
                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Talk Thumbnail */}
                    <div className="w-full sm:w-24 h-24 sm:h-24 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-zinc-400 dark:text-zinc-600 text-xs">Charla</span>
                    </div>
                    
                    {/* Talk Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-black dark:text-zinc-50 mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors text-sm sm:text-base">
                        {talk.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-3 text-xs sm:text-sm line-clamp-2">
                        {talk.summary}
                      </p>
                      <button
                        onClick={() => toggleTalk(talk.id)}
                        className="inline-flex items-center text-xs sm:text-sm text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors font-medium"
                      >
                        {expandedTalk === talk.id ? 'Ocultar' : 'Ver charla'} {expandedTalk === talk.id ? '↑' : '→'}
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Expanded Story Box */}
                {expandedTalk === talk.id && (
                  <div className="mt-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-amber-200 dark:border-amber-800 shadow-lg transform transition-all duration-500 ease-in-out">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-amber-800 dark:text-amber-200 mb-1">
                          Historia detrás de la charla
                        </h4>
                        <p className="text-sm text-amber-600 dark:text-amber-400">
                          {talk.title}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {talk.story.map((paragraph, index) => (
                        <p key={index} className="text-amber-800 dark:text-amber-100 leading-relaxed text-sm">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => toggleTalk(talk.id)}
                      className="mt-4 text-xs sm:text-sm text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 transition-colors font-medium flex items-center gap-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Ocultar historia
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
      </main>
      
      <Footer />
    </div>
  );
}
