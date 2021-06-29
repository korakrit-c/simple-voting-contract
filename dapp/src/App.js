import React from 'react';

import './css/App.css';
import { useWeb3 } from './hooks/useWeb3';
import Account from './components/Account'
import Contract from './components/Contract'
import Voter from './components/Voter'

function App() {
  useWeb3();
  
  return (
    <div className="App ">
      <main role="main" className="container mt-5">
      <Account />
      <Contract />
      <Voter />
        
        
      </main>
    </div>
  );
}

export default App;
