import { React, useState } from "react";
import { Link } from 'react-router-dom'
import "./projects.css";

import ProjectCard from "../../components/projectCard/ProjectCard";
import { projectData } from "../../components/projectCard/project-data";

function Projects() {
  const [filteredProjects, setfilteredProjects] = useState(projectData);

  function filterProjectBy(type){
    setfilteredProjects(projectData.filter(project => project.tag === type));
  }

  return (
    <div className="index">
      <div  className="navbar">
      <p className="text-wrapper"> 
        <Link to={"/"}>
          ← Go back
        </Link>
      </p>
      </div>
      
      <div className="page-description">
        <p className="text-wrapper">My personal projects lovely page.</p>
        <p className="div">
          Here you can find a collection of my personal projects, which I have worked on in my spare time.
        </p>
      </div>
      <div className="projects-section">
        <div className="filter">
          <div className="option">
            <div className="ellipse" />
            <div className="filter-text-wrapper">All</div>
          </div>
          <div className="option-2">
            <div className="ellipse" />
            <div className="filter-text-wrapper">TEST</div>
          </div>
        </div>
        <div className="frame">
          {
            filteredProjects.map((project, index) => (
              <ProjectCard name={project.name} image={project.image} />
            ))
          }
          {/* <ProjectCard name="teste" /> */}
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
