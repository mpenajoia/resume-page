import React from 'react'

function Experience() {
  return (
    <div className='mb-4'>
      <h2 className='text-yellow-400 font-bold text-xl'>Career Experience</h2>
      <div>
        <div className='flex justify-between'>
          <h3 className='font-bold text-md'>General Assembly, Remote</h3>
          <p className='text-yellow-600 font-bold text-md'>2021</p>
        </div>
        <div>
          <h4 className='text-yellow-600 font-medium'>Software Engineering Immersive Fellow</h4>
          <p className='text-sm'>Developed responsive front-end web applications through utilizing React, Javascript(ES6), CSS3, and HTML5 with RESTful API. <br/> Created full-stack applications and REST API’s with complete CRUD functionality leveraging React, Express, Node, and Mongo.</p>
          <ul className='list-disc marker:text-yellow-400 pl-5'>
            <li className='text-sm'>
              Utilized Agile methodologies and Git version control to steer and oversee team projects in remote settings.
            </li>
            <li className='text-sm'>
              Leveraged thorough understanding of computer science concepts involving data structures, algorithms, databases, and MVC pattern design for creation of high quality and maintainable code.
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-2'>
        <div className='flex justify-between'>
          <h3 className='font-bold text-md'>Moto Republic, Eagle Rock, CA</h3>
          <p className='text-yellow-600 font-bold text-md'>2019 - 2021</p>
        </div>
        <div>
          <h4 className='text-yellow-600 font-medium'>Technician</h4>
          <p className='text-sm'>Executed all activities relevant to documentation, such as reading technical documents for highly specialized and comprehensive tasks. Implemented simple changes to improve workplace flow for increased efficiency. <br/> Resolved issues preemptively before becoming detrimental from general wear and tear or stress related faults. <br/> Completed all relevant documentation for efficient execution of tasks.</p>
          <ul className='list-disc marker:text-yellow-400 pl-5'>
            <li className='text-sm'>
              Increased revenues by 20% through developing a high level of proficiency in output.
            </li>
            <li className='text-sm'>
              Increased workplace efficiency by restructuring and redefining areas for specific purposes.
            </li>
            <li className='text-sm'>
              Achieved exceptional proficiency in completing all serviceable activities on a multitude of motorcycle brands, from simplest of tasks to entire reconstruction of motors.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience