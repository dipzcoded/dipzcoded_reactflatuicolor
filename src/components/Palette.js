import React, {useState} from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import '../styled/Palette.css';

const Palette = ({palette : {colors}}) => {

    const [level, setLevel] = useState(500);

    // creating colorboxes
    const colorBoxes =  colors[level].map((item) => (
    <ColorBox bgColor={item.hex} key={item.name} name={item.name} />
    ));

    const changeLevel = (newLevel) => {
        setLevel(newLevel);
        // console.log(newLevel)
    }

    return (
        <div className="Palette">
            
            {/* Navbar Component */}
            <Navbar level={level} onChangeLevel={changeLevel} />
            <div className="Palette-colors">
                {/* Colorbox Component */}
                {colorBoxes}
            </div>
            {/* Footer Component */}
        </div>
    )
}

export default Palette
