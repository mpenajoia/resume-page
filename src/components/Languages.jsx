import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Languages() {
  const { info } = useContext(UserContext);
  const skills = info.skills;
  const skillsMap = skills.skill.map((skill, key) => {
    return (
      <p className='md:mr-5 mt-2' key={key}>{skill.title} - {skill.misc}</p>
    )
  })
  return (
    <div className='mb-8'>
      <h2 className='text-yellow-400 font-bold text-2xl md:text-xl text-center md:text-left'>{skills.title}</h2>
      <div className='flex text-sm md:flex-row flex-col items-center'>
        {skillsMap}
      </div>
    </div>
  )
}

export default Languages