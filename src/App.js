import React from 'react';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import SimpleFormHooks from './SimpleFormHooks';
import SimpleFormInputHook from './SimpleFormInputHook';
import './App.css';

function App() {
  return (
    <div className="App">
      <CounterHooks />
      <Toggler />
      <SimpleFormHooks />
      <SimpleFormInputHook />
    </div>
  );
}

export default App;
