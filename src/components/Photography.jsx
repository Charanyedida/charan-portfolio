import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Photography = () => {
  useEffect(() => {
    // Photography Title Animation
    ScrollTrigger.create({
      trigger: '.photography-title',
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.from('.photography-title', {
          y: 50,
          opacity: 0.5,
          duration: 0.8,
          ease: 'power3.out'
        })
      }
    })

    // Gallery Items Animation
    gsap.utils.toArray('.gallery-item').forEach((item, i) => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.from(item, {
            scale: 0.8,
            opacity: 0.5,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'back.out(1.7)'
          })
        }
      })
    })

    // Photography Horizontal Slider Implementation
    const slider = document.querySelector('.photo-slider')
    if (slider) {
      const sliderTrack = slider.querySelector('.slider-track')
      const sliderItems = slider.querySelectorAll('.slider-item')
      
      let isDown = false
      let startX
      let scrollLeft

      // Initial animation
      gsap.to(sliderTrack, {
        x: -100,
        duration: 1.5,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(sliderTrack, {
            x: 0,
            duration: 1.5,
            ease: "power1.inOut"
          })
        }
      })

      // Mouse events for dragging
      slider.addEventListener('mousedown', (e) => {
        isDown = true
        slider.classList.add('active')
        startX = e.pageX - slider.offsetLeft
        scrollLeft = slider.scrollLeft
      })

      slider.addEventListener('mouseleave', () => {
        isDown = false
        slider.classList.remove('active')
      })

      slider.addEventListener('mouseup', () => {
        isDown = false
        slider.classList.remove('active')
      })

      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const walk = (x - startX) * 2
        slider.scrollLeft = scrollLeft - walk
      })

      // Click events for images
      sliderItems.forEach(item => {
        item.addEventListener('click', () => {
          sliderItems.forEach(i => i.classList.remove('selected'))
          item.classList.add('selected')
          
          const imgSrc = item.querySelector('img').src
          const featuredImg = document.querySelector('.featured-image img')
          if (featuredImg) {
            gsap.to(featuredImg, {
              opacity: 0,
              duration: 0.3,
              onComplete: () => {
                featuredImg.src = imgSrc
                gsap.to(featuredImg, { opacity: 1, duration: 0.3 })
              }
            })
          }
        })
      })

      // Set first image as selected
      if (sliderItems.length > 0) {
        sliderItems[0].classList.add('selected')
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section id="photography"className="photography">
      <div className="photography-container">
        <h2 className="photography-title">Photography</h2>
        
        <div className="featured-image">
          <img src="/assets/images/gallery5.jpg" alt="Featured" />
        </div>

        <div className="photo-slider">
          <div className="slider-track">
            <div className="slider-item selected">
              <img src="/assets/images/gallery1.jpg" alt="gallery 1" />
            </div>
            <div className="slider-item">
              <img src="/assets/images/gallery2.jpg" alt="gallery 2" />
            </div>
            <div className="slider-item">
              <img src="/assets/images/gallery3.jpg" alt="gallery 3" />
            </div>
            <div className="slider-item">
              <img src="/assets/images/gallery4.jpg" alt="gallery 4" />
            </div>
            <div className="slider-item">
              <img src="/assets/images/gallery5.jpg" alt="gallery 5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Photography
