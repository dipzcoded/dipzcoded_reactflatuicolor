import React from "react";
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={PaletteList} />
      <Route exact path="/palette/:id" component={Palette} />
    </Switch>
    //
    // </div>
  );
}

export default App;
