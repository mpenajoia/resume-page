import React from 'react'

function Projects() {
  return (
    <div className='mb-4'>
      <h2 className='text-yellow-400 font-bold text-xl'>Applications</h2>
      <div className='flex'>  
        <p className='font-bold text-md'>cryptoFOMO</p><span className='mx-2'>|</span><a className='text-blue-500	text-sm self-center' href="https://mpenajoia.github.io/CryptoDreamsApp/#/" target='_blank' rel="noopener noreferrer">mpenajoia.github.io/CryptoDreamsApp</a>
      </div>
      <ul className='list-disc marker:text-yellow-400 pl-5'>
        <li className='text-sm'>
          Developed React financial web application through API for cryptocurrency past pricing for comparison to current pricing.
        </li>
        <li className='text-sm'>
          Applied logical-mathematical concepts to generate results for assessing gain/loss per investment.
        </li>
      </ul>
    </div>
  )
}

export default Projects