import { useState } from 'react';
import { UserContext } from './context/UserContext';
import Info from './info/info.json'
import Home from './components/Home';


function App() {
  const [info, setInfo] = useState(Info);

  return (
    <UserContext.Provider value={{ info }}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;
