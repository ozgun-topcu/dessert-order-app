import React, { useContext, useState } from 'react'
import modules from "./Basket.module.css";
import Modal from '../UI/Modal';
import BasketContext from '../../store/basket-context';
import BasketElement from './BasketElement';
import Checkout from './Checkout';
import { createContext } from 'react/cjs/react.production.min';


const Basket = (props) => {

  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const basketCtx = useContext(BasketContext);

  const totalAmount = `$${basketCtx.totalAmount.toFixed(2)}`;
  const hasItems = basketCtx.elements.length > 0;

  const basketElementRemoveHandler = (id) => {
    basketCtx.removeElement(id);

  };

  const basketElementAddHandler = (element) => {
    basketCtx.addElement({ ...element, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch("https://dessert-app-6b663-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: basketCtx.elements
        })
      });

    setIsSubmitting(false);
    setDidSubmit(true);
    createContext.clearBasket();
  };


  const basketElements = (
    <ul className={modules["basket-elements"]}>
      {basketCtx.elements.map((sweet) =>
      (<BasketElement
        key={sweet.id}
        name={sweet.name}
        amount={sweet.amount}
        price={sweet.price}
        onRemove={basketElementRemoveHandler.bind(null, sweet.id)}
        onAdd={basketElementAddHandler.bind(null, sweet)}
      />))}
    </ul>

  );  



  const basketModalContent = (
    <React.Fragment>
      {basketElements}
      <div className={modules.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideHandler} />}
      {!isCheckout && <div className={modules.actions}> </div>}
    </React.Fragment>

  );

  const isSubmittingModalContent = <p>Sending order data...</p>


  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order.</p>
      <div className={modules.actions}>
        <button className={modules.button} onClick={props.onHideHandler}>
          Close
        </button>
      </div>
    </React.Fragment>
  );


  return (

    <Modal onHideHandler={props.onHideHandler}>


      {!isSubmitting && !didSubmit && basketModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}

      <div className={modules.actions}>
        <button className={modules.button} onClick={props.onHideHandler}>Close</button>
        {hasItems && <button className={modules.button} onClick={orderHandler}>Order</button>}
      </div>

    </Modal>
  )
}

export default Basket;