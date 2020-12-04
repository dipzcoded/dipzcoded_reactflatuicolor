import React, { useState, useEffect } from "react";
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import { Route, Switch } from "react-router-dom";
import seedPalette from "./seed";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Page from "./components/Page";
import "./page.css";

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const syncToLocal = () => {
    if (localStorage.palettes) {
      localStorage.removeItem("palettes");
      localStorage.setItem("palettes", JSON.stringify(palettes));
    } else {
      localStorage.setItem("palettes", JSON.stringify(palettes));
    }
  };

  useEffect(() => {
    if (palettes) {
      syncToLocal();
    }
  }, [palettes, syncToLocal]);

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={(rendProps) => (
                  <Page>
                    <PaletteList
                      palettes={palettes}
                      {...rendProps}
                      deletePalette={deletePalette}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/palette/new"
                render={(rendProps) => (
                  <Page>
                    <NewPaletteForm
                      savePalette={savePalette}
                      palettes={palettes}
                      {...rendProps}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/palette/:id"
                render={(rendProps) => (
                  <Page>
                    <Palette palettes={palettes} {...rendProps} />
                  </Page>
                )}
              />
              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={(rendPros) => (
                  <Page>
                    <SingleColorPalette palettes={palettes} {...rendPros} />
                  </Page>
                )}
              />
              <Route
                render={(rendProps) => (
                  <Page>
                    <PaletteList
                      palettes={palettes}
                      {...rendProps}
                      deletePalette={deletePalette}
                    />
                  </Page>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
