import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  paletteFooter: {
    backgroundColor: "#ffffff",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
    position: "relative",
  },
  paletteEmoji: {
    fontSize: "1.3rem",
    margin: "0 1rem",
  },
};

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
