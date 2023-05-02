import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Education from './components/Education'
import Projects from './components/Projects'
import { Contact } from './components/Contact'
import Particle from './components/Particle'
import Skills from './components/Skills'
import About from './components/About'
function App() {
 

  return (
    <div>
      <Particle /> 
      <Sidenav />
      <Main />
      <About />
      <Skills />
<Education />   
<Projects />
<Contact />
 </div>
  )
}

export default App
