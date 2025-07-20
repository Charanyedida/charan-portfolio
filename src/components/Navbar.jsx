import { useEffect } from 'react'
import gsap from 'gsap'

const Navbar = () => {
  useEffect(() => {
    // Navigation scroll effect
    const handleScroll = () => {
      const nav = document.querySelector('.nav')
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add('scrolled')
        } else {
          nav.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button')
    const mobileMenu = document.querySelector('.mobile-menu')
    const mobileMenuClose = document.querySelector('.mobile-menu-close')

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        gsap.fromTo(mobileMenu, 
          { y: '100%', opacity: 0 }, 
          { y: '0%', opacity: 1, duration: 0.6, ease: 'power3.out' }
        )
      })
    }

    if (mobileMenuClose && mobileMenu) {
      mobileMenuClose.addEventListener('click', () => {
        gsap.to(mobileMenu, { y: '100%', opacity: 0, duration: 0.4, ease: 'power2.in' })
      })
    }

    // Smooth scroll for navigation links
    const handleNavClick = (e) => {
      e.preventDefault()
      const targetId = e.target.getAttribute('href')
      
      if (targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const navHeight = document.querySelector('.nav').offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight
        window.scrollTo({ top: targetPosition, behavior: 'smooth' })
      }
    }

    // Add event listeners to nav links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link')
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick)
      })
    }
  }, [])

  return (
    <nav className="nav">
      <a href="#" className="nav-logo">CY</a>
      <div className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#photography" className="nav-link">Photography</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
      <button className="mobile-menu-button">☰</button>
      
      <div className="mobile-menu">
        <button className="mobile-menu-close">×</button>
        <div className="mobile-nav-links">
          <a href="#about" className="mobile-nav-link">About</a>
          <a href="#skills" className="mobile-nav-link">Skills</a>
          <a href="#projects" className="mobile-nav-link">Projects</a>
          <a href="#photography" className="mobile-nav-link">Photography</a>
          <a href="#contact" className="mobile-nav-link">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
