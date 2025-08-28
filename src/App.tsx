import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Statistics from './components/Statistics';
import Projects from './components/Projects';
import Team from './components/Team';
import Locations from './components/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Statistics />
      <Projects />
      <Team />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;