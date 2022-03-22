import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Header() {
  const { info } = useContext(UserContext);
  const header = info.header;
  return (
    <div className='flex justify-between mt-5'>
        <div>
            <h1 className='font-extrabold text-5xl mt-2'>{header.name}</h1>
            <h2 className='text-yellow-400 font-bold text-xl'>{header.title}</h2>
            <p>
                {header.location}
            </p>
        </div>
    </div>
  )
}

export default Header