import React from 'react'

function Tech() {
  return (
    <div className='my-5 w-full'>
      <h2 className='text-yellow-400 font-bold text-xl'>Tech Stack</h2>
      <div className='flex w-full justify-between'>
        <div className='flex flex-col '>
          <p className='font-medium leading-5 '>Languages</p>
          <p className='font-medium leading-5 '>Framework | Library</p>
          <p className='font-medium leading-5 '>Database | Platform</p>
          <p className='font-medium leading-5 '>Tools | Markdown</p>
          <p className='font-medium leading-5 '>Misc</p>
        </div>
        <div className='flex flex-col '>
          <p className='text-sm'>JavaScript ES6 | Python</p>
          <p className='text-sm'>React | Node | Express | Tailwind | Bootstrap</p>
          <p className='text-sm'>MongoDB | PostgreSQL | RESTful API's</p>
          <p className='text-sm'>Git | HTML | CSS | Markup</p>
          <p className='text-sm'>Photoshop | Adobe Creative Suite | Google Suite | Zoom</p>
        </div>
      </div>
    </div>
  )
}

export default Tech