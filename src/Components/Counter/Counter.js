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
        <div className="d-flex justify-content-between border rounded-3 m-0-a mt-1 mb-1  w-25">
            <button className="border-0 mx-2 bg-white" onClick={handleDecrement}>-</button>
            <span className="counter">{count}</span>
            <button className="border-0 mx-2 bg-white" onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Counter;
