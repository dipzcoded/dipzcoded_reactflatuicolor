import React, { useState } from "react";
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import { Route, Switch } from "react-router-dom";
import seedPalette from "./seed";

function App() {
  const [palettes, setPalettes] = useState(seedPalette);
  const savePalette = (newPalettes) => {
    setPalettes([...palettes, newPalettes]);
  };
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(rendProps) => (
          <PaletteList palettes={palettes} {...rendProps} />
        )}
      />
      <Route
        exact
        path="/palette/new"
        render={(rendProps) => (
          <NewPaletteForm
            savePalette={savePalette}
            palettes={palettes}
            {...rendProps}
          />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(rendProps) => <Palette palettes={palettes} {...rendProps} />}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(rendPros) => (
          <SingleColorPalette palettes={palettes} {...rendPros} />
        )}
      />
    </Switch>
  );
}

export default App;
