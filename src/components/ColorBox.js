import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import "../styled/ColorBox.css";

const ColorBox = ({ bgColor, name, colorId, paletteId, showLink }) => {
  const [copied, setCopied] = useState(false);
  const onCopyState = () => {
    setCopied(!copied);
    setTimeout(() => {
      setCopied(copied);
    }, 1500);
  };

  return (
    <CopyToClipboard text={bgColor} onCopy={onCopyState}>
      <div
        style={{
          backgroundColor: bgColor,
        }}
        className="Colorbox"
      >
        <div
          style={{ backgroundColor: bgColor }}
          className={`Colorbox__overlay ${copied && "show"}`}
        />
        <div className={`Colorbox__copymsg  ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{bgColor}</p>
        </div>
        <div className="Colorbox__copy-container">
          <div className="Colorbox__boxctn">
            <span>{name}</span>
          </div>
          <button className="Colorbox__copybtn">Copy</button>
        </div>
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="Colorbox__seemore">More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
