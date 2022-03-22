import React from 'react';
import Resume from '../doc/MarcoSilvaResume.pdf';
import { Header, Profile, Tech, Projects, Social, Experience, Additional, Languages, Education } from './';


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
            <a href={Resume} download className='my-5 bg-yellow-400 px-4 py-3 shadow-md rounded-2xl font-medium text-white hover:text-black'>Download</a>
        </div>
    </div>
  )
}

export default Home