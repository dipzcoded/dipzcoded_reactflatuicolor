import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";
import styles from "../jss/PaletteListStyle";

const PaletteList = ({
  classes: { root, container, nav, paletteGrid, heading },
  palettes,
  deletePalette,
}) => {
  return (
    <div className={root}>
      <div className={container}>
        <nav className={nav}>
          <h1 className={heading}>React Colors</h1>
          <Link to="/palette/new">Create Palettes</Link>
        </nav>
        <div className={paletteGrid}>
          {palettes.map((palette) => (
            <MiniPalette palette={palette} deletePalette={deletePalette} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
