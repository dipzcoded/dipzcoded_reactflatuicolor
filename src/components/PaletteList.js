import React from "react";
import { Link } from "react-router-dom";
import seedPalette from "../seed";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";
import styles from "../jss/PaletteListStyle";

const PaletteList = ({ classes: { root, container, nav, paletteGrid } }) => {
  return (
    <div className={root}>
      <div className={container}>
        <nav className={nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
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
