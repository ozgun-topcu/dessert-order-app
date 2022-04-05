
import modules from './BasketElement.module.css';

const BasketElement = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={modules['basket-element']}>
      <div>
         <h2>{props.name}</h2>

         <div className={modules.summary}>
          <span className={modules.price}>{price}</span>
          <span className={modules.amount}> x {props.amount}</span>
         </div>

      </div>
      
      <div className={modules.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default BasketElement;