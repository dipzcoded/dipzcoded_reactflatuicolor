import React from 'react'
import '../styled/ColorBox.css'

const ColorBox = ({bgColor, name}) => {
    return (
        <div style={{
            backgroundColor : bgColor
        }} className="Colorbox">
            <span>MORE</span>
    <span>{name}</span>
        </div>
    )
}

export default ColorBox
