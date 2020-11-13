import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import Chroma from "chroma-js";
import { withStyles } from "@material-ui/core/styles";
import "../styled/ColorBox.css";

const styles = {
  colorBox: {
    backgroundColor: ({ bgColor }) => bgColor,
    width: "20%",
    height: ({ biggerSize }) => (biggerSize ? biggerSize : "25%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4.4px",

    "&:hover button": {
      opacity: 1,
    },
  },
  copyText: {
    color: ({ bgColor }) =>
      Chroma(bgColor).luminance() >= 0.72 ? "rgba(0,0,0,0.65)" : "#fff",
  },

  colorName: {
    color: ({ bgColor }) =>
      Chroma(bgColor).luminance() <= 0.2 ? "#fff" : "rgba(0,0,0,0.65)",
  },

  seeMoreBtn: {
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    color: ({ bgColor }) =>
      Chroma(bgColor).luminance() >= 0.65 ? "rgba(0,0,0,0.65)" : "#fff",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyBtn: {
    color: ({ bgColor }) =>
      Chroma(bgColor).luminance() >= 0.65 ? "rgba(0,0,0,0.65)" : "#fff",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    opacity: 0,
    transition: "opacity 0.4s ease-in",
  },
};

const ColorBox = ({
  classes: { copyText, colorName, seeMoreBtn, copyBtn, colorBox },
  bgColor,
  name,
  colorId,
  paletteId,
  showLink,
  biggerSize,
}) => {
  const [copied, setCopied] = useState(false);
  const onCopyState = () => {
    setCopied(!copied);
    setTimeout(() => {
      setCopied(copied);
    }, 1500);
  };

  return (
    <CopyToClipboard text={bgColor} onCopy={onCopyState}>
      <div className={colorBox}>
        <div
          style={{ backgroundColor: bgColor }}
          className={`Colorbox__overlay ${copied && "show"}`}
        />
        <div className={`Colorbox__copymsg  ${copied && "show"}`}>
          <h1>copied!</h1>
          <p className={copyText}>{bgColor}</p>
        </div>
        <div className="Colorbox__copy-container">
          <div className="Colorbox__boxctn">
            <span className={colorName}>{name}</span>
          </div>
          <button className={copyBtn}>Copy</button>
        </div>
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={seeMoreBtn}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default withStyles(styles)(ColorBox);
