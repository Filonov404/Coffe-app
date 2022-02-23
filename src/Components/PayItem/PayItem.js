import React from 'react';
import payDecor from '../../images/payDecor.svg'
import '../../Components/PayItem/PayDecor.Module.css'

const PayItem = () => {
    return (
        <div className="payWrapper">
            <img className="payDecor" src={payDecor} alt="payDecor"/>
            <span>200 руб.</span>
        </div>
    );
};

export default PayItem;
