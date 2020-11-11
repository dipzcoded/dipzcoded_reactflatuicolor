import React from "react";
import Palette from "./components/Palette";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <h1>Damn this home page! for real</h1>}
      />
      <Route exact path="/palette/:id" component={Palette} />
    </Switch>
    //
    // </div>
  );
}

export default App;
