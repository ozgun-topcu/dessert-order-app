import React, {Fragment} from 'react'
import modules from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={modules.backdrop} onClick={props.onHideHandler}></div>
};

const BackdropLoginForm = (props) => {
  return <div className={modules.backdrop} onClick={props.onHideHandler}></div> 
};

const ModalOverlay = (props) =>{
    return <div className={modules.modal}>
        <div className={modules.content}>{props.children}</div>
    </div>
};



const Modal = (props) => {
  return (
    <Fragment>
        <BackdropLoginForm onHideHandler= {props.onHideLoginFormHandler}/>
        <Backdrop onHideHandler = {props.onHideHandler} />
        <ModalOverlay>{props.children} </ModalOverlay>
    </Fragment>
  )
};

export default Modal;

/* {ReactDOM.createPortal(<Backdrop onHideHandler={props.onHideHandler}/>, portalElement)}
{ReactDOM.createPortal(<ModalOverlay>{props.children} </ModalOverlay>, portalElement)} 
 */
//const portalElement = document.getElementById("overlays");
//import ReactDOM from "react-dom";