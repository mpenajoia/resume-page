import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

function Education() {
    const { info } = useContext(UserContext)
    const education = info.extra
    const certMap = education.credentials.map((cert, key) => {
        return (
            <div key={key} className='flex md:flex-row flex-col text-center'>
                <h4 className='text-yellow-600 font-medium text-lg'>{cert.degree}</h4>
                <p className='md:ml-1 text-lg md:self-center'>  
                    <span className='md:inline hidden'> - </span>
                    {cert.school ? cert.school+', ' : '' }
                    <span className='md:inline block'>{cert.location}</span>
                </p>
            </div>
        )
    })

  return (
    <div className='mb-4'>
        <h2 className='text-yellow-400 font-bold mb-2 text-2xl text-center md:text-left'>{education.title}</h2>
        {certMap}
    </div> 
  )
}

export default Education