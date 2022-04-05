import React, { useContext, useEffect, useState } from 'react';
import modules from "./HeaderBasketButton.module.css";
import BasketIcon from './BasketIcon';
import BasketContext from '../../store/basket-context';

const HeaderBasketButton = (props) => {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const basketCtx = useContext(BasketContext);
  const { elements } = basketCtx;

  const numberOfBasketElements = elements.reduce((currentNumber, element) => {
    return currentNumber + element.amount
  }, 0);



  const btnClasses = `${modules.button} ${btnIsHighlighted ? modules.bump : ""}`

  useEffect(() => {
    if (elements.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer)
    };

  }, [elements]);


  return (
    <button className={btnClasses} onClick={props.onShowBasket}>
      <span className={modules.icon}>
        <BasketIcon /> 
      </span>
      <span>Your Basket </span>
      <span className={modules.badge}>
        {numberOfBasketElements}
      </span>
    </button>

  )
};

export default HeaderBasketButton;
