import React from "react";
import Palette from "./components/Palette";
import seedPalette from "./seed";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";

function App() {
  console.log(generatePalette(seedPalette[1]));

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <h1>Damn this home page! for real</h1>}
      />
      <Route
        exact
        path="/palette/:id"
        render={(props) => <h1>this is working </h1>}
      />
    </Switch>
    //   <Palette palette={generatePalette(seedPalette[4])} />
    // </div>
  );
}

export default App;
