import React, { useState } from "react";
import "../styled/Navbar.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Navbar = ({ level, onChangeLevel, onSelectChange }) => {
  const [format, setFormat] = useState("hex");

  const onFormatChange = (e) => {
    setFormat(e.target.value);
    onSelectChange(e.target.value);
  };

  return (
    <header className="Navbar">
      <div className="Navbar__logo">
        <a href="!#">reactcolorpicker</a>
      </div>
      {/* slider component */}
      <div className="Navbar__slider-container">
        <span>Level : {level}</span>
        <div className="Navbar__slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={onChangeLevel}
          />
        </div>
      </div>
      {/* Select Container */}
      <div className="Navbar__selectContainer">
        <Select value={format} onChange={onFormatChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGB - rgb(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default Navbar;
