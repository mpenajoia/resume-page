import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Projects() {
  const { info } = useContext(UserContext);
  const projects = info.projects;
  const projectsMap = projects.apps.map((app, key) => {
    const projPointsMap = app.points.map((point, key) => {
      return (
        <li key={key} className='text-sm'>{point}</li>
      )
    })
    return (
      <div  key={key}>
        <div className='flex md:flex-row flex-col'>  
          <p className='font-bold text-md text-center md:text-left'><a className='text-blue-500 self-center' href={app.link} target='_blank' rel="noopener noreferrer">{app.title}</a></p>
          {/* <span className='hidden md:inline mx-2'>|</span> */}
          
        </div>
        <ul className='list-disc marker:text-yellow-400 pl-5'>
          {projPointsMap}
        </ul>
      </div>
    )
  })
  return (
    <div className='mb-4'>
      <h2 className='text-yellow-400 mb-2 font-bold text-center md:text-left text-2xl '>{projects.title}</h2>
      {projectsMap}
    </div>
  )
}

export default Projects