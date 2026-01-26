import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '@/components/Footer'

describe('Footer Component', () => {
  it('renders copyright text correctly', () => {
    render(<Footer />)
    
    const copyright = screen.getByText(/© 2024 Mi Sitio. Todos los derechos reservados./i)
    expect(copyright).toBeInTheDocument()
  })

  it('renders social media links correctly', () => {
    render(<Footer />)
    
    expect(screen.getByText('Twitter/X')).toBeInTheDocument()
    expect(screen.getByText('TikTok')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
  })

  it('social links have correct hrefs', () => {
    render(<Footer />)
    
    const twitterLink = screen.getByText('Twitter/X')
    const tiktokLink = screen.getByText('TikTok')
    const linkedinLink = screen.getByText('LinkedIn')
    const githubLink = screen.getByText('GitHub')
    
    expect(twitterLink.closest('a')).toHaveAttribute('href', 'https://twitter.com')
    expect(tiktokLink.closest('a')).toHaveAttribute('href', 'https://tiktok.com')
    expect(linkedinLink.closest('a')).toHaveAttribute('href', 'https://linkedin.com')
    expect(githubLink.closest('a')).toHaveAttribute('href', 'https://github.com')
  })

  it('social links open in new tab', () => {
    render(<Footer />)
    
    const socialLinks = screen.getAllByRole('link')
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('has correct footer structure', () => {
    render(<Footer />)
    
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('w-full', 'border-t', 'bg-white')
  })
})
