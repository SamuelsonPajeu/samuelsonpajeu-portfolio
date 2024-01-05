import { React, useState, useEffect } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom'
import "./projects.css";

import ProjectCard from "../../components/projectCard/ProjectCard";
import { projectData } from "../../components/projectCard/project-data";

import FilterComponent from "../../components/projectFilter/FilterComponent";
import { filterData } from "../../components/projectFilter/filter-data";

import PopUpComponent from "../../components/projectPopup/projectPopup";

function Projects() {
  const [filterList, setFilterList] = useState(filterData);
  const [lastSelected, setLastSelected] = useState(0);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [filteredProjects, setfilteredProjects] = useState(projectData);
  const [actualOpenProject, setActualOpenProject] = useState({});

  const [searchParams, setSearchParams] = useSearchParams({  })
  const filter = searchParams.get("filter")
  const project = searchParams.get("project")

  const navigate = useNavigate();

  function deleteAndClearSearchParams(paramToDelete) {
    searchParams.delete(paramToDelete);
    const newParams = {};
    searchParams.forEach((value, key) => {
        newParams[key] = value;
    });

    setSearchParams(newParams, { replace: true});
  }

  function filterProjectBy(type){
    setSearchParams(params => {
      params.set("filter", type);
      return params;
    }, { replace: true });

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
    deleteAndClearSearchParams("project");
    setActualOpenProject({});
    setPopUpOpen(false);
  }

  function getPopUpComponent(project) {

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

  function setFilter(){
    if (filter) {
      filterProjectBy(filter);
      setFilterIndex(filterData.findIndex(f => f.filterBy === filter));
    }
  }

  function setProject() {
    if(project) {
      setActualOpenProject(filteredProjects.find((p) => p.name === project));
      setPopUpOpen(true);
    }
  }

  useEffect(() => {
    setFilter();
    setProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

      { popUpOpen && (getPopUpComponent(actualOpenProject))}

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
                onClick={(event) => {
                  if(event.target.id !== "button"){

                    setSearchParams(params => {
                      params.set("project", project.name);
                      return params;
                    }, { replace: true });

                    setActualOpenProject(project);
                    setPopUpOpen(true);
                  }
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


