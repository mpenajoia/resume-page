import React from 'react';
import { Header, Profile, Tech, Projects, Social, Experience, Additional, Languages, Education, Download } from './';


function Home() {
  return (
    <div className='flex justify-center items-center'>
        <div className="flex flex-col justify-center items-center h-screen">
            <Social />
            <div className='max-w-[900px] w-full overflow-y-auto no-scrollbar h-screen bg-white md:rounded-2xl px-5 md:px-12 '>
              <Header />
              <Profile />
              <Projects />
              <Tech />
              <Experience />
              {/* <Additional />  */}
              <Education />
              {/* <Languages /> */}
            </div>
            <div className='my-7 hidden md:inline'>
              <Download />
            </div>
        </div>
    </div>
  )
}

export default Home