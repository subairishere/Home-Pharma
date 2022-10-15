import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import styles from "./index.module.css";

export default function MedPriceInfo(props) {
  const navigate = useNavigate();
  const state = useContext(CartContext);
  const discountedPrice = props.price - (props.price * props.discount) / 100;
  const renderPrice = () => {
    if (props.discount <= 0) return;
    return <span className={styles.original}>Rs {props.price}</span>;
  };

  const [unit, setUnits] = useState(1);
  const medObj = {
    pillId: props.id,
    name: props.name,
    price: props.price,
    discount: props.discount,
    type: props.type,
    size: props.size,
    image: props.image,
    packSize: props.packSize,
    doctorNote: props.doctorNote,
  };

  const addToCart = () => {
    for (let i = 0; i < unit; i++) {
      state.addItem(medObj);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>{props.packingType}(s)</div>
      <div className={styles.info}>
        <span>
          Rs. {props.perUnitPrice}/{props.type}
        </span>
        <span>
          {props.unitPerPackType} {props.type}(s)/{props.packingType}
        </span>
        <span>
          Pack Size: {props.packSize}'s {props.type}
        </span>
      </div>
      <div className={styles.price}>
        Rs. {discountedPrice}
        {renderPrice()}
      </div>
      <div className={styles.units}>
        <input
          type="number"
          value={unit}
          onInput={(e) => setUnits(e.target.value)}
          min={1}
        />
        <span>
          Total
          <br />
          Rs. {unit * discountedPrice}
        </span>
      </div>
      <button className={styles.button} onClick={addToCart}>
        Add to cart
      </button>
      <button
        onClick={() => {
          addToCart();
          navigate("/checkout");
        }}
        className={styles.button}
      >
        Checkout
      </button>
    </div>
  );
}
