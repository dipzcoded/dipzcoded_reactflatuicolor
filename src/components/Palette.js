import React, {useState} from 'react'
import ColorBox from './ColorBox';
import '../styled/Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Palette = ({palette : {colors}}) => {

    const [level, setLevel] = useState(500);

    // creating colorboxes
    const colorBoxes =  colors[level].map((item) => (
    <ColorBox bgColor={item.hex} key={item.name} name={item.name} />
    ));

    const changeLevel = (newLevel) => {
        setLevel(newLevel);
    }

    return (
        <div className="Palette">
            <div className="Palette__slider">
            <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
            </div>
            
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
