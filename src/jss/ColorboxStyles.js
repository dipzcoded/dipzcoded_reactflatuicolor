import Chroma from "chroma-js";
import sizes from "./mediaSizes";
export default {
  colorBox: {
    backgroundColor: ({ bgColor }) => bgColor,
    width: "20%",
    height: ({ biggerSize }) => (biggerSize ? biggerSize : "25%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4.4px",

    "&:hover button": {
      opacity: 1,
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: ({ biggerSize }) => (biggerSize ? "33.333%" : "20%"),
    },
    [sizes.down("md")]: {
      width: "50%",
      height: ({ biggerSize }) => (biggerSize ? "20%" : "10%"),
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: ({ biggerSize }) => (biggerSize ? "10%" : "5%"),
    },
  },
  copyText: {
    color: ({ bgColor }) =>
      Chroma(bgColor).luminance() >= 0.72 ? "rgba(0,0,0,0.65)" : "#fff",
    [sizes.down("xs")]: {
      fontSize: "4rem",
    },
  },

  colorName: {
    color: ({ bgColor }) =>
      Chroma(bgColor).luminance() <= 0.2 ? "#fff" : "rgba(0,0,0,0.65)",
  },

  seeMoreBtn: {
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    color: ({ bgColor }) =>
      Chroma(bgColor).luminance() >= 0.65 ? "rgba(0,0,0,0.65)" : "#fff",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyBtn: {
    color: ({ bgColor }) =>
      Chroma(bgColor).luminance() >= 0.65 ? "rgba(0,0,0,0.65)" : "#fff",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    opacity: 0,
    transition: "opacity 0.4s ease-in",
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "0 0 10px 10px",
    color: "#000",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0.1)",
    transition: "transform 0.6s ease-in-out",
  },

  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },

  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    color: "#fff",
    opacity: "0",
    zIndex: "0",
    transition: "all 0.4s ease-in-out",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px #000",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      marginBottom: "0",
      padding: "1rem",
      width: "100%",
      [sizes.down("xs")]: {
        fontSize: "6rem",
      },
    },
  },

  showCopyMsg: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transitionDelay: "0.3s",
  },
};
