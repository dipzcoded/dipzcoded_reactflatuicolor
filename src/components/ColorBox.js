import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../styled/ColorBox.css'

const ColorBox = ({bgColor, name}) => {
    return (
        <CopyToClipboard text={bgColor}>
        <div style={{
            backgroundColor : bgColor
        }} className="Colorbox">
            <div className="Colorbox__copy-container">
                <div className="Colorbox__boxctn">
    <span>{name}</span>
                </div>
                <button className="Colorbox__copybtn">Copy</button>
            </div>
            <span className="Colorbox__seemore">More</span>
        </div>
        </CopyToClipboard>
    )
}

export default ColorBox
