import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Primary gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#576CBC] animate-gradient" />
      
      {/* Mesh overlay */}
      <div className="fixed inset-0 bg-mesh opacity-20" />
      
      {/* Animated particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlays */}
      <div className="fixed inset-0 bg-gradient-to-t from-[#0B2447]/50 to-transparent" />
      <div className="fixed inset-0 bg-gradient-to-b from-[#0B2447]/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="timeline">
            <Timeline />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;