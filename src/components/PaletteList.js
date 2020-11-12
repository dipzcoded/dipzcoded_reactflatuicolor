import React from "react";
import seedPalette from "../seed";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

const PaletteList = () => {
  return (
    <div>
      <MiniPalette />
      {seedPalette.map((palette) => (
        <p>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  );
};

export default PaletteList;
