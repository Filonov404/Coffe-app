import React from "react";
import './Coffee.Module.css'
import { NavLink } from "react-router-dom";


function Coffee() {
    return(
      <div>
           <h2 className="titleCap">Выбери напиток</h2>
          <div className="item">
          <NavLink to="link-1">Капучино</NavLink>
      </div>
          <div className="item">
              <NavLink to="link-2">Латте</NavLink>
          </div>
          <div className="item">
              <NavLink to="link-3">Раф кофе</NavLink>
          </div>
          <div className="item">
              <NavLink to="link-3">Флэт Уайт</NavLink>
          </div>
          <div className="item">
              <NavLink to="link-3">Американо</NavLink>
          </div>
          <div className="item">
              <NavLink to="link-3">Мокко</NavLink>
          </div>
          <div className="item">
              <NavLink to="link-3">Глясе</NavLink>
          </div>
      </div>
    );
}

export default Coffee;
