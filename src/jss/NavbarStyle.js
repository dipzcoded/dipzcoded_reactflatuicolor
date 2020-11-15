export default {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },

  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "#000",
    },
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",

    "& .rc-slider-rail": {
      height: "8px !important",
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent !important",
    },
    "& .rc-slider-handle ": {
      backgroundColor: "green !important",
      outline: "none !important",
      border: "2px solid green !important",
      boxShadow: "none !important",
      height: "13px",
      width: "13px",
      marginLeft: "-7px",
      marginTop: "-3px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};
