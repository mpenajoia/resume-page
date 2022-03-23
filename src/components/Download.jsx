import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Download() {
    const { info } = useContext(UserContext);
    const resume = info.resume;
  return (
    <div>Download</div>
  )
}

export default Download