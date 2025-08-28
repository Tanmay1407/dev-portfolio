
import ScrollProgress from './components/ScrollProgress'
import { motion } from 'framer-motion'
import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="hero-gradient relative min-h-screen overflow-hidden">
      <LoadingScreen show={loading} onFinish={() => setLoading(false)} />
      {/* Animated aurora background blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[60vw] w-[60vw] rounded-full bg-fuchsia-500/20 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 h-[55vw] w-[55vw] rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, -15, 0], y: [0, 12, 0] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: 'mirror' }}
      />
      <ScrollProgress />
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s' }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
