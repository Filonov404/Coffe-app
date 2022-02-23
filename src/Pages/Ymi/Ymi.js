import React from 'react';
import '../Ymi/Ymi.Module.css';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import Cruasan from '../../images/croissant 1.svg';
import Truffele from '../../images/Truffele.svg';
import Syrniki from '../../images/Syrniki.svg'
import Sandwich from '../../images/Sandwich.svg'
import PayItem from "../../Components/PayItem/PayItem";

const Ymi = () => {
    return (
        <div>
            <h1 className="titleYmi">Добавь закуски</h1>
            <div className="nav">
                <div className="item">
                    <NavLink to="#">Круассан</NavLink>
                    <img className="imgYmi" src={Cruasan} alt="Cruasan"/>
                </div>
                <div className="item">
                    <NavLink to="#">Трюфели</NavLink>
                    <img className="imgYmi" src={Truffele} alt="Truffele"/>
                </div>
                <div className="item">
                    <NavLink to="#">Сырники</NavLink>
                    <img className="imgYmi" src={Syrniki} alt="Syrniki"/>
                </div>
                <div className="item">
                    <NavLink to="#">Сэндвич <br/>
                         с ветчиной
                        <br/>и сыром</NavLink>
                    <img className="imgYmi" src={Sandwich} alt="Sandwich"/>
                </div>
            </div>
            <PayItem/>
        </div>
    );
};

export default Ymi;
