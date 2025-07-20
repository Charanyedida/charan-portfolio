import { useEffect } from 'react'
import gsap from 'gsap'

const Loader = () => {
  useEffect(() => {
    const loader = document.querySelector('.loader')
    const loaderText = document.querySelector('.loader-text')
    const progress = document.querySelector('.progress')

    if (loader && loaderText && progress) {
      // Make loader text visible first
      gsap.to(loaderText, { opacity: 1, duration: 0.5, ease: 'power2.out' })

      // Simulate loading progress
      gsap.to(progress, {
        width: '100%',
        duration: 2,
        ease: 'power4.out',
        onComplete: () => {
          gsap.to(loader, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => loader.remove()
          })
        }
      })
    }
  }, [])

  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-text">Charan Yedida</div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
