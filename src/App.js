import React, { useState, useEffect } from "react";
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import { Route, Switch } from "react-router-dom";
import seedPalette from "./seed";

function App() {
  const localStoragePalette = JSON.parse(localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(localStoragePalette || seedPalette);

  const savePalette = (newPalettes) => {
    setPalettes([...palettes, newPalettes]);
  };

  const deletePalette = (pid) => {
    // const paletteIndex = palettes.map(({ id }) => id).indexOf(id);
    // palettes.splice(paletteIndex, 1);
    setPalettes(palettes.filter(({ id }) => id !== pid));
  };

  const syncToLocal = () => {
    if (localStorage.palettes) {
      localStorage.removeItem("palettes");
      localStorage.setItem("palettes", JSON.stringify(palettes));
    }
  };

  useEffect(() => {
    if (palettes) {
      syncToLocal();
    }
  }, [palettes]);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(rendProps) => (
          <PaletteList
            palettes={palettes}
            {...rendProps}
            deletePalette={deletePalette}
          />
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
