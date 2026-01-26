import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '@/components/Header'

// Mock de Next.js Link
jest.mock('next/link', () => {
  return function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>
  }
})

describe('Header Component', () => {
  it('renders navigation links correctly', () => {
    render(<Header />)
    
    // Verificar que los enlaces principales existen
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('has correct navigation hrefs', () => {
    render(<Header />)
    
    const homeLink = screen.getByText('Home')
    const aboutLink = screen.getByText('About')
    const blogLink = screen.getByText('Blog')
    
    expect(homeLink.closest('a')).toHaveAttribute('href', '/')
    expect(aboutLink.closest('a')).toHaveAttribute('href', '/about')
    expect(blogLink.closest('a')).toHaveAttribute('href', '/blog')
  })

  it('renders logo correctly', () => {
    render(<Header />)
    
    const logo = screen.getByText('MiLogo')
    expect(logo).toBeInTheDocument()
    expect(logo.closest('a')).toHaveAttribute('href', '/')
  })

  it('has correct styling classes', () => {
    render(<Header />)
    
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('w-full', 'border-b', 'bg-white')
  })
})
