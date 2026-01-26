import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from '@/app/about/page'

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

describe('About Page', () => {
  it('renders main sections correctly', () => {
    render(<About />)
    
    expect(screen.getByText('About me')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Talks')).toBeInTheDocument()
  })

  it('displays project cards', () => {
    render(<About />)
    
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getAllByText('E-commerce Platform')).toHaveLength(2)
  })

  it('displays talk cards', () => {
    render(<About />)
    
    expect(screen.getByText('Talks')).toBeInTheDocument()
  })

  it('has contact section', () => {
    render(<About />)
    
    expect(screen.getByText('Ver Blog')).toBeInTheDocument()
    expect(screen.getByText(/Full Stack/)).toBeInTheDocument()
  })

  it('renders mock components', () => {
    render(<About />)
    
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
