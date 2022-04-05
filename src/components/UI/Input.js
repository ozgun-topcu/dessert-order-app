import React from 'react';
import modules from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return <div className={modules.input}>
      <label htmlFor={props.inputdata.id}>{props.labeltext} </label>
      <input ref= {ref} {...props.inputdata} />
  </div>;
});

export default Input;
