import React from "react";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4.4px",
  },
};

const DraggableColorBox = ({ classes: { root }, color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={root}
    >
      {color}
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);
