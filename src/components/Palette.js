import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import seedPalette from "../seed";
import { generatePalette } from "../colorHelpers";
import { withStyles } from "@material-ui/core/styles";
import styles from "../jss/PaletteStyle";

const Palette = ({ classes: { palette, paletteColors }, match }) => {
  // finding the palette based on url params from the seed file
  const paletteMatch = seedPalette.find(
    (color) => color.id === match.params.id
  );

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
    <div className={palette}>
      {/* Navbar Component */}
      <Navbar
        level={level}
        onChangeLevel={changeLevel}
        onSelectChange={onSelectChange}
        showSlider={true}
      />
      <div className={paletteColors}>
        {/* Colorbox Component */}
        {colorBoxes}
      </div>
      {/* Footer Component */}
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default withStyles(styles)(Palette);
