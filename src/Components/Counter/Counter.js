import React from 'react';
import {useState} from "react";
import '../Counter/Counter.module.css'

function Counter() {
    const [count, setCount] = useState(0);


    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };
    return (
        <div className="counter">
            <button className="btnCount" onClick={handleDecrement}>-</button>
            <span className="Count">{count}</span>
            <button className="btnCount" onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Counter;
