import React from "react";


const BasketContext = React.createContext({
    elements: [],
    totalAmount: 0,
    addElement: (element) => {},
    removeElement: (id) => {},
    clearBasket : () => {} 
});
 export default BasketContext;