import React, {useState} from 'react';
import '../ Syrup/Syrop.Module.css'
import syrop from '../../images/syrup.svg'
import PayItem from "../../Components/PayItem/PayItem";
import {Col, Nav, Row, Tab} from "react-bootstrap";



const Syrup = (props) => {

    return (
        <div>
            <h1 className="titleSyr">Выбери сироп</h1>
            <img className="syropImg" src={syrop} alt="syrop"/>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col>
                        <Nav as="tabs" className="flex-column">
                            <Nav.Item>
                                <Nav.Link className="item" eventKey="fir">Кленовый</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="item" eventKey="sec">Фисташковый</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="item" eventKey="thi">Кокосовый</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="item" eventKey="four">Шоколадный</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="item" eventKey="five">Мятный</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col>
                        <Tab.Content className="d-flex flex-column">
                            <Tab.Pane eventKey="fir">
                                <p className="item">{props.price}</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sec">
                                <p className="item">{props.price}</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="thi">
                                <p className="item">{props.price}</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="four">
                                <p className="item">{props.price}</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="five">
                                <p className="item">{props.price}</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
                <PayItem price='20 р'/>
        </div>

    );
};
export default Syrup;


