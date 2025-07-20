import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HorizontalScroll = () => {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const scrollContainer = containerRef.current

    if (!section || !scrollContainer) return

    // Clear existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    const items = scrollContainer.querySelectorAll('.scroll-item')
    const totalPanels = items.length

    // Calculate the actual scrollable distance
    const containerWidth = scrollContainer.scrollWidth
    const viewportWidth = window.innerWidth
    const maxScroll = containerWidth - viewportWidth

    // Only create animation if there's content to scroll
    if (maxScroll > 0) {
      gsap.to(scrollContainer, {
        x: -maxScroll, // Use actual scrollable distance instead of xPercent
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${maxScroll}`, // Match the actual content width
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => {
            // Optional: Add bounds checking
            const progress = self.progress
            const currentX = -maxScroll * progress
            
            // Ensure we don't scroll beyond content
            if (currentX <= -maxScroll) {
              gsap.set(scrollContainer, { x: -maxScroll })
            }
          }
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="section horizontal-scroll" ref={sectionRef}>
      <div className="scroll-container" ref={containerRef}>
        <div className="scroll-item">
          <div className="scroll-content">
            <h3 className="scroll-title">Web Development</h3>
            <p className="scroll-text">
              Creating responsive, interactive experiences with modern web technologies.
            </p>
          </div>
        </div>
        <div className="scroll-item">
          <div className="scroll-content">
            <h3 className="scroll-title">Machine Learning</h3>
            <p className="scroll-text">
              Building intelligent systems that learn and adapt to solve complex problems.
            </p>
          </div>
        </div>
        <div className="scroll-item">
          <div className="scroll-content">
            <h3 className="scroll-title">Photography</h3>
            <p className="scroll-text">
              Capturing moments and telling stories through the lens of a camera.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HorizontalScroll
