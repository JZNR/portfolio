import React, { useState } from 'react'
import projectsData from '../assets/projects.json';

function Projects() {
  const [ projects, setProjects ] = useState(projectsData);

  function whiteText(project, id) {
    if (id === 0) {
      return <p>{project.description.substring(0, 150)} <span className='white-text'>{project.description.substring(151, project.description.length)}</span></p>
    } else if (id === 1) {
      return <p><span className='white-text'>{project.description.substring(0, 94)}</span> {project.description.substring(95, project.description.length)}</p>
    } else {
      return <p><span className='white-text'>{project.description.substring(0, 72)}</span> {project.description.substring(72, project.description.length)}</p>
    }
  };

  return (
    <>
    <div className="projects" id='projects'>
      <div>
        <h2>Selected <span>Projects</span></h2>
      </div>
        { projects.map((project, id) => {
          return <div className='card' key={id} id={`card-${id}`}>
              <div className='card-img-wrapper'>
                  <img src={project.img} alt="" className='card-img'/>
              </div>
              <div className='card-column'>
                  <h2 className='project-name'>{project.name}</h2>
                  <div className='project-description-wrapper'>{whiteText(project, id)}</div>
                  <h4 className='project-type'>{project.type}</h4>
                  <div className="projects-buttons">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    <img src="https://res.cloudinary.com/duuwrswcs/image/upload/v1681995854/projects/github-mark-white_g1zow6.png" 
                    alt="" 
                    width={30}
                    />
                    Repo
                    </a>
                    <a href={project.url} target="_blank" rel="noopener noreferrer"> &#x1F517; Check Live</a>
                  </div>
              </div>
          </div>
        })}
    </div>
    </>
  )
}

export default Projects