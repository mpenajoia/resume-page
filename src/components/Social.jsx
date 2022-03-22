import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { LinkedinFilled, GithubFilled, CopyFilled } from '@ant-design/icons'


function Social() {
  const { info } = useContext(UserContext);
  const iconsList = [ LinkedinFilled, GithubFilled, CopyFilled ]
  const social = info.social;
  const socialMap = social.map((social, key) => {    
    return (
      <a key={key} href={social.link} className="text-white mx-4 text-3xl hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
        {social.icon}
      </a>
    )
  })
  return (
    <div className='flex justify-center w-full my-5'>
      {socialMap}
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