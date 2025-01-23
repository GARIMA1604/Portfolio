import React from "react";


const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="fade-in">
          Hello, I'm <span>Garima</span>
        </h1>
        <p className="fade-in">
          I build web experiences that are clean, simple, and user-friendly.
        </p>
        <a href="#projects" className="btn fade-in">View My Work</a>
      </div>
    </section>
  );
};

export default HeroSection;
