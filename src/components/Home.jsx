import React from 'react';
import { Header, Profile, Tech, Projects, Social, Experience, Additional, Languages, Education, Download } from './';


function Home() {
  return (
    <div className='flex justify-center items-center'>
        <div className="flex flex-col justify-center items-center h-screen">
            <Social />
            <div className='w-3/4 overflow-scroll h-screen bg-white rounded-2xl px-12 shadow-xl'>
              <Header />
              <Profile />
              <Tech />
              <Projects />
              <Experience />
              <Additional /> 
              <Education />
              <Languages />
            </div>
            <Download />
        </div>
    </div>
  )
}

export default Home