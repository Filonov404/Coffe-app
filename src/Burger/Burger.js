import React, {useState} from "react";
import { Offcanvas } from "react-bootstrap";
import NavItems from "./NavItems/NavItems";


function Burger() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   return (
        <>
            <button className="btn" onClick={handleShow}></button>
            <Offcanvas cl show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton color="#fff">
                    <Offcanvas.Title>Выбрать продукт</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <NavItems />
                </Offcanvas.Body>
            </Offcanvas>
        </>
  );
}

export default Burger;
