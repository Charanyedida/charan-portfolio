import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  useEffect(() => {
    // Skills Title Animation
    ScrollTrigger.create({
      trigger: '.skills-title',
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.from('.skills-title', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        })
      }
    })

    // Dramatic Stacked Cards Animation
    const skillCards = gsap.utils.toArray('.skill-card')
    
    // Set initial stacked position - all cards in center
    gsap.set(skillCards, {
      x: 0,
      y: (i) => i * 5, // Very slight offset
      scale: (i) => 1 - i * 0.02,
      rotation: (i) => (Math.random() - 0.5) * 10, // Random slight rotation
      transformOrigin: 'center center',
      opacity: 0.9
    })

    // Create timeline for card spreading animation
    ScrollTrigger.create({
      trigger: '.skills-grid',
      start: 'top center+=100',
      onEnter: () => {
        const tl = gsap.timeline()
        
        // First, lift all cards slightly
        tl.to(skillCards, {
          y: (i) => i * 5 - 20,
          duration: 0.5,
          ease: 'power2.out'
        })
        
        // Then spread them out to their final positions
        .to(skillCards, {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.5,
          stagger: {
            amount: 1,
            from: "center",
            ease: "back.out(1.7)"
          },
          ease: 'elastic.out(1, 0.8)'
        }, "-=0.3")
      },
      once: true
    })

    // Card hover effects
    skillCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -15,
          scale: 1.05,
          rotation: (Math.random() - 0.5) * 5,
          duration: 0.4,
          ease: 'power2.out'
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: 'power2.out'
        })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section id="skills" className="section skills">
      <div className="skills-container">
        <h2 className="skills-title">My Expertise</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">💻</div>
            <h3 className="skill-name">Web Development</h3>
            <p className="skill-description">
              Building responsive, user-friendly websites with modern frameworks like React, Next.js and Node.js.
            </p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">⚙️</div>
            <h3 className="skill-name">Front-end Development</h3>
            <p className="skill-description">
              Creating intuitive user interfaces with HTML, CSS, JavaScript and modern frameworks.
            </p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🔍</div>
            <h3 className="skill-name">Back-end Development</h3>
            <p className="skill-description">
              Developing robust server-side applications and APIs to power web applications.
            </p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🤖</div>
            <h3 className="skill-name">Machine Learning</h3>
            <p className="skill-description">
              Building and training models using TensorFlow, PyTorch, and scikit-learn to solve complex problems.
            </p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🧠</div>
            <h3 className="skill-name">Deep Learning</h3>
            <p className="skill-description">
              Designing neural networks for image recognition, NLP, and other advanced applications.
            </p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">📷</div>
            <h3 className="skill-name">Photography</h3>
            <p className="skill-description">
              Capturing moments with an eye for composition, lighting, and storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
