import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../context/CartContext";
import inStyles from "../Sidebar/index.module.css";
import styles from "./index.module.css";
import closeIcon from "../../../assets/icons/close.png";
import Item from "./Item";

const { modal, aside, show } = inStyles;

export default function CartCon(props) {
  const state = useContext(CartContext);
  const active = props.show && show;
  const conActive = props.show && styles.show;

  const renderItems = () => {
    if (state.items.length === 0) {
      return <p>Your cart is empty</p>;
    }

    return state.items.map((item, i) => (
      <Item
        key={item.title + "-" + i}
        {...item}
        removeItem={state.removeItem}
        increaseItem={state.increaseItem}
        decreaseItem={state.decreaseItem}
      />
    ));
  };

  const renderTotal = () => {
    if (state.items.length === 0) return;
    const total = state.items.reduce((acc, curr) => {
      const price = curr.price - (curr.price * curr.discount) / 100;
      return acc + curr.quantity * price;
    }, 0);
    return (
      <div className={styles.total}>
        <h3>
          <span>Total: </span>
          <span>{parseInt(total)} PKR</span>
        </h3>
        <Link to="checkout">
          <button>Checkout</button>
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className={[aside, styles.container, conActive].join(" ")}>
        <header>
          <h1>Cart Summary</h1>
          <div>
            <img onClick={props.hide} src={closeIcon} alt="x" />
          </div>
        </header>
        {renderItems()}
        {renderTotal()}
      </div>
      <div className={[modal, active].join(" ")} onClick={props.hide}></div>
    </>
  );
}
