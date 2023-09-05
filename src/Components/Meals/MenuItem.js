import { useContext, useRef } from "react";
import classes from "./MenuItem.module.css";
import FoodContext from "../store/food-context";
import Input from "../UI/Input";

export default function MenuItem(props) {
  const foodCtx = useContext(FoodContext);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const item = {
      name: props.name,
      price: props.price,
      amount: enteredAmount,
    };
    foodCtx.onAdd(item);
  };
  return (
    <li key={props.id} className={classes["meal"]}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
      </div>
      <form onSubmit={submitHandler} className={classes["form"]}>
        <Input
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
          label="Amount"
          ref={amountInputRef}
        />
        <button type="submit">+ Add</button>
      </form>
    </li>
  );
}
