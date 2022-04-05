import React from 'react'
import modules from "./LoginForm.module.css";
import Modal from '../UI/Modal';

const LoginForm = (props) => {
  return (

    <Modal onHideLoginFormHandler={props.onHideLoginFormHandler}>
      <form className={modules.input}>
        <label>name</label>
        <input></input>
        <label>adress</label>
        <input></input>
      </form>
    </Modal>
  )
}

export default LoginForm