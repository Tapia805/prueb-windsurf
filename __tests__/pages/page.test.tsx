import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/app/page'

// Mock de componentes para aislar el test
jest.mock('@/components/Header', () => {
  return function MockHeader() {
    return <div data-testid="header">HeaderMock</div>
  }
})

jest.mock('@/components/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">FooterMock</div>
  }
})

describe('Home Page', () => {
  it('renders main sections correctly', () => {
    render(<Home />)
    
    // Verificar que las secciones principales existen
    expect(screen.getByText('About me')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('displays featured blog post', () => {
    render(<Home />)
    
    expect(screen.getByText('Mi primer blogpost')).toBeInTheDocument()
    expect(screen.getByText(/El arte de aprender a programar/)).toBeInTheDocument()
  })

  it('has working navigation links', () => {
    render(<Home />)
    
    const blogLink = screen.getByText('Leer más →')
    expect(blogLink.closest('a')).toHaveAttribute('href', '/blog/mi-primer-blogpost')
  })

  it('renders mock components', () => {
    render(<Home />)
    
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
