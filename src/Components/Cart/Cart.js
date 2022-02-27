import React from 'react';
import Badge from "react-bootstrap/cjs/Badge";
import {NavLink} from "react-router-dom";

const Cart = () => {
    return (
        <div className="d-flex justify-content-end">
            <p className="m-0 px-2">Корзина</p>
          <Badge bg="dark">1</Badge>
        </div>
    );
};

console.log(Cart)
export default Cart;
