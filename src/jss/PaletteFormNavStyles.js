import { DRAWER_WIDTH } from "../constants";
import sizes from "./mediaSizes";

const styles = (theme) => ({
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
    alignItems: "center",
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
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
  navBtns: {
    marginRight: "1rem",
    [sizes.down("xs")]: {
      marginRight: "0.5rem",
    },
  },
  button: {
    margin: "0 0.5rem",
    [sizes.down("xs")]: {
      margin: "0 0.2rem",
      padding: "0.3rem",
    },
  },
});

export default styles;
