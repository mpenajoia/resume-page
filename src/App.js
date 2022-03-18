import './App.css';
import Resume from './doc/MarcoSilvaResume.pdf'


function App() {
  return (
    <div className='flex justify-center items-center'>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className='w-3/4 overflow-scroll h-screen mt-10 bg-white rounded-2xl px-12 shadow-xl'>
          {/* Header */}
          <div className='flex justify-between mt-5'>
            <div>
              <h1 className='font-extrabold text-5xl mt-2'>Marco Silva</h1>
              <h2 className='text-yellow-400 font-bold text-xl'>Front-End Engineer</h2>
            </div>
            <div className='flex flex-col items-end text-sm justify-end'>
              <p>
                {/* use an icon */}
                <a href="#" className="text-blue-500" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="#" className="text-blue-500" target="_blank" rel="noopener noreferrer">Github</a> | <a href="#" className="text-blue-500" target="_blank" rel="noopener noreferrer">Portfolio</a>
              </p>
              <p>
                Los Angeles, CA 90042
              </p>
            </div>
          </div>
          {/* Profile */}
          <div className='text-gray-500 text-sm my-5'>
            <p>Highly analytical and versatile individual with hands-on experience in all facets of software engineering, including design, development, and integration of innovative software solutions. Remarkable efficiency to develop pixel-perfect applications through utilizing responsive design as well as execute full-stack projects with complete CRUD functionality on MERN applications. Proven ability to translate designs into high-quality code, while driving designs to the next level by adding value during implementation. Articulate communicator with innate ability to foster consistent collaboration with front/back-end developers and excel in a forward-thinking, innovative company as a Front End Engineer.
            </p>
          </div>
          {/* Tech */}
          <div className='my-5 w-full'>
            <h2 className='text-yellow-400 font-bold text-xl'>Tech Stack</h2>
            <div className='flex w-full justify-between'>
              <div className='flex flex-col '>
                <p className='font-medium leading-5 '>Languages</p>
                <p className='font-medium leading-5 '>Framework | Library</p>
                <p className='font-medium leading-5 '>Database | Platform</p>
                <p className='font-medium leading-5 '>Tools | Markdown</p>
                <p className='font-medium leading-5 '>Misc</p>
              </div>
              <div className='flex flex-col '>
                <p className='text-sm'>JavaScript ES6 | Python</p>
                <p className='text-sm'>React | Node | Express | Tailwind | Bootstrap</p>
                <p className='text-sm'>MongoDB | PostgreSQL | RESTful API's</p>
                <p className='text-sm'>Git | HTML | CSS | Markup</p>
                <p className='text-sm'>Photoshop | Adobe Creative Suite | Google Suite | Zoom</p>
              </div>
            </div>
          </div>
          {/* Apps */}
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
          {/* Exp */}
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
          {/* Add Exp */}
          <div className='mb-4'>
            <h2 className='text-yellow-400 font-bold text-xl'>Additional Experience</h2>
            <div className='flex '>
              <h4 className='text-yellow-600 font-medium'>First Assistant Camera</h4>
              <p className='ml-1 text-sm self-center'> – Freelance, New York, NY</p>
            </div>
            <div className='flex '>
              <h4 className='text-yellow-600 font-medium'>Operations Specialist</h4>
              <p className='ml-1 text-sm self-center'> – Shi International Corporation, Somerset, NJ</p>
            </div>
          </div>
          {/* Edu */}
          <div className='mb-4'>
            <h2 className='text-yellow-400 font-bold text-xl'>Education | Credentials | Licenses | Certifications</h2>
            <div className='flex '>
              <h4 className='text-yellow-600 font-medium'>Bachelor of Business</h4>
              <p className='ml-1 text-sm self-center'> – New Jersey Institute of Technology, Newark, NJ</p>
            </div>
            <div className='flex '>
              <h4 className='text-yellow-600 font-medium'>General Assembly Software Engineering Certification</h4>
              <p className='ml-1 text-sm self-center'> – Remote</p>
            </div>
          </div>  
          {/* Lang */}
          <div className='mb-8'>
            <h2 className='text-yellow-400 font-bold text-xl'>Languages</h2>
            <p>
              English – Native | Portuguese – Fluent | Spanish – Intermediate
            </p>
          </div>
        </div>
        <a href={Resume} download className='my-5 bg-yellow-400 px-4 py-3 shadow-md rounded-2xl font-medium text-white'>Download</a>
      </div>
    </div>
  );
}

export default App;
