import React, { useState, Fragment } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";

const PaletteFormNav = ({
  classes,
  open,
  handleDrawerOpen,
  onSavePalette,
  onChange,
  palettesName,
}) => {
  const onClick = () => {
    handleDrawerOpen();
  };

  const onSubmit = (e) => {
    // e.prevendDefault();
    onSavePalette();
  };

  const onChangeVal = (e) => {
    onChange(e);
  };

  return (
    <Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color="default"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onClick}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={onSubmit}>
            <TextValidator
              label="Palette Name"
              value={palettesName}
              onChange={onChangeVal}
              name="palettesName"
              validators={["required", "isPaletteUnique"]}
              errorMessages={[
                "Enter Palette Name",
                "palette found with that name",
              ]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
            <Link to="/">
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default PaletteFormNav;
