import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BlogPost from '@/app/blog/[slug]/page'

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

describe('Blog Post Page', () => {
  it('renders post content correctly', async () => {
    const mockParams = Promise.resolve({ slug: 'mi-primer-blogpost' })
    render(await BlogPost({ params: mockParams }))
    
    expect(screen.getByText('Mi primer blogpost')).toBeInTheDocument()
    expect(screen.getByText(/Todo comenzó con un 'Hola Mundo'/)).toBeInTheDocument()
  })

  it('displays post metadata', async () => {
    const mockParams = Promise.resolve({ slug: 'mi-primer-blogpost' })
    render(await BlogPost({ params: mockParams }))
    
    expect(screen.getByText('Por Equipo de Desarrollo')).toBeInTheDocument()
    expect(screen.getByText('22 de Enero, 2025')).toBeInTheDocument()
    expect(screen.getByText('8 min de lectura')).toBeInTheDocument()
  })

  it('has back to blog navigation', async () => {
    const mockParams = Promise.resolve({ slug: 'mi-primer-blogpost' })
    render(await BlogPost({ params: mockParams }))
    
    const backLink = screen.getByText('Volver al blog')
    expect(backLink.closest('a')).toHaveAttribute('href', '/blog')
  })

  it('renders mock components', async () => {
    const mockParams = Promise.resolve({ slug: 'mi-primer-blogpost' })
    render(await BlogPost({ params: mockParams }))
    
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('displays special content for featured post', async () => {
    const mockParams = Promise.resolve({ slug: 'mi-primer-blogpost' })
    render(await BlogPost({ params: mockParams }))
    
    // Verificar que aparece el contenido especial
    expect(screen.getByText('Mi Recuerdo Favorito')).toBeInTheDocument()
    expect(screen.getByText('Consejo Profesional')).toBeInTheDocument()
  })
})
