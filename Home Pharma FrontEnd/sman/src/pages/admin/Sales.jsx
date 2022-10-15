import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import SaleItem from "./SaleItem";

export default function Sales({ token }) {
  const [state, setState] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("/sales", {
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
  return (
    <Layout>
      <div className="p-1">
        <h1>Sales List</h1>
        <div>
          {state.map((sale) => (
            <SaleItem key={sale._id} sale={sale} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
