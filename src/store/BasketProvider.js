
import { useReducer } from "react";
import BasketContext from "./basket-context";

const defaultBasketState = {
    elements: [],
    totalAmount: 0,
}

const basketReducer = (state, action) => {

    if (action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + (action.element.price * action.element.amount);

        const existingBasketElementIndex = state.elements.findIndex(element => element.id === action.element.id);
        const existingBasketElement = state.elements[existingBasketElementIndex];
        
        let updatedElements;

        if (existingBasketElement) {
            const updatedElement = {
                ...existingBasketElement,
                amount: existingBasketElement.amount + action.element.amount
            }; 
            updatedElements = [...state.elements];
            updatedElements[existingBasketElementIndex] = updatedElement;
        } else {
            updatedElements = state.elements.concat(action.element);
        };


        return {
            elements: updatedElements,
            totalAmount: updatedTotalAmount,
        };
    };


    if (action.type === "REMOVE") {

        const existingBasketElementIndex = state.elements.findIndex(element => element.id === action.id);
        const existingBasketElement = state.elements[existingBasketElementIndex];
        const updatedTotalAmount = state.totalAmount - existingBasketElement.price;

        let updatedElements;
        if (existingBasketElement.amount === 1) {
            updatedElements = state.elements.filter(element => element.id !== action.id);
        } else {
            const updatedElement = { ...existingBasketElement, amount: existingBasketElement.amount - 1 }
            updatedElements = [...state.elements];
            updatedElements[existingBasketElementIndex] = updatedElement;
        }

        return {
            elements: updatedElements,
            totalAmount: updatedTotalAmount,
        }


    };
 

    if (action.type === "CLEAR") {
        return defaultBasketState
    };

    return defaultBasketState;
};


const BasketProvider = props => {

    const [basketState, dispatchBasketAction] = useReducer(basketReducer, defaultBasketState);

    const addElementToBasketHandler = (element) => {
        dispatchBasketAction({ type: "ADD", element: element });
    };

    const removeElementFromBasketHandler = id => {
        dispatchBasketAction({ type: "REMOVE", id: id });
    };

    const clearBasketHandler = (id) => {
        dispatchBasketAction({ type: "CLEAR", id: id });
    };

    const basketContext = {
        elements: basketState.elements,
        totalAmount: basketState.totalAmount,
        addElement: addElementToBasketHandler,
        removeElement: removeElementFromBasketHandler,
        clearBasket: clearBasketHandler

    };

    return (
        <BasketContext.Provider value={basketContext}>
            {props.children}
        </BasketContext.Provider>
    )

};

export default BasketProvider;