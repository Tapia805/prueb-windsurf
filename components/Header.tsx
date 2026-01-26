import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-bold text-black dark:text-zinc-50"
          >
            MiLogo
          </Link>
          
          <ul className="flex items-center space-x-4">
            <li>
              <Link 
                href="/" 
                className="inline-flex items-center justify-center px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm font-semibold"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className="inline-flex items-center justify-center px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm font-semibold"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
