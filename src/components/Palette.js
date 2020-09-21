import React from 'react'
import ColorBox from './ColorBox';
import '../styled/Palette.css';

const Palette = ({colors}) => {

    // creating colorboxes
    const colorBoxes =  colors.map((item) => (
        <ColorBox bgColor={item.color} key={item.name} name={item.name} />
    ));

    return (
        <div className="Palette">
            {/* Navbar Component */}
            <div className="Palette-colors">
                {/* Colorbox Component */}
                {colorBoxes}
            </div>
            {/* Footer Component */}
        </div>
    )
}

export default Palette
