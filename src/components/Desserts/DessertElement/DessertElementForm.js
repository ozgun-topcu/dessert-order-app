import React, { useRef, useState } from 'react';
import modules from "./DessertElementForm.module.css";
import Input from '../../UI/Input';

const DessertElementForm = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; // a string value comes from this assignment.
    const enteredAmountNumber = +enteredAmount; //to convert string value to a number.

    if (enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;

    };

    props.onAddToElement(enteredAmountNumber);
  };

  return (
    <form className={modules.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        labeltext="Amount"

        inputdata={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <button className={modules.button}>+ Add</button>
      {!amountIsValid && <p>please enter a valid amount</p>}
    </form>
  )
};

export default DessertElementForm;
