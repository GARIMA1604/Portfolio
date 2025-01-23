import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    { 
      title: "Campus-Recruitment-Portal", 
      description: "A Web portal which is used to free the students from the hassle of filling forms again and again for campus recruitment and let them directly connect with the companies coming in the campus.", 
      link: "https://campus-recruitment-portal.vercel.app/" 
    },
    { 
      title: "EnergyBuster", 
      description: "EnergyBuster helps customers utilize energy harvesting properly and get insights into which energy usage is more effective and what’s inefficient.", 
      link: "https://garima1604.github.io/Energybuster/" 
    },
    { 
      title: "Gemni", 
      description: "Gemni is a platform like ChatGPT that uses the Google API to provide intelligent chatbot-like responses, just like Gemini and ChatGPT.", 
      link: "#" 
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
