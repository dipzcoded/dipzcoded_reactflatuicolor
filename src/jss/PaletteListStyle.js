import sizes from "./mediaSizes";
import svg from "./Sun-Tornado.svg";
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
    ".fade-enter": {
      opacity: 0,
    },
    ".fade-enter-active": {
      opacity: 1,
      transition: "opacity 500ms ease-in",
    },
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#03a2ec",
    backgroundImage: `url(${svg})`,
    overflow: "overlay",
    paddingBottom: "2rem",
  },

  container: {
    width: "60%",
    margin: "0, auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "#fff",
    },
  },
  paletteGrid: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,1fr)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "1fr",
      gridGap: "1rem",
    },
  },

  heading: {
    fontSize: "2rem",
  },
};
