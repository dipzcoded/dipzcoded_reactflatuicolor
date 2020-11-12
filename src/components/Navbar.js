import React, { useState } from "react";
import "../styled/Navbar.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const Navbar = ({ level, onChangeLevel, onSelectChange, showSlider }) => {
  const [format, setFormat] = useState("hex");
  const [open, setOpen] = useState(false);

  const onFormatChange = (e) => {
    setFormat(e.target.value);
    onSelectChange(e.target.value);
    setOpen(!open);
  };

  const onClose = (e) => {
    setOpen(!open);
  };
  return (
    <header className="Navbar">
      <div className="Navbar__logo">
        <Link to="/">reactcolorpicker</Link>
      </div>
      {/* slider component */}
      {showSlider && (
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
      )}
      {/* Select Container */}
      <div className="Navbar__selectContainer">
        <Select value={format} onChange={onFormatChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGB - rgb(255,255,255,1.0)</MenuItem>
        </Select>
      </div>

      {/* SnackBar */}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={3000}
        message={
          <span id="message">Format Changed To {format.toUpperCase()}</span>
        }
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        action={[
          <IconButton
            onClick={onClose}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
        onClose={onClose}
      />
    </header>
  );
};

export default Navbar;
