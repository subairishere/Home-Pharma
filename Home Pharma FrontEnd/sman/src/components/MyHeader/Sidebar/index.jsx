import React from "react";
import Logo from "../Logo";
import Nav from "../Nav";
import styles from "./index.module.css";

export default function index(props) {
  const activeClass = props.show && styles.show;

  return (
    <>
      <aside className={[styles.aside, activeClass].join(" ")}>
        <Logo />
        <Nav toggleCart={props.toggleCart} />
      </aside>
      <div
        className={[styles.modal, activeClass].join(" ")}
        onClick={() => props.setShow(false)}
      ></div>
    </>
  );
}
