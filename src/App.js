import React from 'react';
import Palette from './components/Palette';
import seedPalette from './seed';

function App() {
  return (
    <div>
     <Palette {...seedPalette[3]}/>
    </div>
  );
}

export default App;
