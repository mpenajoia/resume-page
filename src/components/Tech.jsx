import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Tech() {
  const { info } = useContext(UserContext);
  const tech = info.tech;
  const techMap = tech.tech.map((tech, key) => {
    const listMap = tech.list.map((each, key) => {
      return (
        <p key={key} className="mr-2 " >{each}</p>
      )
    })
    return (
      <div key={key} className='flex justify-between md:flex-row flex-col text-center md:text-left' >
        <p className='font-medium md:text-lg leading-5 md:mr-4 text-yellow-600 md:w-1/6 pl-5'>{tech.type}</p>
        <div className='flex w-full flex-wrap justify-center md:justify-start'>
          {listMap}
        </div>
      </div>
    )
  })

  return (
    <div className='my-5 w-full '>
      <h2 className='text-yellow-400 mb-2 font-bold text-2xl text-center md:text-left'>Tech Stack</h2>
      <div className='w-full'>
        <div className='flex flex-col text-lg w-full'>
          {techMap}
        </div>
      </div>
    </div>
  )
}

export default Tech