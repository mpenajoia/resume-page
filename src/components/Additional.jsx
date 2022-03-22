import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';


function Additional() {
  const { info } = useContext(UserContext);
  const additional = info.additional;
  const additionalMap = additional.other.map((add, key) => {
    return (
      <div key={key} className='flex '>
        <h4 className='text-yellow-600 font-medium'>{add.position}</h4>
        <p className='ml-1 text-sm self-center'> – {add.company}, {add.location}</p>
      </div>
    )
  })

  return (
    <div className='mb-4'>
      <h2 className='text-yellow-400 font-bold text-xl'>{additional.title}</h2>
      {additionalMap}
    </div>
  )
}

export default Additional