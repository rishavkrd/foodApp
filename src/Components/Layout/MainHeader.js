import { useState } from "react";
import classes from "./MainHeader.module.css";
import Cart from "../Cart/Cart";
import HeaderCart from "./HeaderCart";
import mealsImage from "../../asset/meals.jpg"

export default function MainHeader() {
  const [cartVisible, setCartVisible] = useState(false);

  const cartClickHandler = () => {
    setCartVisible(true);
  };
  const cartCloseHandler = () => {
    setCartVisible(false);
    console.log("()() CLose modal");
  };

  return (
    <>
      {cartVisible && <Cart onClose={cartCloseHandler}></Cart>}
      <header className={classes["main-header"]}>
        <h1>React Menu</h1>
        <HeaderCart onCartClick={cartClickHandler}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </>
  );
}
