// Servicio para consumir la API de posts
const API_BASE_URL = 'http://localhost:3001';

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  slug: string;
  date: string;
  readTime: string;
  content?: string[];
}

export interface ApiResponse {
  success: boolean;
  data: BlogPost[];
  total: number;
}

export interface PostResponse {
  success: boolean;
  data: BlogPost;
}

// Obtener todos los posts
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    const data: ApiResponse = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      throw new Error('Error al obtener los posts');
    }
  } catch (error) {
    console.error('Error en getAllPosts:', error);
    // Fallback a datos mock si la API no está disponible
    const { mockPosts } = await import('./posts');
    return mockPosts;
  }
}

// Obtener un post por ID
export async function getPostById(id: number): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);
    const data: PostResponse = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error en getPostById:', error);
    // Fallback a datos mock si la API no está disponible
    const { mockPosts } = await import('./posts');
    return mockPosts.find(post => post.id === id) || null;
  }
}

// Obtener un post por slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/slug/${slug}`);
    const data: PostResponse = await response.json();
    
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error en getPostBySlug:', error);
    // Fallback a datos mock si la API no está disponible
    const { mockPostsWithContent } = await import('./posts');
    return mockPostsWithContent.find(post => post.slug === slug) || null;
  }
}
