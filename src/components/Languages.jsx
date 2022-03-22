import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Languages() {
  const { info } = useContext(UserContext);
  const skills = info.skills;
  const skillsMap = skills.skill.map((skill, key) => {
    return (
      <p className='mr-5' key={key}>{skill.title} - {skill.misc}</p>
    )
  })
  return (
    <div className='mb-8'>
      <h2 className='text-yellow-400 font-bold text-xl'>{skills.title}</h2>
      <div className='flex text-sm'>
        {skillsMap}
      </div>
    </div>
  )
}

export default Languages