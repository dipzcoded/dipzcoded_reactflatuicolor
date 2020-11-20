import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import DraggableColorList from "./DraggableColorList";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import arrayMove from "array-move";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const NewPaletteForm = ({ savePalette, history, palettes }) => {
  // useeffects

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [currentColor, setColor] = useState("purple");
  const [colors, setArrcolors] = useState([]);
  const [pcName, setPC] = useState({
    colorName: "",
    palettesName: "",
  });

  const { colorName, palettesName } = pcName;

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

  const onSavePalette = () => {
    const newPalette = {};
    newPalette.paletteName = palettesName;
    newPalette.id = palettesName.toLowerCase().replace(/ /g, "-");
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
  //   console.log(color);
  return (
    <div className={classes.root}>
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
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={onSavePalette}>
            <TextValidator
              label="Palette Name"
              value={palettesName}
              onChange={onChange}
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
          </ValidatorForm>
        </Toolbar>
      </AppBar>
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
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>
        {/* chrome picker  */}
        <ChromePicker color={currentColor} onChangeComplete={onChangeColor} />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={colorName}
            name="colorName"
            onChange={onChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "this field is required",
              "Color name has to be unique",
              "Color already used!",
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            style={{
              background: currentColor,
            }}
            type="submit"
          >
            Add Color
          </Button>
        </ValidatorForm>
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
        />
      </main>
    </div>
  );
};

export default NewPaletteForm;
