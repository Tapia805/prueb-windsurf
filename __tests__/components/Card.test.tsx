import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '@/components/Card'

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>
    )
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies default styling classes', () => {
    render(<Card><div>Content</div></Card>)
    
    const card = screen.getByText('Content').parentElement
    expect(card).toHaveClass('bg-white', 'dark:bg-zinc-900', 'rounded-lg')
  })

  it('applies hover effects when enabled', () => {
    render(<Card hover><div>Content</div></Card>)
    
    const card = screen.getByText('Content').parentElement
    expect(card).toHaveClass('hover:shadow-lg', 'transition-all', 'hover:scale-105')
  })

  it('does not apply hover effects when disabled', () => {
    render(<Card hover={false}><div>Content</div></Card>)
    
    const card = screen.getByText('Content').parentElement
    expect(card).not.toHaveClass('hover:shadow-lg', 'transition-all', 'hover:scale-105')
  })

  it('applies custom className', () => {
    render(<Card className="custom-class"><div>Content</div></Card>)
    
    const card = screen.getByText('Content').parentElement
    expect(card).toHaveClass('custom-class')
  })

  it('has border classes by default', () => {
    render(<Card><div>Content</div></Card>)
    
    const card = screen.getByText('Content').parentElement
    expect(card).toHaveClass('border', 'border-zinc-200', 'dark:border-zinc-800')
  })
})
