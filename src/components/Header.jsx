import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Pic from '../img/HeadShot.jpg';

function Header() {
  const { info } = useContext(UserContext);
  const header = info.header;
  return (
    <div className='flex flex-col md:flex-row justify-between mt-2 md:mt-5'>
        <div className='text-center md:text-left'>
            <h1 className='font-extrabold text-5xl mt-2'>{header.name}</h1>
            <h2 className='text-yellow-400 font-bold text-2xl md:text-xl'>{header.title}</h2>
            <p>
                {header.location}
            </p>
        </div>
        <div className='order-first md:order-last flex justify-center md:inline'>
          {Pic ? <img className='rounded-full w-24' src={Pic} alt="Head Shot" /> : ''}
        </div>
    </div>
  )
}

export default Header