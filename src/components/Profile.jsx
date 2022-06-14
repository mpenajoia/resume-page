import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Profile() {
  const { info } = useContext(UserContext);
  const profile = info.profile;

  return (
    <div className='text-gray-800 text-lg my-5'>
      <p className='text-center md:text-left'>{profile}
      </p>
    </div>
  )
}

export default Profile