import React, { useContext } from "react";
import CartIcon from "../../../assets/icons/carts.png";
import styles from "./index.module.css";
import CartContext from "../../../context/CartContext";

export default function Cart() {
  const state = useContext(CartContext);
  return (
    <div className={styles.cart_con}>
      <img src={CartIcon} alt="Go" />
      <span className={styles.items_in_cart}>{state.items.length}</span>
    </div>
  );
}
