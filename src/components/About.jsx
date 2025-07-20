import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useEffect(() => {
    // About Section Animations
    ScrollTrigger.create({
      trigger: '.about',
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.from('.about-content', {
          x: -100,
          opacity: 0.5,
          duration: 1,
          ease: 'power3.out'
        })
        gsap.from('.about-image', {
          x: 100,
          opacity: 0.5,
          duration: 1,
          ease: 'power3.out'
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I'm a Computer Science student with a passion for creating digital experiences 
            that make a difference. My journey in technology is driven by curiosity and a 
            desire to solve complex problems with elegant solutions.
          </p>
          <p className="about-text">
            When I'm not writing code or training models, you'll find me behind the camera, 
            exploring the world through photography. I believe in the power of technology 
            and art to transform how we see and interact with the world.
          </p>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
        <div className="about-image">
          <img src="/assets/images/profile.jpg" alt="Charan" />
        </div>
      </div>
    </section>
  )
}

export default About
