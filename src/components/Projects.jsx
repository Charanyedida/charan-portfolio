import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  // useEffect(() => {
  //   // Projects Title Animation
  //   ScrollTrigger.create({
  //     trigger: '.projects-title',
  //     start: 'top 80%',
  //     once: true,
  //     onEnter: () => {
  //       gsap.from('.projects-title', {
  //         y: 50,
  //         opacity: 0,
  //         duration: 1,
  //         ease: 'power3.out'
  //       })
  //     }
  //   })

  //   // Category Headers Animation
  //   gsap.utils.toArray('.category-header').forEach((header, i) => {
  //     ScrollTrigger.create({
  //       trigger: header,
  //       start: 'top 85%',
  //       once: true,
  //       onEnter: () => {
  //         gsap.from(header, {
  //           x: -100,
  //           opacity: 0,
  //           duration: 0.8,
  //           delay: i * 0.2,
  //           ease: 'power3.out'
  //         })
          
  //         // Animate category divider
  //         gsap.from(header.querySelector('.category-divider'), {
  //           width: 0,
  //           duration: 1,
  //           delay: i * 0.2 + 0.3,
  //           ease: 'power2.out'
  //         })
  //       }
  //     })
  //   })

  //   // Project Cards Animation with Morphing Effect
  //   gsap.utils.toArray('.project-card').forEach((card, i) => {
  //     ScrollTrigger.create({
  //       trigger: card,
  //       start: 'top 80%',
  //       once: true,
  //       onEnter: () => {
  //         gsap.from(card, {
  //           y: 100,
  //           opacity: 0,
  //           scale: 0.8,
  //           rotateX: 45,
  //           duration: 1,
  //           delay: i * 0.1,
  //           ease: 'back.out(1.7)'
  //         })
  //       }
  //     })
  //   })

  //   // Enhanced Card Hover Effects
  //   document.querySelectorAll('.project-card').forEach(card => {
  //     card.addEventListener('mouseenter', () => {
  //       gsap.to(card, {
  //         y: -10,
  //         scale: 1.02,
  //         rotateX: 5,
  //         duration: 0.3,
  //         ease: 'power2.out'
  //       })
        
  //       // Animate card image
  //       gsap.to(card.querySelector('.project-card-image img'), {
  //         scale: 1.1,
  //         duration: 0.3,
  //         ease: 'power2.out'
  //       })
  //     })

  //     card.addEventListener('mouseleave', () => {
  //       gsap.to(card, {
  //         y: 0,
  //         scale: 1,
  //         rotateX: 0,
  //         duration: 0.4,
  //         ease: 'power2.out'
  //       })
        
  //       // Reset card image
  //       gsap.to(card.querySelector('.project-card-image img'), {
  //         scale: 1,
  //         duration: 0.4,
  //         ease: 'power2.out'
  //       })
  //     })

  //     // 3D tilt effect on mouse move
  //     card.addEventListener('mousemove', (e) => {
  //       if (window.innerWidth > 768) {
  //         const rect = card.getBoundingClientRect()
  //         const x = e.clientX - rect.left
  //         const y = e.clientY - rect.top
          
  //         gsap.to(card, {
  //           rotateY: (x - rect.width/2) * 0.02,
  //           rotateX: (y - rect.height/2) * -0.02,
  //           duration: 0.3,
  //           ease: 'power2.out'
  //         })
  //       }
  //     })
  //   })

  //   return () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  //   }
  // }, [])

  return (
    <section id="projects" className="section projects">
      <div className="projects-container">
        <h2 className="projects-title">Learning Journey & Projects</h2>
        
        {/* Web Projects Category */}
        <div className="projects-category">
          <div className="category-header">
            <div className="category-icon">🌐</div>
            <h3 className="category-title">Web Projects</h3>
            <div className="category-divider"></div>
          </div>
          
          <div className="projects-grid">
            {/* Nxt Watch */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">21 May 2025</div>
                <div className="project-card-category">PROJECT</div>
              </div>
              <div className="project-card-image">
                <img src="/assets/images/nxt-watch.png" alt="NxtWatch" />
              </div>
              <h3 className="project-card-title">NxtWatch</h3>
              <p className="project-card-description">
                NxtWatch is a YouTube clone built with React, featuring login authentication, light/dark themes, route protection, video search, trending/gaming sections, and interactive video details with like, dislike, and save functionality.
              </p>
              <a href="https://charanwatch.ccbp.tech/" className="project-card-link">
                View Project <span className="project-card-link-arrow">→</span>
              </a>
            </div>

            {/* Nxt Trendz */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">26 January 2025</div>
                <div className="project-card-category">PROJECT</div>
              </div>
              <div className="project-card-image">
                <img src="/assets/images/nxt-trendz.gif" alt="Nxt Trendz" />
              </div>
              <h3 className="project-card-title">Nxt Trendz</h3>
              <p className="project-card-description">
                Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.
              </p>
              <a href="https://nxtz.ccbp.tech/" className="project-card-link">
                View Project <span className="project-card-link-arrow">→</span>
              </a>
            </div>
            
            {/* Quiz Master */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">15 November 2024</div>
                <div className="project-card-category">PROJECT</div>
              </div>
              <div className="project-card-image">
                <img src="/assets/images/quiz_master.png" alt="Quiz Master" />
              </div>
              <h3 className="project-card-title">Quiz Master</h3>
              <p className="project-card-description">
                QuizMaster is an AI-powered quiz app where users can log in, take quizzes or exams, get instant feedback, and use tools like timers and daily challenges for smart prep.
              </p>
              <a href="https://charanyedida.github.io/QuizMaster/quiz_index.html" className="project-card-link">
                View Project <span className="project-card-link-arrow">→</span>
              </a>
            </div>
            
            {/* Jobby App */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">2 July 2024</div>
                <div className="project-card-category">PROJECT</div>
              </div>
              <div className="project-card-image">
                <img src="/assets/images/jobby_app.png" alt="Jobby App" />
              </div>
              <h3 className="project-card-title">Jobby App</h3>
              <p className="project-card-description">
                A secure job search platform that enables users to browse job listings, filter by role, salary, or type, and view detailed job info. Integrated JWT auth, protected routes, and persistent login. Seamlessly handles loading, error, and no-results states using dynamic API calls and React Router.
              </p>
              <a href="https://charanyedida34.ccbp.tech/" className="project-card-link">
                View Project <span className="project-card-link-arrow">→</span>
              </a>
            </div>

            {/* Todos Application */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">6 July 2024</div>
                <div className="project-card-category">PROJECT</div>
              </div>
              <div className="project-card-image">
                <img src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" alt="Todos Application" />
              </div>
              <h3 className="project-card-title">Todos Application</h3>
              <p className="project-card-description">
                This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.
              </p>
              <a href="https://todossapp.ccbp.tech/" className="project-card-link">
                View Project <span className="project-card-link-arrow">→</span>
              </a>
            </div>
            
            {/* Wikipedia Search Application */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">15 July 2024</div>
                <div className="project-card-category">PROJECT</div>
              </div>
              <div className="project-card-image">
                <img src="https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png" alt="Wikipedia Search Application" />
              </div>
              <h3 className="project-card-title">Wikipedia Search Application</h3>
              <p className="project-card-description">
                Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.
              </p>
              <a href="https://wikiseaarch.ccbp.tech/" className="project-card-link">
                View Project <span className="project-card-link-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Other Projects Category */}
        <div className="projects-category">
          <div className="category-header">
            <div className="category-icon">🔧</div>
            <h3 className="category-title">Other Projects</h3>
            <div className="category-divider"></div>
          </div>
          
          <div className="projects-grid">
            {/* Machine Learning Project */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">15 March 2024</div>
                <div className="project-card-category">PROJECT</div>
              </div>
              <div className="project-card-image">
                <img src="https://assets.ccbp.in/frontend/content/react-js/card-flip-memory-game-img.png" alt="ML Project" />
              </div>
              <h3 className="project-card-title">Predictive Analytics Tool</h3>
              <p className="project-card-description">
                A machine learning application built with Python and scikit-learn for data analysis and prediction. Features data visualization, model training, and performance metrics.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">Python</span>
                <span className="project-card-tag">Machine Learning</span>
                <span className="project-card-tag">Data Analysis</span>
              </div>
            </div>
            
            {/* Smart Assistant */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">27 June 2025</div>
                <div className="project-card-category">PROJECT</div>
              </div>
              <div className="project-card-image">
                <img src="/assets/images/smart_assistant.png" alt="Smart Research Assistant" />
              </div>
              <h3 className="project-card-title">Smart Research Assistant</h3>
              <p className="project-card-description">
                An AI-powered assistant built with Streamlit that summarizes research papers, answers document-based questions, and challenges users with logic questions using local models or cloud AI APIs. Powered by Transformers and OpenRouter.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">Python</span>
                <span className="project-card-tag">NLP</span>
                <span className="project-card-tag">Streamlit</span>
                <span className="project-card-tag">Transformers</span>
                <span className="project-card-tag">OpenRouter API</span>
              </div>
              <a href="https://smartassistant-charan.streamlit.app/" className="project-card-link">
                View Project <span className="project-card-link-arrow">→</span>
              </a>
            </div>

            {/* Algorithm Visualizer */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">22 May 2024</div>
                <div className="project-card-category">PROJECT</div>
              </div>
              <div className="project-card-image">
                <img src="https://assets.ccbp.in/frontend/content/react-js/routing-practice-img.png" alt="Algorithm Visualizer" />
              </div>
              <h3 className="project-card-title">Algorithm Visualizer</h3>
              <p className="project-card-description">
                An interactive web application that visualizes sorting and searching algorithms. Built with JavaScript and HTML5 Canvas to demonstrate algorithm efficiency and behavior.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">Algorithms</span>
                <span className="project-card-tag">Data Structures</span>
                <span className="project-card-tag">Visualization</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Learning & Courses Category */}
        <div className="projects-category">
          <div className="category-header">
            <div className="category-icon">📚</div>
            <h3 className="category-title">Learning & Courses</h3>
            <div className="category-divider"></div>
          </div>
          
          <div className="projects-grid">
            {/* Static Website Course */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">15 January 2024</div>
                <div className="project-card-category">COURSE</div>
              </div>
              <h3 className="project-card-title">Static Website</h3>
              <p className="project-card-description">
                Build your own personal portfolio website and a website to host conferences and events. Publish your website and share it with your friends, family and beyond.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">HTML Elements</span>
                <span className="project-card-tag">Class Attribute</span>
                <span className="project-card-tag">Text Properties</span>
                <span className="project-card-tag">Bootstrap</span>
                <span className="project-card-tag">Box Properties</span>
                <span className="project-card-tag">Layout</span>
                <span className="project-card-tag">Flexbox</span>
              </div>
            </div>
            
            {/* Responsive Website Course */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">20 February 2024</div>
                <div className="project-card-category">COURSE</div>
              </div>
              <h3 className="project-card-title">Responsive Website</h3>
              <p className="project-card-description">
                Build a responsive website that appears beautifully on the screen of any size. Develop a personal portfolio website, an E-commerce product listing website and a website to host conferences and events.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">Responsive Web Design</span>
                <span className="project-card-tag">Multiple Layouts</span>
                <span className="project-card-tag">Column Wrapping</span>
                <span className="project-card-tag">Navbar</span>
                <span className="project-card-tag">Designing Layouts</span>
                <span className="project-card-tag">Inheritance</span>
                <span className="project-card-tag">CSS Gradients</span>
              </div>
            </div>
            
            {/* Dynamic Website Course */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">15 March 2024</div>
                <div className="project-card-category">COURSE</div>
              </div>
              <h3 className="project-card-title">Dynamic Website</h3>
              <p className="project-card-description">
                Learn the fundamental concepts in JavaScript and apply them to build dynamic and interactive web applications like Counter, Guessing Game, Chat Web app, E-commerce web app, etc.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">Declaring Variables</span>
                <span className="project-card-tag">Comparison Operator</span>
                <span className="project-card-tag">Functions</span>
                <span className="project-card-tag">Object</span>
                <span className="project-card-tag">DOM Manipulations</span>
                <span className="project-card-tag">Loops</span>
                <span className="project-card-tag">Local Storage</span>
              </div>
            </div>
            
            {/* RWD using Flexbox Course */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">25 April 2024</div>
                <div className="project-card-category">COURSE</div>
              </div>
              <h3 className="project-card-title">RWD using Flexbox</h3>
              <p className="project-card-description">
                Learn to develop responsive layouts using CSS Flexbox and CSS Media Queries.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">Sizing Elements</span>
                <span className="project-card-tag">Flexbox Layout</span>
                <span className="project-card-tag">Min & Max sizes</span>
                <span className="project-card-tag">Media Query Syntax</span>
                <span className="project-card-tag">Logical Operators</span>
                <span className="project-card-tag">CSS box-sizing property</span>
                <span className="project-card-tag">Media Features</span>
              </div>
            </div>
            
            {/* Python Programming Course */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">20 June 2024</div>
                <div className="project-card-category">COURSE</div>
              </div>
              <h3 className="project-card-title">Python Programming</h3>
              <p className="project-card-description">
                Master Python programming from basics to advanced concepts. Learn data structures, object-oriented programming, file handling, and build real-world applications.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">Variables & Data Types</span>
                <span className="project-card-tag">Control Structures</span>
                <span className="project-card-tag">Functions</span>
                <span className="project-card-tag">OOP</span>
                <span className="project-card-tag">File Handling</span>
                <span className="project-card-tag">Exception Handling</span>
                <span className="project-card-tag">Libraries</span>
              </div>
            </div>
            
            {/* SQL Database Course */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">15 August 2024</div>
                <div className="project-card-category">COURSE</div>
              </div>
              <h3 className="project-card-title">SQL Database Management</h3>
              <p className="project-card-description">
                Learn database design, SQL queries, and database management. Master complex joins, subqueries, stored procedures, and database optimization techniques.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">Database Design</span>
                <span className="project-card-tag">SQL Queries</span>
                <span className="project-card-tag">Joins & Relationships</span>
                <span className="project-card-tag">Stored Procedures</span>
                <span className="project-card-tag">Indexing</span>
                <span className="project-card-tag">Normalization</span>
                <span className="project-card-tag">Performance Tuning</span>
              </div>
            </div>
            
            {/* React JS Course */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">15 January 2025</div>
                <div className="project-card-category">COURSE</div>
              </div>
              <h3 className="project-card-title">React JS - Getting Started</h3>
              <p className="project-card-description">
                Learn how to build dynamic web applications with the React JS library. When you finish this course, you will be comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">Components</span>
                <span className="project-card-tag">Lists</span>
                <span className="project-card-tag">Conditional Rendering</span>
                <span className="project-card-tag">setState()</span>
                <span className="project-card-tag">Updating Phase</span>
                <span className="project-card-tag">Routing</span>
                <span className="project-card-tag">API Calls</span>
              </div>
            </div>
            
            {/* Node.js Course */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">20 March 2025</div>
                <div className="project-card-category">COURSE</div>
              </div>
              <h3 className="project-card-title">Node.js Backend Development</h3>
              <p className="project-card-description">
                Master server-side JavaScript development with Node.js. Learn to build scalable backend applications, RESTful APIs, and handle database operations. Understand asynchronous programming and middleware implementation.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">Express.js Framework</span>
                <span className="project-card-tag">RESTful APIs</span>
                <span className="project-card-tag">Middleware</span>
                <span className="project-card-tag">Authentication</span>
                <span className="project-card-tag">Database Integration</span>
                <span className="project-card-tag">Async Programming</span>
                <span className="project-card-tag">File System</span>
              </div>
            </div>
            
            {/* Data Structures & Algorithms Course */}
            <div className="project-card">
              <div className="project-card-header">
                <div className="project-card-date">15 May 2025</div>
                <div className="project-card-category">CURRENT</div>
              </div>
              <h3 className="project-card-title">Data Structures & Algorithms</h3>
              <p className="project-card-description">
                Master fundamental data structures and algorithms essential for competitive programming and technical interviews. Learn time complexity analysis and problem-solving strategies.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">Arrays & Strings</span>
                <span className="project-card-tag">Linked Lists</span>
                <span className="project-card-tag">Stacks & Queues</span>
                <span className="project-card-tag">Trees & Graphs</span>
                <span className="project-card-tag">Sorting Algorithms</span>
                <span className="project-card-tag">Dynamic Programming</span>
                <span className="project-card-tag">Complexity Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
