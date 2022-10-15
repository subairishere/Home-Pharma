import React from "react";
import { Link } from "react-router-dom";

import mapIcon from "../../../assets/icons/map.png";
import mailIcon from "../../../assets/icons/email.png";

import styles from "./index.module.css";
import Cart from "../Cart";

export default function Nav(props) {
  return (
    <nav className={styles.nav}>
      <Link to="/location">
        <img src={mapIcon} alt="Location" />
        <span className={styles.txt}>Location</span>
      </Link>
      <Link to="/contact">
        <img src={mailIcon} alt="Contact" />
        <span className={styles.txt}>Contact</span>
      </Link>
      <div onClick={props.toggleCart}>
        <Cart />
        <span className={styles.txt}>Cart</span>
      </div>
    </nav>
  );
}
