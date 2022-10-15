import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import CartItem from "../../components/MyHeader/CartCon/Item";
import styles from "./sales.module.css";
import axios from "axios";

export default function SaleDetail({ token }) {
  const { id } = useParams();
  const [state, setState] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(`/sales/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      setState(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!state) return;
  const { street, zip, city, house } = state.address;
  const { username, email } = state.userInfo;

  const updateStatus = async (status) => {
    try {
      await axios.put(
        `/sales/${id}`,
        { status },
        { headers: { authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div className="p-1">
        <header className={styles.saleDetailHeader}>
          <h1>Order Detail - {id}</h1>
          <div>
            <span>Update Status</span>
            <select
              defaultValue={state.status}
              onChange={(e) => updateStatus(e.target.value)}
            >
              <option>Select an option</option>
              <option value="delivered">Delivered</option>
              <option value={house && street ? "shipped" : "packed"}>
                {house && street && city ? "Shipped" : "Packed"}
              </option>
            </select>
          </div>
        </header>
        <article>
          <h2>Customer Details</h2>
          <p>Name {username}</p>
          <p>Email {email}</p>
          <h2>Shipping Address</h2>
          <p>
            Street # {street}, house # {house} {city}, zip - {zip}
          </p>
        </article>

        <article>
          <h2>Product Details</h2>
          <div>
            {state.pills.map((product) => (
              <CartItem key={product._id} {...product} admin={true} />
            ))}
          </div>
        </article>
      </div>
    </Layout>
  );
}
