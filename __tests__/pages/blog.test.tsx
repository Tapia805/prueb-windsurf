import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Blog from '@/app/blog/page'

// Mock de componentes
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

describe('Blog Page', () => {
  it('renders featured post section', () => {
    render(<Blog />)
    
    expect(screen.getByText('Destacado')).toBeInTheDocument()
    expect(screen.getByText(/Mi primer/)).toBeInTheDocument()
  })

  it('displays all blog posts grid', () => {
    render(<Blog />)
    
    // Verificar que hay posts en el grid
    const posts = screen.getAllByText(/Leer más →/)
    expect(posts.length).toBeGreaterThan(0)
  })

  it('has correct navigation structure', () => {
    render(<Blog />)
    
    expect(screen.getByText('Más artículos')).toBeInTheDocument()
  })

  it('displays correct number of posts', () => {
    render(<Blog />)
    
    // Hay 7 posts en total, todos tienen "Leer más →"
    const postTitles = screen.getAllByText(/Leer más →/)
    expect(postTitles.length).toBe(7)
  })

  it('renders mock components', () => {
    render(<Blog />)
    
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
