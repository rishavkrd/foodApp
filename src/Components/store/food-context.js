import { useState, createContext } from "react";

const FoodContext = createContext({
  foodInventory: {},
  onAdd: () => {},
  onRemove: () => {},
  totalPrice: 0,
});

export default FoodContext;

export const FoodContextProvider = (props) => {
  const [foodInventory, setFoodInventory] = useState(new Map());
  const [cartTotal, setCartTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const addItemHandler = (item) => {
    const food = item.name;
    const price = +item.price;
    const amount = +item.amount;
    if (foodInventory.has(food)) {
      setFoodInventory((prev) => {
        const count = prev.get(food).count + amount;
        prev.set(food, { count: count, price: price });

        return prev;
      });
    } else {
      setFoodInventory((prev) => {
        prev.set(food, { count: amount, price: price });
        return prev;
      });
    }
    setTotalItems((prev) => prev + amount);
    setCartTotal((prev) => prev + price*amount);
    console.log(food," : ", foodInventory.get(food));
  };
  const removeItemHandler = (food) => {
    const count = foodInventory.get(food).count;
    const price = foodInventory.get(food).price;
    if (count > 1) {
      setFoodInventory((prev) => {
        prev.set(food, { count: count-1, price: price});
        return prev;
      });
    } else {
      setFoodInventory((prev) => {
        prev.delete(food);
        return prev;
      });
    }
    setTotalItems((prev) => prev - 1);
    setCartTotal((prev) => prev - price);
    console.log(food," : ", foodInventory.get(food));
  };
  return (
    <FoodContext.Provider
      value={{
        foodInventory: foodInventory,
        onAdd: addItemHandler,
        onRemove: removeItemHandler,
        totalPrice: cartTotal,
        totalItems: totalItems,
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};
