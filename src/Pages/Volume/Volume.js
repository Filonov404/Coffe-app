import React from 'react';
import {useState} from 'react';
import Counter from "../../Components/Counter/Counter";
import './Volume.Module.css'
import Glass_M from '../../images/Glass_M.svg'
import Glass_L from '../../images/Glass_L.svg'
import Glass_XL from '../../images/Glass_XL.svg'
import PayItem from "../../Components/PayItem/PayItem";
import {Tab, Col, Nav, Row} from "react-bootstrap";

const Volume = () => {
    return (
        <div>
            <h1 className="titleYmi">Выбери объем</h1>
            <h2 className="titleVol">Капучино</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav as="tabs" className="flex-row align-items-end">
                            <Nav.Item>
                                <Nav.Link eventKey="first"><img src={Glass_M} alt=""/></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"><img src={Glass_L} alt=""/></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"><img src={Glass_XL} alt=""/></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <p className="volume-text">200 мл</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p className="volume-text">300 мл</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p className="volume-text">400 мл</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <Counter/>
            <PayItem/>
        </div>
    );
};

export default Volume;

