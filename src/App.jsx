// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation'; // <-- Import

function App() {
  return (
    <div className="overflow-x-hidden"> 
    <div className="bg-brand-brown">
      <div id="top"></div> {/* Target for smooth scroll to top */}
      <Navbar />
      <main>
        <Hero />

        <ScrollAnimation>
          <About />
        </ScrollAnimation>

        <ScrollAnimation>
          <Menu />
        </ScrollAnimation>

        <ScrollAnimation>
          <Location />
        </ScrollAnimation>

      </main>
      <Footer />
      </div>
    </div>  
  );
}

export default App;