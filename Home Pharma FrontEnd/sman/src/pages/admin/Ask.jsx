import axios from "axios";
import React, { useEffect, useState } from "react";
import AskItem from "./AskItem";
import Layout from "../Layout";
import styles from "./AskItem.module.css";

export default function Ask({ token }) {
  const [state, setState] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("/ask", {
        headers: { authorization: `Bearer ${token}` },
      });
      setState(res.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const udpated = (id) => {
    const updatedState = state.filter((item) => item._id !== id);
    setState(updatedState);
  };

  const render = () => {
    if (!state?.length) return <h1>No user queries</h1>;
    return state.map((item) => (
      <AskItem {...item} token={token} updated={udpated} />
    ));
  };

  return (
    <Layout>
      <div className="p-1">
        <h1>User Queries</h1>
        <div className={styles.boxes}>{render()}</div>
      </div>
    </Layout>
  );
}
