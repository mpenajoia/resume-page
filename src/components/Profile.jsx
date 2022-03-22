import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Profile() {
  const { info } = useContext(UserContext);
  const profile = info.profile;

  return (
    <div className='text-gray-500 text-sm my-5'>
      <p>{profile}
      </p>
    </div>
  )
}

export default Profile