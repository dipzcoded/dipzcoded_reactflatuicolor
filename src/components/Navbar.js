import React from 'react'
import '../styled/Navbar.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Navbar = ({level, onChangeLevel}) => {

  

    return (
        <header className="Navbar">
                <div className="Navbar__logo">
                    <a href="#">reactcolorpicker</a>
                </div>
                {/* slider component */}
                <div className="Navbar__slider-container">
    <span>Level : {level}</span>
                <div className="Navbar__slider">
            <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={onChangeLevel} />

            </div>
                </div>
        </header>
    )
}

export default Navbar
