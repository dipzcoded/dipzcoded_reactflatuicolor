import React from "react";
import seedPalette from "../seed";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
  },
  paletteGrid: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

const PaletteList = ({ classes: { root, container, nav, paletteGrid } }) => {
  return (
    <div className={root}>
      <div className={container}>
        <nav className={nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={paletteGrid}>
          {seedPalette.map((palette) => (
            <MiniPalette palette={palette} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
