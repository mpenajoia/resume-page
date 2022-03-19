import React from 'react'
import { LinkedinFilled, GithubFilled, CopyFilled } from '@ant-design/icons'


function Social() {
  return (
    <div className='flex justify-center w-full my-5'>
      <a href="https://www.linkedin.com/in/mpenajoia/" className="text-white mx-4 text-3xl hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
        <LinkedinFilled />
      </a>
      <a href="https://github.com/mpenajoia" className="text-white mx-4 text-3xl hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
        <GithubFilled />
      </a>
      <a href="https://mpenajoia.github.io/" className="text-white mx-4 text-3xl hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
      <CopyFilled />
      </a>
    </div>
  )
}

export default Social