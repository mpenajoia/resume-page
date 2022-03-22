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
        <div className='flex'>  
          <p className='font-bold text-md'>{app.title}</p><span className='mx-2'>|</span><a className='text-blue-500	text-sm self-center' href={app.link} target='_blank' rel="noopener noreferrer">{app.linkName}</a>
        </div>
        <ul className='list-disc marker:text-yellow-400 pl-5'>
          {projPointsMap}
        </ul>
      </div>
    )
  })
  return (
    <div className='mb-4'>
      <h2 className='text-yellow-400 font-bold text-xl'>{projects.title}</h2>
      {projectsMap}
    </div>
  )
}

export default Projects