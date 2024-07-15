import React, { useState } from "react";
import "../../styles/index.css";

const TrafficLight = () => {
    // Estado para a cor selecionada e para mostrar ou esconder a luz roxa
    const [selectedColor, setSelectedColor] = useState('none');
    const [showPurple, setShowPurple] = useState(false);

    // Função para alterar a cor quando uma luz é clicada
    const changeColor = (e) => {
        setSelectedColor(e.target.id);
    };

    // Função para alternar a cor de forma sequencial
    const changeColorRandom = () => {
        if (selectedColor === 'red') {
            setSelectedColor('yellow');
        } else if (selectedColor === 'yellow') {
            setSelectedColor('green');
        } else if (selectedColor === 'green') {
            setSelectedColor('purple');
        } else {
            setSelectedColor('red');
        }
    };

    // Função para mostrar ou esconder a luz roxa
    const toggleShowPurple = () => {
        setShowPurple(!showPurple);
    };

    // Função para ligar ou desligar todas as luzes
    const apagarLuces = () => {
        setSelectedColor(selectedColor === 'none' ? 'red' : 'none');
    };

    return (
        <>
            <div className="container stick"></div>
            <div className="container traffic-light">
                <div onClick={changeColor} className={`light red ${selectedColor === 'red' ? 'selected' : ''}`} id="red"></div>
                <div onClick={changeColor} className={`light yellow ${selectedColor === 'yellow' ? 'selected' : ''}`} id="yellow"></div>
                <div onClick={changeColor} className={`light green ${selectedColor === 'green' ? 'selected' : ''}`} id="green"></div>
                {showPurple && (
                    <div onClick={changeColor} className={`light purple ${selectedColor === "purple" ? "selected" : ""}`} id="purple"></div>
                )}
            </div>

            <div className="container-mando">
                <div className="mando">
                    <div className="top">
                        <div className="marca">TrafficLight</div>
                        <button className="boton power" onClick={apagarLuces} title="Turn ON/OFF Lights">
                            <i className="fa fa-power-off fa-2x"></i>
                        </button>
                    </div>

                    <div className="container-buttons">
                        <button onClick={changeColorRandom} className="button">
                            SWITCH LIGHTS
                        </button>
                        <button onClick={toggleShowPurple} className="button">
                            {showPurple ? "HIDE PURPLE" : "SHOW PURPLE"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrafficLight;
