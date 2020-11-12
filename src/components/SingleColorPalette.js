import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { generatePalette } from "../colorHelpers";
import ColorBox from "./ColorBox";
import seedPalette from "../seed";
import "../styled/Palette.css";

const SingleColorPalette = ({ match }) => {
  const [format, setFormat] = useState("hex");

  const paletteMatch = seedPalette.find(
    (color) => color.id === match.params.paletteId
  );

  const gatherShades = (palette, colorid) => {
    //   return all shades of given color
    let shades = [];
    let allColors = palette.colors;
    for (let level in allColors) {
      shades.push(allColors[level].find((el) => el.id === colorid));
    }
    return shades.slice(1);
  };

  let colorShades;
  if (paletteMatch) {
    const palette = generatePalette(paletteMatch);
    colorShades = gatherShades(palette, match.params.colorId);
  }

  console.log(colorShades);

  const colorBoxes = colorShades.map((color) => (
    <ColorBox
      key={color.name}
      name={color.name}
      bgColor={color.hex}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
      <h1>This is a single color pages</h1>
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default withRouter(SingleColorPalette);
