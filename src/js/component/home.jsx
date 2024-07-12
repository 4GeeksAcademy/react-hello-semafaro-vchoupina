import React, { useState } from "react";
import "../../styles/index.css";


const TrafficLight = () => {
    const [selectedColor, setSelectedColor] = useState('none');
    const [showPurple, setShowPurple] = useState(false);

    const red = selectedColor === 'red' ? 'light red selected-red' : 'light red';
    const yellow = selectedColor === 'yellow' ? 'light yellow selected-yellow' : 'light yellow';
    const green = selectedColor === 'green' ? 'light green selected-green' : 'light green';
    const purple = selectedColor === "purple" ? "light purple selected-purple" : "light purple";

    const changeColor = (e) => {
        setSelectedColor(e.target.id);
        console.log(e.target.id);
    }

    const changeColorRandom = () => {
        if (selectedColor === 'red') {
            setSelectedColor('yellow');
        } else if (selectedColor === 'yellow') {
            setSelectedColor('green');
        } else if (selectedColor === 'green') {
            setSelectedColor('purple');
        }
        else if (selectedColor === 'purple') {
            setSelectedColor('red');
        }
    }

    const toggleShowPurple = () => {
        setShowPurple(!showPurple);
    };

    const apagarLuces = () => {
        if (selectedColor === 'none') {
            setSelectedColor('red');
        } else {
            setSelectedColor('none');
        }
    };

    return (
        <>
            <div className="container stick bg-dark"></div>
            <div className="container traffic-light bg-dark">
                <div onClick={changeColor} className={red} id="red"></div>
                <div onClick={changeColor} className={yellow} id="yellow"></div>
                <div onClick={changeColor} className={green} id="green"></div>
                {showPurple && <div onClick={changeColor} className={purple} id="purple"></div>}
            </div>

            <div className="container-mando">
                <div className="mando">
                    <div className="top">
                        <div className="marca"> TrafficLight </div>
                        <button className="boton power" onClick={apagarLuces} title="Turn ON/OFF Lights">
                            <i className="fa fa-power-off fa-2x"></i>
                        </button>
                    </div>

                    <div className="container-buttons">
                        <a onClick={changeColorRandom}><span></span><span></span><span></span><span></span>
                            SWITCH LIGHTS
                        </a>
                        <a onClick={toggleShowPurple}><span></span><span></span><span></span><span></span>
                            {showPurple ? "HIDE PURPLE" : "SHOW PURPLE"}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrafficLight;
