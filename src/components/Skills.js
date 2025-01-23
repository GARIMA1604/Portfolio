import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", backgroundImage: "url('/images/html-bg.jpg')" },
    { name: "CSS", backgroundImage: "url('/images/css-bg.jpg')" },
    { name: "JavaScript", backgroundImage: "url('/images/js-bg.jpg')" },
    { name: "React", backgroundImage: "url('/images/react-bg.jpg')" },
    { name: "Node.js", backgroundImage: "url('/images/node-bg.jpg')" },
    { name: "Express", backgroundImage: "url('/images/express-bg.jpg')" },
    { name: "SQL", backgroundImage: "url('/images/sql-bg.jpg')" },
    { name: "Python", backgroundImage: "url('/images/python-bg.jpg')" },
    { name: "C++", backgroundImage: "url('/images/cpp-bg.jpg')" },
    { name: "Git", backgroundImage: "url('/images/git-bg.jpg')" },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ backgroundImage: skill.backgroundImage }}
          >
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
