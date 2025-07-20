import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const SkillIcons = () => {
  const scrollRef = useRef(null)

  // Your skill icons
  const techIcons = [
  // Programming Languages
  '/assets/icons/c.png',
  '/assets/icons/c++.png',
  '/assets/icons/java.png',
  '/assets/icons/python.png',
  '/assets/icons/go.png',
  '/assets/icons/js.png',

  // Frontend Development
  '/assets/icons/html.png',
  '/assets/icons/css.png',
  '/assets/icons/bootstrap.png',
  '/assets/icons/tailwind.png',
  '/assets/icons/react.png',
  '/assets/icons/gsap.png',
  '/assets/icons/figma.png',
  '/assets/icons/android.png',

  // Backend & DevOps
  '/assets/icons/node.png',
  '/assets/icons/git.png',
  '/assets/icons/aws.png',

  // Databases
  '/assets/icons/mongo.png',
  '/assets/icons/mysql.png',
  '/assets/icons/sqlite.png',

  // AI/ML & Computer Vision
  '/assets/icons/tensorflow.png',
  '/assets/icons/pytorch.png',
  '/assets/icons/opencv.png',
]


  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    // Duplicate icons for seamless loop
    const icons = container.children
    const iconsArray = Array.from(icons)
    iconsArray.forEach(icon => {
      const clone = icon.cloneNode(true)
      container.appendChild(clone)
    })

    // Continuous scroll animation
    const scrollWidth = container.scrollWidth / 2

    gsap.set(container, { x: 0 })
    
    const tween = gsap.to(container, {
      x: -scrollWidth,
      duration: 25,
      ease: 'none',
      repeat: -1
    })

    // Pause on hover
    container.addEventListener('mouseenter', () => tween.pause())
    container.addEventListener('mouseleave', () => tween.resume())

    return () => tween.kill()
  }, [])

  return (
    <div className="skill-icons-bar">
      <div className="skill-icons-track" ref={scrollRef}>
        {techIcons.map((icon, index) => (
          <div key={index} className="skill-icon-wrapper">
            <img src={icon} alt="" className="skill-icon" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillIcons
