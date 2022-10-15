import { useState } from "react";
import CartContext from "./CartContext";

const CartState = (props) => {
  const [items, setItems] = useState([]);
  const state = {
    items,

    addItem: function (item) {
      const index = items.findIndex((itm) => itm.name === item.name);
      if (index !== -1) {
        items[index].quantity++;
        setItems([...items]);
      } else {
        item.quantity = 1;
        setItems([...items, item]);
      }
    },

    removeItem: function (name) {
      const updatedItems = items.filter((itm) => itm.name !== name);
      setItems([...updatedItems]);
    },

    increaseItem: function (name) {
      const index = items.findIndex((itm) => itm.name === name);

      if (index !== -1) {
        items[index].quantity++;
        setItems([...items]);
      }
    },

    decreaseItem: function (name) {
      const index = items.findIndex((itm) => itm.name === name);

      if (index !== -1 && items[index].quantity > 1) {
        items[index].quantity--;
        setItems([...items]);
      }
    },
    clear: () => {
      setItems([]);
    },
  };

  return (
    <CartContext.Provider value={state}>{props.children}</CartContext.Provider>
  );
};

export default CartState;
