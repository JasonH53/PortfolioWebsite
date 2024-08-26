import './App.scss';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import ParticleBackground from './utils.js/background';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Projects from './containers/projects';
import Notes from './containers/notes';
import Section from './components/section';

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    const handleResize = () => {
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <div className="bg-container" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        <ParticleBackground/>
      </div>
      <Navbar />
      <div style={{ height: `${navbarHeight}px` }} />
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={
          <div className="App_main-page-content">
            <Section id="home">
              <Home />
            </Section>
            <Section id="about">
              <About />
            </Section>
            <Section id="projects">
              <Projects />
            </Section>
            <Section id="notes">
              <Notes />
            </Section>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;