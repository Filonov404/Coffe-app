import React from 'react';
import { useState } from 'react';
import Counter from "../../Components/Counter/Counter";
import './Volume.Module.css'
import Glass_M from '../../images/Glass_M.svg'
import Glass_L from '../../images/Glass_L.svg'
import Glass_XL from '../../images/Glass_XL.svg'
import PayItem from "../../Components/PayItem/PayItem";

const Volume = () => {
    const texts = ['text1', 'text2', 'text3'];
    const [value, setValue] = useState('');

    const options = texts.map((text, index) => {
        return <button key={index} value={index}>{text}</button>;
    });

    return (
        <div>
            <h1 className="titleYmi">Выбери объем</h1>
            <h2 className="titleVol">Капучино</h2>
            <div className="volume-wrapper">
                <div>
                    <img className="Volume" src={Glass_M} alt="Glass_M"/>
                </div>
                <div>
                    <img className="Volume" src={Glass_L} alt="Glass_L"/>
                </div>
                <div>
                    <img className="Volume" src={Glass_XL} alt="Glass_XL"/>
                </div>

            </div>
            <button value={value} onChange={event => setValue(event.target.value)}>
                {options}
            </button>
            <Counter />
            <p>
                капучино {texts[value]}
            </p>
            <PayItem/>
        </div>
    );
};

export default Volume;

