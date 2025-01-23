import React from "react";
import profileImage from "./WhatsApp Image 2025-01-10 at 16.08.53_db3f02d5.jpg"; // Update with your image path

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-text fade-in-left">
          <div className="about-image">
            <img src={profileImage} alt="Garima" />
          </div>
          <p>
            Hello everyone, I'm <strong>Garima</strong>, a passionate software engineer with expertise in web development. I specialize in creating efficient and scalable web applications using modern technologies like React, JavaScript, and more.
          </p>
          <p>
            I love solving complex problems and am always eager to learn new technologies to improve my skills. My goal is to contribute to impactful projects while growing as a developer and expanding my knowledge in full-stack development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
