import React from 'react';
import '../ Syrup/Syrop.Module.css'
import syrop from '../../images/syrup.svg'
import {NavLink} from "react-router-dom";
import PayItem from "../../Components/PayItem/PayItem";

const Syrup = () => {
    return (
        <div>
            <h1 className="titleSyr">Выбери сироп</h1>
            <img className="syropImg" src={syrop} alt="syrop"/>
            <div className="nav">
                <div className="item">
                    <NavLink to="#">Кленовый</NavLink>
                </div>
                <div className="item">
                    <NavLink to="#">Фисташковый</NavLink>
                </div>
                <div className="item">
                    <NavLink to="#">Кокосовый</NavLink>
                </div>
                <div className="item">
                    <NavLink to="#">Шоколадный</NavLink>
                </div>
                <div className="item">
                    <NavLink to="#">Мятный</NavLink>
                </div>
                <PayItem/>
                <button className="btnNext">далее</button>
            </div>
        </div>
    );
};

export default Syrup;
