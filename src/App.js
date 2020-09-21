import React from 'react';
import Palette from './components/Palette';
import seedPalette from './seed';
import './App.css';

function App() {
  return (
    <div className="App">
     <Palette {...seedPalette[3]}/>
    </div>
  );
}

export default App;
