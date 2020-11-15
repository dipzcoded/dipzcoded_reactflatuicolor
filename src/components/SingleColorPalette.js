import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { generatePalette } from "../colorHelpers";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import Navbar from "./Navbar";
import seedPalette from "../seed";
import { withStyles } from "@material-ui/core/styles";

const styles = {
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
  },
};

const SingleColorPalette = ({
  classes: { backBtn, goBack, palette, paletteColors },
  match,
}) => {
  const [format, setFormat] = useState("hex");

  const paletteMatch = seedPalette.find(
    (color) => color.id === match.params.paletteId
  );

  const gatherShades = (colors, colorid) => {
    //   return all shades of given color
    let shades = [];
    let allColors = colors;
    for (let level in allColors) {
      shades.push(allColors[level].find((el) => el.id === colorid));
    }
    return shades.slice(1);
  };

  let colorShades;
  const { colors, paletteName, emoji } = generatePalette(paletteMatch);
  colorShades = gatherShades(colors, match.params.colorId);

  const colorBoxes = colorShades.map((color) => (
    <ColorBox
      key={color.name}
      name={color.name}
      bgColor={color[format]}
      showLink={false}
      biggerSize="50%"
    />
  ));

  const onSelectChange = (value) => {
    setFormat(value);
  };

  return (
    <div className={palette}>
      {/* Navbar Component */}
      <Navbar onSelectChange={onSelectChange} showSlider={false} />
      {/* Color boxes component */}
      <div className={paletteColors}>
        {colorBoxes}
        {/* Add a go back button */}
        <div className={goBack}>
          <Link to={`/palette/${match.params.paletteId}`} className={backBtn}>
            Go Back
          </Link>
        </div>
      </div>
      {/* Palette Footer */}
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default withStyles(styles)(withRouter(SingleColorPalette));
