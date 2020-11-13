import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { generatePalette } from "../colorHelpers";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import Navbar from "./Navbar";
import seedPalette from "../seed";
import "../styled/Palette.css";
import "../styled/ColorBox.css";

const SingleColorPalette = ({ match }) => {
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
    />
  ));

  const onSelectChange = (value) => {
    setFormat(value);
  };

  return (
    <div className="SingleColorPalette Palette">
      {/* Navbar Component */}
      <Navbar onSelectChange={onSelectChange} showSlider={false} />
      {/* Color boxes component */}
      <div className="Palette-colors">
        {colorBoxes}
        {/* Add a go back button */}
        <div className="go-back Colorbox">
          <Link
            style={{
              textDecoration: "none",
            }}
            to={`/palette/${match.params.paletteId}`}
            className="back-button"
          >
            Go Back
          </Link>
        </div>
      </div>
      {/* Palette Footer */}
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default withRouter(SingleColorPalette);
