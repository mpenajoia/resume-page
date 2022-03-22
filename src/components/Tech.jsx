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
        <span key={key} className="mr-2" >{each}</span>
      )
    })
    return (
      <p key={key} className='text-sm'>{eachItem}</p>
    )
  })

  return (
    <div className='my-5 w-full'>
      <h2 className='text-yellow-400 font-bold text-xl'>Tech Stack</h2>
      <div className='flex w-full justify-between'>
        <div className='flex flex-col '>
          {typeMap}
          {/* <p className='font-medium leading-5 '>Languages</p>
          <p className='font-medium leading-5 '>Framework | Library</p>
          <p className='font-medium leading-5 '>Database | Platform</p>
          <p className='font-medium leading-5 '>Tools | Markdown</p>
          <p className='font-medium leading-5 '>Misc</p> */}
        </div>
        <div className='flex flex-col '>
          {listMap}
          {/* <p className='text-sm'>JavaScript ES6 | Python</p>
          <p className='text-sm'>React | Node | Express | Tailwind | Bootstrap</p>
          <p className='text-sm'>MongoDB | PostgreSQL | RESTful API's</p>
          <p className='text-sm'>Git | HTML | CSS | Markup</p>
          <p className='text-sm'>Photoshop | Adobe Creative Suite | Google Suite | Zoom</p> */}
        </div>
      </div>
    </div>
  )
}

export default Tech