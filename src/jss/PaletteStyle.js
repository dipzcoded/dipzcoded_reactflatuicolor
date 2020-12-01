import sizes from "./mediaSizes";

export default {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  paletteColors: {
    height: "90%",
  },
  backBtn: {
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
    opacity: 1,
    transition: "opacity 0.4s ease-in",
    color: "#fff",
    textDecoration: "none",
  },

  goBack: {
    backgroundColor: "#000",
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4.4px",
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.333%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%  ",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%",
    },
  },
};
