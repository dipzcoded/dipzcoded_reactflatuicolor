import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { generatePalette } from "../colorHelpers";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import Navbar from "./Navbar";
import seedPalette from "../seed";
import "../styled/Palette.css";

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

  console.log(colorShades);

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
    <div className="Palette">
      {/* Navbar Component */}
      <Navbar onSelectChange={onSelectChange} showSlider={false} />
      <h1>This is a single color pages</h1>
      {/* Color boxes component */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* Palette Footer */}
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default withRouter(SingleColorPalette);
