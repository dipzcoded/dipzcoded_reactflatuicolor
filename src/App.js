import React from "react";
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={PaletteList} />
      <Route exact path="/palette/new" component={NewPaletteForm} />
      <Route exact path="/palette/:id" component={Palette} />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        component={SingleColorPalette}
      />
    </Switch>
  );
}

export default App;
