import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "../jss/ColorboxStyles";

const ColorBox = ({
  classes: {
    copyText,
    colorName,
    seeMoreBtn,
    copyBtn,
    colorBox,
    boxContent,
    copyOverlay,
    showOverlay,
    copyMessage,
    showCopyMsg,
  },
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
          className={`${copyOverlay} ${copied && showOverlay}`}
        />
        <div className={`${copyMessage}  ${copied && showCopyMsg}`}>
          <h1>copied!</h1>
          <p className={copyText}>{bgColor}</p>
        </div>
        <div>
          <div className={boxContent}>
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
