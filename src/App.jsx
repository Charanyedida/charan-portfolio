import './styles/styles.css'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Photography from './components/Photography'
import Contact from './components/Contact'
import ChatAssistant from './components/ChatAssistant'
import HorizontalScroll from './components/HorizontalScroll'

import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from "gsap";
import SkillIcons from './components/SkillIcons'
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <HorizontalScroll/>
      <About />
      <Skills />
      <SkillIcons />
      <Projects />
      <Photography />
      <Contact />
      <ChatAssistant />
    </>
  )
}

export default App
