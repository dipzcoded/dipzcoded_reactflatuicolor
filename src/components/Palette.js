import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "../styled/Palette.css";

const Palette = ({ palette: { colors, paletteName, emoji } }) => {
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
    <ColorBox bgColor={item[format]} key={item.id} name={item.name} />
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
        {/* <span className="Palette__emoji">{emoji}</span> */}
      </footer>
    </div>
  );
};

export default Palette;
