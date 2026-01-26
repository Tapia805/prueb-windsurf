interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div className={`
      bg-white dark:bg-zinc-900 
      rounded-lg 
      border border-zinc-200 dark:border-zinc-800
      ${hover ? 'hover:shadow-lg transition-all duration-300 hover:scale-105' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}
