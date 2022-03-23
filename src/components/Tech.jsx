import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Tech() {
  const { info } = useContext(UserContext);
  const tech = info.tech;
  const typeMap = tech.tech.map((tech, key) => {
    return (
      <p key={key} className='font-medium leading-5 '>{tech.type}</p>
    )
  })
  const listMap = tech.tech.map((item, key) => {
    const eachItem = item.list.map((each, key) => {
      return (
        <span key={key} className="mr-2 " >{each}</span>
      )
    })
    return (
      <p key={key} className='text-sm'>{eachItem}</p>
    )
  })

  return (
    <div className='my-5 w-full '>
      <h2 className='text-yellow-400 mb-2 font-bold text-2xl md:text-xl text-center md:text-left'>Tech Stack</h2>
      <div className='flex w-full '>
        <div className='flex flex-col mr-5'>
          {typeMap}
        </div>
        <div className='flex flex-col '>
          {listMap}
        </div>
      </div>
    </div>
  )
}

export default Tech