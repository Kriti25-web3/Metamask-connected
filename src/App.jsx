import React from 'react';
import Header from './components/Header';
import EmailInput from './components/EmailInput';
import MetaMaskButton from './components/MetaMaskButton';

const App = () => {
  return (
    <div className="container">
      <div className="left-section">
        <Header />
        <EmailInput />
        <MetaMaskButton />
      </div>
      {/*<div className="right-section">
        {/* Add image here 
      </div>*/}
    </div>
  );
};

export default App;