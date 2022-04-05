import React from 'react';
import baklava from "../../images/baklava.jpg"
import modules from "./Header.module.css";
import HeaderBasketButton from './HeaderBasketButton';
import Login from './Login';


//<Login onShowLogin = {props.onShowLogin} />
//<Login onShowLogin={props.onShowLogin} />

const Header = (props) => {
  return (

    <React.Fragment >

      <header className={modules.header}>
        <h1>Sweety Beren </h1>
        
        <HeaderBasketButton onShowBasket={props.onShowBasket} />
      </header>

      <div className={modules["main-image"]}>
        <img src={baklava} alt="" />
      </div>

    </React.Fragment>
  )
};

export default Header;
