import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import seedPalette from "../seed";
import { generatePalette } from "../colorHelpers";
import "../styled/Palette.css";

const Palette = ({ match }) => {
  // finding the palette based on url params from the seed file
  const paletteMatch = seedPalette.find(
    (color) => color.id === match.params.id
  );
  console.log(paletteMatch);
  // passing the match palette to generatePalette func to create shades of colors
  const { colors, paletteName, emoji, id } = generatePalette(paletteMatch);

  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  };

  const onSelectChange = (value) => {
    setFormat(value);
  };

  // creating colorboxes
  const colorBoxes = colors[level].map((item) => (
    <ColorBox
      bgColor={item[format]}
      key={item.id}
      name={item.name}
      colorId={item.id}
      paletteId={id}
      showLink={true}
    />
  ));

  return (
    <div className="Palette">
      {/* Navbar Component */}
      <Navbar
        level={level}
        onChangeLevel={changeLevel}
        onSelectChange={onSelectChange}
      />
      <div className="Palette-colors">
        {/* Colorbox Component */}
        {colorBoxes}
      </div>
      {/* Footer Component */}
      <footer className="Palette__footer">
        {paletteName}
        <span className="Palette__emoji">{emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;
