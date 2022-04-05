import React from 'react'
import modules from "./Login.module.css";
const Login = (props) => {
  return (
    <form className = {modules.button}>
        <button onClick = {props.onShowLogin}>
        <span>LOGIN</span>  
        </button>
    </form>
  )
}

export default Login