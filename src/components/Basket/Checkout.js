import {useRef, useState} from "react";
import modules from './Checkout.module.css';

const isEmpty = (value) =>  value.trim() === "";
const isFiveChars = (value) =>  value.trim().lenght === 5;

const Checkout = (props) => {


    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true 

    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

  const confirmHandler = (event) => {

    //event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const  enteredNameIsValid = !isEmpty(enteredName);
    const  enteredStreetIsValid = !isEmpty(enteredStreet);
    const  enteredCityIsValid = !isEmpty(enteredCity);
    const  enteredPostalIsValid = !isFiveChars(enteredPostal)

   setFormInputsValidity({
       name: enteredNameIsValid,
       street: enteredStreetIsValid,
       city: enteredCityIsValid,
       postalCode: enteredPostalIsValid
   })

    const formIsValid = 
     enteredNameIsValid && 
     enteredStreetIsValid &&
     enteredCityIsValid &&
     enteredPostalIsValid 

   if (!formIsValid){
        return 
   }

    props.onConfirm({
     name: enteredName,
     street: enteredStreet,
     city: enteredCity,
     postalCode: enteredPostal   
    });
  };

  return (
    <form className={modules.form} onSubmit={confirmHandler}>
      <div className = { `${modules.control} ${formInputsValidity.name ? "" : modules.invalid} `} >
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputsValidity.name && <p> please enter a valid name. </p>}
      </div>
      <div className={ `${modules.control} ${formInputsValidity.street ? "" : modules.invalid} `}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputsValidity.street && <p> please enter a valid adress. </p>}
      </div>
      <div className={ `${modules.control} ${formInputsValidity.postalCode ? "" : modules.invalid} `}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {!formInputsValidity.postalCode && <p> please enter a valid postal Code. </p>}
      </div>
      <div className={ `${modules.control} ${formInputsValidity.city ? "" : modules.invalid} `}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputsValidity.city  && <p> please enter a valid city name. </p>}
      </div>
      <div className={modules.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={modules.submit} type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;