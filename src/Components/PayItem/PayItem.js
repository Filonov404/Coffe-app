import React from 'react';
import payDecor from '../../images/payDecor.svg'
import '../../Components/PayItem/PayDecor.Module.css'
import Cart from "../Cart/Cart";

const PayItem = (props) => {

    return (
        <div className="payWrapper">
            <div>
                <img className="payDecor" src={payDecor} alt="payDecor"/>
                <span>{props.price}</span>
            </div>
        </div>
    );
};

export default PayItem;
