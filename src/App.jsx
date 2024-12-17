import React from 'react';
import Background from './components/background';
import Forground from './components/Forground';

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
    <Background /> 
    <Forground />
    </div>
  );
}

export default App;

