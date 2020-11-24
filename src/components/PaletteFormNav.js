import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import PaletteMetalForm from "./PaletteMetalForm";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      height: "64px",
    }),
    flexDirection: "row",
    justifyContent: "space-between",
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
  navBtns: {},
}));

const PaletteFormNav = ({
  open,
  handleDrawerOpen,
  onSavePalette,
  onChange,
  palettesName,
}) => {
  const { appBar, appBarShift, hide, menuButton, navBtns, root } = useStyles();
  // const theme = useTheme();

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
          <PaletteMetalForm
            onChangeVal={onChangeVal}
            onSubmit={onSubmit}
            palettesName={palettesName}
          />
          <Link to="/">
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
        </div>
      </AppBar>
    </div>
  );
};

export default PaletteFormNav;
