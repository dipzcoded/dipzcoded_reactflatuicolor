import React, { Fragment, memo } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import styles from "../jss/MiniPaletteStyle";
import DeleteIcon from "@material-ui/icons/Delete";
const areEqual = (prevProps, nextProps) => true;
const MiniPalette = memo(
  ({
    classes: { root, color, title, emojis, miniColor, deleteIcon },
    palette: { paletteName, emoji, colors, id },
    history,
    openDialog,
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

    const onRemovePalette = (e) => {
      e.stopPropagation();
      // deletePalette(id);
      openDialog(id);
    };

    console.log("RENDERING:" + paletteName);

    return (
      <Fragment>
        <div className={root} onClick={onClick}>
          <DeleteIcon className={deleteIcon} onClick={onRemovePalette} />

          <div className={color}>{miniColorsBoxes}</div>
          <h5 className={title}>
            {" "}
            {paletteName} <span className={emojis}>{emoji}</span>
          </h5>
        </div>
      </Fragment>
    );
  },
  areEqual
);

export default withStyles(styles)(withRouter(MiniPalette));
