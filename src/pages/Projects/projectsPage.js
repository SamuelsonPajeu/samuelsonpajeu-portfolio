import { React, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./projects.css";

import ProjectCard from "../../components/projectCard/ProjectCard";
import { projectData } from "../../components/projectCard/project-data";

import FilterComponent from "../../components/projectFilter/FilterComponent";
import { filterData } from "../../components/projectFilter/filter-data";

import PopUpComponent from "../../components/projectPopup/projectPopup";

function Projects() {
  const [filteredProjects, setfilteredProjects] = useState(projectData);
  const [filterList, setFilterList] = useState(filterData);
  const [lastSelected, setLastSelected] = useState(0);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [actualOpenProject, setActualOpenProject] = useState({});

  const navigate = useNavigate();

  function filterProjectBy(type){
    if (type === "*") {
      setfilteredProjects(projectData);
      return;
    }
    const _filterdProjects = projectData.filter(project => project.tag.includes(type));

    setfilteredProjects(_filterdProjects);
  }

  function setFilterIndex(index) {
    if (lastSelected === index)
      return;

    const _filter = filterList.slice();
    _filter[index].selected = true;
    _filter[lastSelected].selected = false;
    setLastSelected(index);

    setFilterList(_filter);
  }

  function closePopUp() {
    setActualOpenProject({});
    setPopUpOpen(false);
  }

  function getPopUpComponent() {
    const project = actualOpenProject;

    return (
      <PopUpComponent 
        title={project.name}
        image={project.image}
        description={project.description}
        external={project.external}
        code={project.code}
        download={project.download}
        tags={project.tag}
        callback={closePopUp}
      />
    );
  }

  return (
    <div className="index">
      <div  className="navbar"
        onClick={() => {
          setfilteredProjects(projectData);
          setLastSelected(0);
          setFilterIndex(0);
          navigate('/');
        }}
      >
      <p className="text-wrapper-link"> 
          ← Go back
      </p>
      </div>

      <div className="page-description">
        <p className="text-wrapper">My personal projects lovely page.</p>
        <p className="div">
          Here you can find a collection of my personal projects, which I have worked on in my spare time.
        </p>
      </div>

      { popUpOpen && (getPopUpComponent("a"))}

      <div className="projects-section">
        <div className="filter" >
          {
            filterList.map((filter, index) => (
              <div onClick={() => {
                setFilterIndex(index);
                filterProjectBy(filter.filterBy);
              }}>
                <FilterComponent name={filter.name} selected={filter.selected ? filter.selected : false} />
              </div>
            ))
          }
        </div>
        <div className="frame">
          {
            filteredProjects.map((project) => (
              <div className="project"
                onClick={() => {
                  setActualOpenProject(project);
                  setPopUpOpen(true);
                }}
              >
                <ProjectCard name={project.name} data={project} image={project.image} />
              </div>
              
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;


