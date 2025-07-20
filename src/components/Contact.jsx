import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Linkedin, Github, Smartphone,FileText } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  useEffect(() => {
    // Contact Section Animation
    ScrollTrigger.create({
      trigger: '.contact-container',
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.from('.contact-container', {
          y: 50,
          opacity: 0.5,
          duration: 0.8,
          ease: 'power3.out'
        })
      }
    })

    // Contact Form
    const contactForm = document.querySelector('form')
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault()
        gsap.to(contactForm, {
          opacity: 0.5,
          duration: 0.3,
          onComplete: () => {
            alert('Message sent successfully!')
            contactForm.reset()
            gsap.to(contactForm, { opacity: 1, duration: 0.3 })
          }
        })
      })
    }

    // Back to Top
    const backToTop = document.createElement('div')
    backToTop.className = 'back-to-top'
    backToTop.innerHTML = '↑'
    document.body.appendChild(backToTop)

    ScrollTrigger.create({
      trigger: 'footer',
      start: 'top bottom',
      onEnter: () => gsap.to(backToTop, { opacity: 1, duration: 0.3 }),
      onLeaveBack: () => gsap.to(backToTop, { opacity: 0, duration: 0.3 })
    })

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      if (document.body.contains(backToTop)) {
        document.body.removeChild(backToTop)
      }
    }
  }, [])

  return (
    <>
      <section id="contact" className="contact">
        <div className="contact-container">
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-text">
            Interested in working together or just want to say hello? Feel free to reach out.
          </p>
          <a href="mailto:online936936@gmail.com" className=" contact-email contact-text">
            online936936@gmail.com
          </a>
          <div className="social-links">
            <a href="mailto:online936936@gmail.com" className="social-link"><Mail size={20} /></a>
            <a href="https://linkedin.com/in/charan-yedida"
               target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={20} /></a>
            <a href="https://github.com/Charanyedida"
              target="_blank" rel="noopener noreferrer"  className="social-link"><Github size={20} /></a>
            <a href="tel:+917799192836" className="social-link"><Smartphone size={20} /></a>
            <a
            href="https://drive.google.com/file/d/1aVbPv6ceQPPtxbJB-moQN0-OUTU22qKO/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link resume-icon"
          >
            <FileText size={20} />
            <span className="resume-tooltip">Resume</span>
          </a>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy;  Charan. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Contact
