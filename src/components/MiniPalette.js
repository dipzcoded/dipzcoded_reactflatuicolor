import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
    "& h1": {
      color: "#ffffff",
    },
  },
  secondary: {
    backgroundColor: "pink",
    "& h1": {
      color: "yellow",
    },
  },
};

const MiniPalette = ({ classes: { main, secondary } }) => {
  return (
    <Fragment>
      <div className={main}>
        <h1>Mini Palette</h1>
        <section className={secondary}>
          lorddddddddddddddddddddd
          <h1>Damn it working!</h1>
        </section>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(MiniPalette);
