import './App.css';
import Resume from './doc/MarcoSilvaResume.pdf'
import Header from './components/Header';
import Profile from './components/Profile';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Social from './components/Social'
import Experience from './components/Experience';
import Additional from './components/Additional';
import Languages from './components/Languages';

import Info from './info/info.json'

function App() {
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
          <Languages />
        </div>
        <a href={Resume} download className='my-5 bg-yellow-400 px-4 py-3 shadow-md rounded-2xl font-medium text-white hover:text-black'>Download</a>
      </div>
    </div>
  );
}

export default App;
