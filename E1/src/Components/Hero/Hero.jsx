import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Bienvenidos a MiRa QuE Te CoMo</h1>
        <p>La mejor comida rápida de la ciudad</p>
        <a href="#menu" className="btn">Ver Menú</a>
       
      </div>
    </section>
  );
};

export default Hero;
