import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  slug: string;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mi primer blogpost",
    summary: "El arte de aprender a programar sin morir en el intento: una historia real de frustración y superación.",
    slug: "mi-primer-blogpost"
  },
  {
    id: 2,
    title: "Desarrollo web moderno",
    summary: "Explorando las últimas tendencias en desarrollo web y las mejores prácticas.",
    slug: "desarrollo-web-moderno"
  },
  {
    id: 3,
    title: "Tips para desarrolladores",
    summary: "Consejos útiles para mejorar tu productividad como desarrollador de software.",
    slug: "tips-desarrolladores"
  },
  {
    id: 4,
    title: "React y Next.js",
    summary: "Cómo construir aplicaciones modernas con React y el framework Next.js.",
    slug: "react-nextjs"
  }
];

export default function Home() {
  const featuredPost = mockPosts[0];
  const otherPosts = mockPosts.slice(1, 4);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-12 main-container rounded-2xl my-8">
        {/* About Me Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
              <span className="text-zinc-500 dark:text-zinc-400">Imagen placeholder</span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black dark:text-zinc-50">
                About me
              </h2>
              
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>
                  Soy un desarrollador apasionado por crear experiencias web excepcionales. 
                  Me especializo en tecnologías modernas como React, Next.js y TypeScript.
                </p>
                <p>
                  Con varios años de experiencia en el desarrollo de aplicaciones web, 
                  me enfoco en escribir código limpio, mantenible y escalable.
                </p>
                <p>
                  Me encanta aprender nuevas tecnologías y compartir conocimientos con la comunidad. 
                  Siempre buscando nuevos desafíos y oportunidades para crecer profesionalmente.
                </p>
              </div>
              
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
              >
                Ver más
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-zinc-50 mb-8">
            Blog
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Post */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="mb-3">
                <span className="inline-block px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded-full">
                  Destacado
                </span>
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-3">
                {featuredPost.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {featuredPost.summary}
              </p>
              <Link 
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                Leer más →
              </Link>
            </div>
            
            {/* Other Posts List */}
            <div className="space-y-4">
              {otherPosts.map((post) => (
                <div 
                  key={post.id}
                  className="bg-white dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-800 rounded flex-shrink-0 flex items-center justify-center">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Img</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-black dark:text-zinc-50 mb-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2 line-clamp-2">
                        {post.summary}
                      </p>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                      >
                        Leer →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
