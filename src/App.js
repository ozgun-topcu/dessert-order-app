import { useState } from "react";
import Header from "./components/Layout/Header";
import BasketProvider from "./store/BasketProvider";
import Desserts from "./components/Desserts/Desserts";
import Basket from "./components/Basket/Basket";
import LoginForm from "./components/Layout/LoginForm";


function App() {

  const [basketIsShown, setBasketIsShown] = useState(false);
  
  const showBasketHandler = () => {
    setBasketIsShown(true)
  };
  const hideBasketHandler = () => {
    setBasketIsShown(false)
  };
  



  return (
    <BasketProvider>

      {basketIsShown && <Basket onHideHandler={hideBasketHandler} />}
     
      <Header
        onShowBasket={showBasketHandler}  
      />

      <Desserts />

    </BasketProvider>
  );
}

export default App;


/* {loginIsShown && <LoginForm onHideLoginFormHandler = {hideLoginFormHandler} />}
const showLoginHandler = () => {
  setLoginIsShown(true);
};
const hideLoginFormHandler = () => {
  setLoginIsShown(false); 
const [loginIsShown, setLoginIsShown] = useState(false);

  */