import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';


function Additional() {
  const { info } = useContext(UserContext);
  const additional = info.additional;
  const additionalMap = additional.other.map((add, key) => {
    return (
      <div key={key} className='flex md:flex-row flex-col mb-1 items-center'>
        <h4 className='text-yellow-600 text-lg md:text-base font-medium'>{add.position}</h4>
        <p className='md:ml-1 ml-0 text-sm self-center text-center'> 
          <span className='md:inline hidden'> - </span>
          {add.company}
          <span className='md:inline hidden'>, </span> 
          <span className='md:inline block'>{add.location}</span>
        </p>
      </div>
    )
  })

  return (
    <div className='mb-4 '>
      <h2 className='text-yellow-400 mb-2 font-bold text-2xl md:text-xl text-center md:text-left'>{additional.title}</h2>
      {additionalMap}
    </div>
  )
}

export default Additional