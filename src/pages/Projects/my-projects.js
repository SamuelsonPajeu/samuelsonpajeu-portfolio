import React from "react";
import { Link } from 'react-router-dom'
import "./projects.css";

function Projects() {
  return (
    <div className="index">
      <div  className="navbar">
      <Link to={"/"}>
        <img
          alt="Navbar"
          src="https://cdn.animaapp.com/projects/64f90b7d3747336ba41c7348/releases/655c256bf1a1f77db0a7a713/img/navbar.svg"
        />
      </Link>
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
            <img
              className="ellipse"
              alt="Ellipse"
              src="https://cdn.animaapp.com/projects/64f90b7d3747336ba41c7348/releases/655c27dd347072f150c9d360/img/ellipse-1.png"
            />
            <div className="text-wrapper-2">All</div>
          </div>
          <div className="option-2">
            <img
              className="ellipse"
              alt="Ellipse"
              src="https://cdn.animaapp.com/projects/64f90b7d3747336ba41c7348/releases/655c27dd347072f150c9d360/img/ellipse-1-1.png"
            />
            <div className="text-wrapper-3">TEST</div>
          </div>
        </div>
        <div className="frame">
          <div className="project-card">
            <p className="text-wrapper-4">Project Name Right Over Here</p>
            <img
              className="arrow-button"
              alt="Arrow button"
              src="https://cdn.animaapp.com/projects/64f90b7d3747336ba41c7348/releases/655c256bf1a1f77db0a7a713/img/arrow-button.svg"
            />
            <img
              className="code-button"
              alt="Code button"
              src="https://cdn.animaapp.com/projects/64f90b7d3747336ba41c7348/releases/655c256bf1a1f77db0a7a713/img/code-button.svg"
            />
            <div className="image-frame" />
          </div>
          <div className="project-card-2">
            <div className="text-wrapper-4">Project Name</div>
            <img
              className="arrow-button"
              alt="Arrow button"
              src="https://cdn.animaapp.com/projects/64f90b7d3747336ba41c7348/releases/655c256bf1a1f77db0a7a713/img/arrow-button.svg"
            />
            <img
              className="code-button"
              alt="Code button"
              src="https://cdn.animaapp.com/projects/64f90b7d3747336ba41c7348/releases/655c256bf1a1f77db0a7a713/img/code-button.svg"
            />
            <div className="image-frame" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
