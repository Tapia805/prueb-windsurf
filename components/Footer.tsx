export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            © 2025 Mi Portfolio. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 text-sm transition-colors"
            >
              Twitter/X
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 text-sm transition-colors"
            >
              TikTok
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 text-sm transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 text-sm transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
