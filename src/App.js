import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Dinner dishName="Baryani" sweetDish="Kheer"/>
      </header>
    </div>
  );
}

export default App;
