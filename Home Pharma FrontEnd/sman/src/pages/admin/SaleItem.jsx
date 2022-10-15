import React from "react";
import { Link } from "react-router-dom";
import styles from "./sales.module.css";

export default function SaleItem({ sale }) {
  const totalPrice = sale.pills.reduce((acc, curr) => {
    return acc + curr.totalPrice;
  }, 0);

  return (
    <Link to={`/admin/sale/${sale._id}`}>
      <div className={styles.saleItem}>
        <header>
          <h3>Order # {sale._id}</h3>
          <h3>Status: {sale.status}</h3>
        </header>
        <section className={styles.info}>
          <div>
            <h4>Customer Info</h4>
            <p>Name: {sale.userInfo.username}</p>
            <p>Email: {sale.userInfo.email}</p>
            <p>Ship Items?: {sale.address.city ? "Ship" : "Dont' Ship"}</p>
          </div>
          <div>
            <h4>Items Info</h4>
            <p>Total Products: {sale.pills.length}</p>
            <p>Total Price: {totalPrice}</p>
          </div>
        </section>
      </div>
    </Link>
  );
}
