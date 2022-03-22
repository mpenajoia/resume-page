import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Experience() {
  const { info } = useContext(UserContext);
  const experience = info.experience;
  const experienceMap = experience.employment.map((exp, key) => {
    const descriptionMap = exp.description.map((desc, key) => {
      return (
        <p key={key} className='text-sm'>{desc}</p>
      )
    });
    const bulletMap = exp.points.map((point, key) => {
      return (
        <li key={key} className='text-sm'>{point}</li>
      )
    })
    return (
      <div key={key}>
        <div className='flex justify-between'>
          <h3 className='font-bold text-md mt-2'>{exp.company}, {exp.location}</h3>
          <p className='text-yellow-600 font-bold text-md self-end'>{exp.time}</p>
        </div>
        <div>
          <h4 className='text-yellow-600 font-medium'>{exp.position}</h4>
          {descriptionMap}
          <ul className='list-disc marker:text-yellow-400 pl-5'>
            {bulletMap}
          </ul>
        </div>
      </div>
    )
  })
  return (
    <div className='mb-4'>
      <h2 className='text-yellow-400 font-bold text-xl'>{experience.title}</h2>
      {experienceMap}
    </div>
  )
}

export default Experience