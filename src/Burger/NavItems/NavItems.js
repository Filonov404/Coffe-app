import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom";
import './NavItems.Module.css';
import Header from "../../Header/Header";
import Coffee from "../../Pages/Coffee/Coffee"
import Syrup from "../../Pages/ Syrup/Syrup";
import Ymi from "../../Pages/Ymi/Ymi";
import Volume from "../../Pages/Volume/Volume";
import Cart from "../../Components/Cart/Cart";


function NavItems() {
    return  <Router>
        <Cart/>
          <div className="nav">
              <div className="item">
                  <NavLink to="/Coffee">Кофе</NavLink>
              </div>
              <div className="item">
                  <NavLink to="/Syrup">Сиропы и добавки</NavLink>
              </div>
              <div className="item">
                  <NavLink to="/Ymi">Вкусняшки</NavLink>
              </div>
              <div className="item">
                  <NavLink to="/Volume">Объём</NavLink>
              </div>
          </div>

        <Switch>
            <Route path="/" exact children={<Header/>} />
            <Route path="/Coffee" children={ <Coffee/>} />
            <Route path="/Syrup" children={<Syrup/>} />
            <Route path="/Ymi" children={<Ymi/>} />
            <Route path="/Volume" children={<Volume/>} />
        </Switch>
      </Router>
}

export default NavItems;

