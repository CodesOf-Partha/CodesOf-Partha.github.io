import React from 'react';
import Nav from './Sections/Nav';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Experience from './Sections/Experience';
import Projects from './Sections/Projects';
import Education from './Sections/Education';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';

const Home = () => {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
