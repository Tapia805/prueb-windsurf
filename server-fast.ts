import { mockPosts } from './lib/posts';

// Servidor Bun.js optimizado
const server = Bun.serve({
  port: 3001,
  routes: {
    // Endpoint GET / - Página principal del servidor
    "/": {
      GET: () => {
        return new Response(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Servidor Bun.js API</title>
              <style>
                body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
                .endpoint { background: #f5f5f5; padding: 10px; margin: 10px 0; border-radius: 5px; }
                code { background: #e8e8e8; padding: 2px 4px; border-radius: 3px; }
              </style>
            </head>
            <body>
              <h1>🍔 Servidor Bun.js API</h1>
              <p>API de posts funcionando correctamente</p>
              
              <h2>Endpoints disponibles:</h2>
              <div class="endpoint">
                <strong>GET</strong> <code>/posts</code> - Todos los posts
              </div>
              <div class="endpoint">
                <strong>GET</strong> <code>/posts/:id</code> - Post por ID
              </div>
              <div class="endpoint">
                <strong>GET</strong> <code>/posts/slug/:slug</code> - Post por slug
              </div>
              
              <h2>Ejemplos:</h2>
              <ul>
                <li><a href="/posts">Ver todos los posts</a></li>
                <li><a href="/posts/1">Ver post con ID 1</a></li>
                <li><a href="/posts/slug/mi-primer-blogpost">Ver post por slug</a></li>
              </ul>
            </body>
          </html>
        `, {
          headers: { "Content-Type": "text/html" }
        });
      }
    },
    
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
    "/posts/:id": (req: any) => {
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
    "/posts/slug/:slug": (req: any) => {
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
  
  fetch(req: any) {
    return new Response("Not Found", { status: 404 });
  }
});

console.log(`🚀 Servidor Bun.js optimizado corriendo en: ${server.url}`);
console.log(`📝 Endpoint disponible: ${server.url}posts`);
console.log(`📝 Endpoint individual: ${server.url}posts/:id`);
console.log(`📝 Endpoint por slug: ${server.url}posts/slug/:slug`);
