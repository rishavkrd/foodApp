import { useContext } from "react";
import Card from "../UI/Card";
import FoodContext from "../store/food-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

export default function Cart(props) {
  const foodCtx = useContext(FoodContext);

  const addFoodHandler = (item, price) => {
    console.log("Added: ", item);
    foodCtx.onAdd(item, price);
  };
  const removeFoodHandler = (item) => {
    console.log("Removed: ", item);
    foodCtx.onRemove(item);
  };


  return (
    <Modal>
      <Card>
        <ul className={classes["cart-items"]}>
          {Array.from(foodCtx.foodInventory).map(([item, val]) => {
            console.log("------", item, val);
            
            return (
              <li key={item} className={classes["cart-item"]}>
                <div>
                  <h2>{item}</h2>
                  <div className={classes.summary}>
                    <div className={classes.amount}>{val.count}</div>
                  </div>
                  <div className={classes.actions}>
                    <button
                      onClick={() =>
                        addFoodHandler({
                          name: item,
                          price: val.price,
                          amount: 1,
                        })
                      }
                    >
                      +
                    </button>
                    <button onClick={() => removeFoodHandler(item)}>-</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={classes.actions}>
          <h2>Total: {foodCtx.totalPrice}</h2>
          <button onClick={props.onClose}>Close</button>
        </div>
      </Card>
    </Modal>
  );
}
