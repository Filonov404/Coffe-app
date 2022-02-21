import decor from "../images/cup.svg";
import React from "react";
import Burger from "../Burger/Burger";


function Header() {
   return (
     <>
       <header className="App-header">
           <Burger/>
         <p className="time-work">Работаем с 7.00 до 23.00</p>
         <h1 className="main-title">
           Закажи кофе
           <br />
           навынос
         </h1>
         <img className="main-decor" src={decor} alt="cup" title="закажи вкусный кофеёк:)" />
       </header>
     </>
   )
}


export default Header
