import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import styles from "../jss/MiniPaletteStyle";
const MiniPalette = ({
  classes: { root, color, title, emojis, miniColor },
  palette: { paletteName, emoji, colors, id },
  history,
}) => {
  const miniColorsBoxes = colors.map((color) => (
    <div
      className={miniColor}
      style={{
        backgroundColor: color.color,
      }}
      key={color.name}
    />
  ));

  const onClick = (e) => {
    history.push(`/palette/${id}`);
  };

  return (
    <Fragment>
      <div className={root} onClick={onClick}>
        <div className={color}>{miniColorsBoxes}</div>
        <h5 className={title}>
          {" "}
          {paletteName} <span className={emojis}>{emoji}</span>
        </h5>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(withRouter(MiniPalette));
