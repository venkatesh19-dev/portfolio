import React from 'react'
import Navbar from './components/layout/Navbar/Navbar'
import MobileMenu from './components/layout/Navbar/MobileMenu'
import Hero from './components/layout/Home/Hero'
import TechStack from './components/layout/Home/TechStack'
import About from './components/layout/Home/About'
import WhyWorkWithMe from './components/layout/Home/WhyWorkWithMe'
import Projects from './components/layout/Home/Projects'
import DevelopmentProcess from './components/layout/Home/DevelopmentProcess'
import CTA from './components/layout/Home/CTA'
import Contact from './components/layout/Home/Contact'
import Footer from './components/layout/Home/Footer'
import HowCanIHelp from './components/layout/Home/HowCanIHelp'

const App = () => {
  return (
    <main className='bg-primary min-h-screen'>
      <Navbar />
      <MobileMenu />
      <Hero />
      <TechStack />
      <About />
      <HowCanIHelp />
      {/* <WhyWorkWithMe /> */}
      <Projects />
      <DevelopmentProcess />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}

export default App