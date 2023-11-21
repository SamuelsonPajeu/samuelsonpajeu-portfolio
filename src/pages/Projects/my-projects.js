import React from "react";
import { Link } from 'react-router-dom'
import "./projects.css";

function Projects() {
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
          <div className="project-card">
            <p className="card-text-wrapper">Project Name</p>
            <img className="primary-button" alt="Arrow button" src="assets/img/arrow-button.svg"
            />
            <img className="secondary-button" alt="Code button"  src="assets/img/code-button.svg"
            />
            <div className="image-frame" >
              <img className="thumb-image" alt="Project" src="assets/img/projects/echo.png" />
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
