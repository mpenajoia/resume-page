import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Resume from '../doc/MarcoSilvaResume.pdf';

function Download() {
    const { info } = useContext(UserContext);
    const resume = info.resume;
  return (
    <a href={Resume} download className='my-5 bg-yellow-400 px-4 py-3 shadow-md rounded-2xl font-medium text-white hover:text-black'>Download</a>
  )
}

export default Download