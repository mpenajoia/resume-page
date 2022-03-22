import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

function Education() {
    const { info } = useContext(UserContext)
    const education = info.extra
    const certMap = education.credentials.map((cert, key) => {
        return (
            <div key={key} className='flex '>
                <h4 className='text-yellow-600 font-medium'>{cert.degree}</h4>
                <p className='ml-1 text-sm self-center'>  {cert.school ? '- '+cert.school+',' : '- ' } {cert.location}</p>
            </div>
        )
    })

  return (
    <div className='mb-4'>
        <h2 className='text-yellow-400 font-bold text-xl'>{education.title}</h2>
        {certMap}
    </div> 
  )
}

export default Education