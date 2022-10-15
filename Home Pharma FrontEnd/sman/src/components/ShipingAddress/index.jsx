import React from "react";
import styles from "./index.module.css";

export default function ShippingAddress(props) {
  return (
    <div>
      <h3>Enter your shipping address.</h3>
      <form className={styles.form}>
        <input
          type="text"
          onInput={(e) => props.updateAddress("house", e.target.value)}
          value={props.address.house}
          placeholder="House #"
        />
        <input
          type="text"
          onInput={(e) => props.updateAddress("street", e.target.value)}
          value={props.address.street}
          placeholder="Street #"
        />
        <input
          type="text"
          onInput={(e) => props.updateAddress("city", e.target.value)}
          value={props.address.city}
          placeholder="City"
        />
        <input
          type="number"
          onInput={(e) => props.updateAddress("zip", e.target.value)}
          value={props.address.zip}
          placeholder="Zip Code"
        />
      </form>
    </div>
  );
}
