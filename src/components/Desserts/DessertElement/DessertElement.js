import React, { useContext } from 'react';
import modules from "./DessertElement.module.css";
import DessertElementForm from './DessertElementForm';
import BasketContext from '../../../store/basket-context';


const DessertElement = (props) => {

  const basketCtx = useContext(BasketContext)
  const price = `$${props.price.toFixed(2)}`;

  const addToElementHandler = amount => {
    basketCtx.addElement({
      id: props.id,  // this data is coming from SuppliedDesserts component 
      name: props.name, // this data is coming from SuppliedDesserts component
      amount: amount,
      price: props.price // this data is coming from SuppliedDesserts component
    });
  }
  return (
    <li className={modules.dessert}>

      <div>
        <h3>{props.name}</h3>
        <div className={modules.description}>{props.description}</div>
        <div className={modules.price}>{price}</div>
      </div>

      <div>
        <DessertElementForm onAddToElement={addToElementHandler} />
      </div>

    </li>

  )
};

export default DessertElement;
