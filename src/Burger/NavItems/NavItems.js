import React from "react";
import {Nav} from "react-bootstrap";

function NavItems() {
    return  <>
          <Nav className="flex-column">
              <Nav.Item>
                  <Nav.Link href="/Volume">Капучино</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="link-2">Латте</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="link-3">Раф кофе</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="link-3">Флэт Уайт</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="link-3">Американо</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="link-3">Мокко</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="link-3">Глясе</Nav.Link>
              </Nav.Item>
          </Nav>
      </>
}

export default NavItems;
