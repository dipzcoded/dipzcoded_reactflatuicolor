import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../jss/PaletteFooterStyle";

const PaletteFooter = ({
  classes: { paletteFooter, paletteEmoji },
  paletteName,
  emoji,
}) => {
  return (
    <footer className={paletteFooter}>
      {paletteName}
      <span className={paletteEmoji}>{emoji}</span>
    </footer>
  );
};

export default withStyles(styles)(PaletteFooter);
