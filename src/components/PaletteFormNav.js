import React, { useState } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PaletteMetalForm from "./PaletteMetalForm";
import styles from "../jss/PaletteFormNavStyles";

const PaletteFormNav = ({
  open,
  handleDrawerOpen,
  onSavePalette,
  onChange,
  palettesName,
  classes: { appBar, appBarShift, hide, menuButton, navBtns, root, button },
}) => {
  const [formShowing, setFormShowing] = useState(false);

  const onClick = () => {
    handleDrawerOpen();
  };

  const onChangeVal = (e) => {
    onChange(e);
  };

  const showFormDailog = (e) => {
    setFormShowing(true);
  };

  const hideFormDialog = (e) => {
    setFormShowing(false);
  };

  return (
    <div className={root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(appBar, {
          [appBarShift]: open,
        })}
        color="default"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onClick}
            edge="start"
            className={clsx(menuButton, open && hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={navBtns}>
          {/* */}

          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <Button className={button} variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
          <Button
            className={button}
            variant="contained"
            color="primary"
            onClick={showFormDailog}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetalForm
          onChangeVal={onChangeVal}
          onSavePalette={onSavePalette}
          palettesName={palettesName}
          hideFormDialog={hideFormDialog}
        />
      )}
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
