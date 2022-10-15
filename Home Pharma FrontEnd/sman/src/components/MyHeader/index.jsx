import React, { useState, useContext } from "react";

import Logo from "./Logo";
import SearchCon from "./SearchCon";
import styles from "./index.module.css";

import moreIcon from "../../assets/icons/more.png";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import CartCon from "./CartCon";
import AuthContext from '../../context/AuthContext'

export default function MyHeader() {
  const [show, setShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const auth = useContext(AuthContext);
  const token = auth.getToken();

  const toggleCart = () => {
    setShow(false);
    setCartShow(!cartShow);
  };

  return (
    <>
      <header className={styles.header}>
        <Logo />
        {!token && <SearchCon />}
        <div className={styles.links}>
          <Nav toggleCart={toggleCart} />
        </div>
        <div className={styles.more} onClick={() => setShow(true)}>
          <img src={moreIcon} alt="More" />
        </div>
      </header>
      <Sidebar show={show} setShow={setShow} toggleCart={toggleCart} />
      <CartCon show={cartShow} hide={() => setCartShow(false)} />
    </>
  );
}
