import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Experience() {
  const { info } = useContext(UserContext);
  const experience = info.experience;
  const experienceMap = experience.employment.map((exp, key) => {
    const descriptionMap = exp.description.map((desc, key) => {
      return (
        <p key={key} className='text-lg'>{desc}</p>
      )
    });
    const bulletMap = exp.points.map((point, key) => {
      return (
        <li key={key} className='text-lg'>{point}</li>
      )
    })
    return (
      <div key={key}>
        <div className='flex flex-col md:justify-between mt-3 mb-2'>
          <div className='flex md:flex-row flex-col md:justify-between w-full text-center '>
            <h3 className='font-medium md:font-bold md:text-lg '>{exp.company}, {exp.location}</h3>
            <p className='text-yellow-600 font-medium md:font-bold text-lg md:self-end '>{exp.time}</p>
          </div>
          <h4 className='text-yellow-600 font-medium text-xl order-first text-center md:text-left'>{exp.position}</h4>
        </div>
        <div>
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
      <h2 className='text-yellow-400 font-bold text-center md:text-left text-2xl'>{experience.title}</h2>
      {experienceMap}
    </div>
  )
}

export default Experience