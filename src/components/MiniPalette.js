import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid #333",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  color: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "#000",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emojis: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    position: "relative",
    margin: "0 auto",
    marginBottom: "-4.5px",
  },
};

const MiniPalette = ({
  classes: { root, color, title, emojis, miniColor },
  palette: { paletteName, emoji, colors },
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

  return (
    <Fragment>
      <div className={root}>
        <div className={color}>{miniColorsBoxes}</div>
        <h5 className={title}>
          {" "}
          {paletteName} <span>{emoji}</span>
        </h5>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(MiniPalette);
