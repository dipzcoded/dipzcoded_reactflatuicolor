import React from "react";
import Palette from "./components/Palette";
import seedPalette from "./seed";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedPalette[1]));

  return (
    <div>
      <Palette palette={generatePalette(seedPalette[4])} />
    </div>
  );
}

export default App;
