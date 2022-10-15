import React, { useContext, useRef, useState } from "react";
import Item from "../components/MyHeader/CartCon/Item";
import CartContext from "../context/CartContext";
import Layout from "./Layout";
import styles from "./Checkout.module.css";
import ShippingAddress from "../components/ShipingAddress";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [saleError, setSaleError] = useState("");
  const state = useContext(CartContext);
  const drNote = state.items.reduce(
    (acc, curr) => acc || curr.doctorNote,
    false
  );
  const navigate = useNavigate();

  const drNoteRef = useRef(null);
  const [userInfo, setUserInfo] = useState({ username: "", email: "" });
  const [error, setError] = useState({ username: "", email: "", drNote: "" });
  const [ship, setShip] = useState(false);
  const [address, setAddress] = useState({
    house: "",
    street: "",
    zip: 0,
    city: "",
  });

  const updateAddress = (field, value) => {
    address[field] = value;
    setAddress({ ...address });
  };

  const renderItems = () => {
    if (state.items.length === 0) {
      return <p>Your cart is empty</p>;
    }

    return state.items.map((item, i) => (
      <Item
        key={item.name + "-" + i}
        {...item}
        removeItem={state.removeItem}
        increaseItem={state.increaseItem}
        decreaseItem={state.decreaseItem}
      />
    ));
  };

  const subtotal = state.items.reduce(
    (acc, curr) => curr.price * curr.quantity + acc,
    0
  );

  const discount = state.items.reduce(
    (acc, curr) => ((curr.price * curr.discount) / 100) * curr.quantity + acc,
    0
  );

  const total = subtotal - discount;

  const orderNow = () => {
    let errors = [];
    const result = { username: "", email: "", drNote: "" };
    setError({ ...result });
    if (!userInfo.username) {
      errors.push("username");
    }

    if (!userInfo.email) {
      errors.push("email");
    }

    if (drNote && !drNoteRef.current?.files[0]) {
      errors.push("drNote");
    }

    errors.forEach((err) => {
      result[err] = `${err} is required!`;
    });

    setError({ ...result });

    if (errors.length) return;
    sendData();
  };

  const sendData = async () => {
    const data = {
      pills: [],
      userInfo: { ...userInfo },
      address: { ...address },
    };
    state.items.forEach((item) => {
      const totalPrice =
        item.quantity * (item.price - (item.price * item.discount) / 100);
      const pill = { pillId: item.pillId, quantity: item.quantity, totalPrice };
      data.pills.push(pill);
    });

    const formData = new FormData();
    formData.append("pills", JSON.stringify(data.pills));
    formData.append("userInfo", JSON.stringify(data.userInfo));
    formData.append("address", JSON.stringify(data.address));
    if (drNote) formData.append("file", drNoteRef.current.files[0]);

    try {
      await axios.post("/sales", formData);
      state.clear();
      navigate("/OrderSuccess");
    } catch (err) {
      console.error(err);
      setSaleError("Something failed, try again");
      setTimeout(() => {
        setSaleError("");
      }, 2000);
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={[styles.errorMsg, saleError && styles.show].join(" ")}>
          {saleError}
        </div>
        <div className={styles.items}>
          <div>
            <h2>Your Cart - {state.items.length} item(s)</h2>
            {renderItems()}
          </div>
          <div className={styles.shippingCon}>
            <h3>User Info</h3>
            <form className="form">
              <input
                type="text"
                value={userInfo.username}
                placeholder="User Name"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, username: e.target.value })
                }
              />
              {error.username && (
                <small className="error">{error.username}</small>
              )}
              <input
                type="email"
                placeholder="User Email"
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
              {error.email && <small className="error">{error.email}</small>}
              {drNote && (
                <div>
                  <label>One Item in your cart requires a doctor's note.</label>
                  <input type="file" ref={drNoteRef} accept="image/*" />

                  {error.drNote && (
                    <small className="error">{error.drNote}</small>
                  )}
                </div>
              )}
            </form>
            <h3>Do you want it to be delivered at your home?</h3>
            <div>
              <input
                type="checkbox"
                id="toggleForm"
                value={ship}
                onInput={(e) => setShip(e.target.checked)}
              />
              <label htmlFor="toggleForm"> Yes</label>
            </div>
            {ship && (
              <ShippingAddress
                updateAddress={updateAddress}
                address={address}
              />
            )}
          </div>
        </div>
        <div className={styles.totalCon}>
          <div className={styles.summary}>
            <h2>Order Summary</h2>
            <p>
              <span>Sub Total: </span>
              <span>Rs. {parseInt(subtotal)}</span>
            </p>
            <p>
              <span>Discount</span>
              <span>Rs. {parseInt(discount)}</span>
            </p>
            <div>
              <span>Total: </span>
              <span>Rs. {parseInt(total)}</span>
            </div>
          </div>
          <button className={styles.order} onClick={orderNow}>
            Order Now
          </button>
        </div>
      </div>
    </Layout>
  );
}
