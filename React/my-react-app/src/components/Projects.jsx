import React from "react";

const Projects = ({ projects }) => {
  return (
    <section>
      <h2>Project</h2>

      {projects.map((data, index) => (
        <div className="projects" key={index}>
          <h3>{data.name}</h3>
          <p>{data.content}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
