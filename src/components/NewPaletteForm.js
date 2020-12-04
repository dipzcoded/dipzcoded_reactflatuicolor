import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableColorList from "./DraggableColorList";
import { ValidatorForm } from "react-material-ui-form-validator";
import arrayMove from "array-move";
import PaletteFormNav from "./PaletteFormNav";
import ColorPicker from "./ColorPicker";
import styles from "../jss/NewPaletteFormStyles";
import SeedColors from "../seed";

const NewPaletteForm = ({ classes, savePalette, history, palettes, max }) => {
  const [open, setOpen] = useState(true);
  const [currentColor, setColor] = useState("purple");
  const [colors, setArrcolors] = useState(SeedColors[0].colors);
  const [pcName, setPC] = useState({
    colorName: "",
    palettesName: "",
  });

  const { colorName, palettesName } = pcName;
  const paletteIsFull = colors.length >= max;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onChangeColor = (color) => {
    setColor(color.hex);
  };

  const addNewColor = () => {
    const newColor = { color: currentColor, name: colorName };
    setArrcolors([...colors, newColor]);
    setPC({ colorName: "" });
  };

  const onChange = (e) => {
    setPC({ ...pcName, [e.target.name]: e.target.value });
  };

  const onSavePalette = (emoji) => {
    const newPalette = {};
    newPalette.paletteName = palettesName;
    newPalette.id = palettesName.toLowerCase().replace(/ /g, "-");
    newPalette.emoji = emoji;
    newPalette.colors = colors;
    savePalette(newPalette);
    history.push("/");
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      if (colors.length > 0) {
        const color = colors.find(
          ({ name }) => name.toLowerCase() === value.toLowerCase()
        );
        if (color) {
          return false;
        }
        return true;
      }
      return true;
    });

    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      if (colors.length > 0) {
        const color = colors.find(({ color }) => color === currentColor);
        if (color) {
          return false;
        }
        return true;
      }
      return true;
    });
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteUnique", (value) => {
      if (palettes.length !== 0 && value !== undefined) {
        const paletteFound = palettes.find(
          ({ paletteName }) => paletteName.toLowerCase() === value.toLowerCase()
        );
        if (paletteFound) {
          return false;
        }
        return true;
      }

      return true;
    });
  });

  const onDeleteColor = (colorName) => {
    setArrcolors(colors.filter(({ name }) => name !== colorName));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setArrcolors(arrayMove(colors, oldIndex, newIndex));
  };

  const onClear = () => {
    setArrcolors([]);
  };

  const onRandom = () => {
    const allColors =
      palettes.length === 0
        ? SeedColors.map((p) => p.colors).flat()
        : palettes.map((p) => p.colors).flat();
    let rand;
    let randomColor;
    let colorIsDuplicate = true;
    while (colorIsDuplicate) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      colorIsDuplicate = colors.some(
        (color) => color.name === randomColor.name
      );
      console.log(randomColor);
    }

    setArrcolors([...colors, randomColor]);
  };

  return (
    <div className={classes.root}>
      {/*nav bar  */}
      <PaletteFormNav
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        onSavePalette={onSavePalette}
        onChange={onChange}
        palettesName={palettesName}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={onClear}
              className={classes.button}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={onRandom}
              disabled={paletteIsFull}
              className={classes.button}
            >
              Random Color
            </Button>
          </div>
          {/* chrome picker  */}
          <ColorPicker
            paletteIsFull={paletteIsFull}
            currentColor={currentColor}
            onChangeColor={onChangeColor}
            addNewColor={addNewColor}
            colorName={colorName}
            onChange={onChange}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* draggable color component */}
        <DraggableColorList
          onDeleteColor={onDeleteColor}
          colors={colors}
          axis="xy"
          onSortEnd={onSortEnd}
          distance={20}
        />
      </main>
    </div>
  );
};

NewPaletteForm.defaultProps = {
  max: 20,
};

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
