import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import * as icons from 'react-icons-kit/fa';
import { Icon } from 'react-icons-kit'


function Social() {
  const { info } = useContext(UserContext);
  const social = info.social;
  const socialMap = social.map((social, key) => {  
    return (
      <a key={key} href={social.link} className="text-white mx-4 text-3xl hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
        <Icon icon={icons[social.icon]} size={32} />
      </a>
    )
  })
  return (
    <div className='flex justify-center w-full my-5 order-last md:order-first'>
      {socialMap}      
    </div>
  )
}

export default Social