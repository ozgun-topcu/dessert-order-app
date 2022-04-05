import React from 'react';
import modules from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={modules.card}>
      {props.children}
    </div>
  );
};

export default Card;
