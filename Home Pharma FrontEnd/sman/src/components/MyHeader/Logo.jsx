import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/imgs/logo.png";
import styles from "./index.module.css";

export default function Logo() {
  return (
    <Link to="/">
      <div className={styles.logoCon}>
        <img src={logoImg} alt="MedRASM" />
      </div>
    </Link>
  );
}
