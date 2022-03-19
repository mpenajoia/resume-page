import React from 'react'

function Header() {
  return (
    <div className='flex justify-between mt-5'>
        <div>
            <h1 className='font-extrabold text-5xl mt-2'>Marco Silva</h1>
            <h2 className='text-yellow-400 font-bold text-xl'>Front-End Engineer</h2>
            <p>
                Los Angeles, CA 90042
            </p>
        </div>
    </div>
  )
}

export default Header