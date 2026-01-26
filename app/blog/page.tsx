import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllPosts, type BlogPost } from "@/lib/api";

export default async function Blog() {
  const posts = await getAllPosts();
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-12 main-container rounded-2xl my-8">
        {/* Hero con post destacado */}
        <section className="mb-12">
          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Imagen destacada */}
              <div className="aspect-video lg:aspect-[4/3] bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-500 dark:text-zinc-400">Imagen destacada</span>
              </div>
              
              {/* Contenido del post destacado */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded-full">
                    Destacado
                  </span>
                </div>
                
                <h1 className="text-2xl lg:text-3xl font-bold text-black dark:text-zinc-50 mb-3">
                  {featuredPost.title}
                </h1>
                
                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  {featuredPost.summary}
                </p>
                
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg w-fit text-sm"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Título de más artículos */}
        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-black dark:text-zinc-50">
            Más artículos
          </h2>
        </section>

        {/* Grid de artículos más */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {otherPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Imagen del artículo */}
              <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Img</span>
              </div>
              
              {/* Contenido del artículo */}
              <div className="p-4">
                <h3 className="font-semibold text-black dark:text-zinc-50 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-3">
                  {post.summary}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                >
                  Leer más →
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
