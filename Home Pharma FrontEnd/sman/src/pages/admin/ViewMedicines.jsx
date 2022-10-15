import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Layout from "../Layout";
import styles from "./medicine.module.css";

export default function ViewMedicines({ token }) {
  const [state, setState] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("/medicine");
      setState(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onDelete = async (id) => {
    try {
      await axios.delete(`/medicine/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      const updatedState = [...state.filter((item) => item._id !== id)];
      setState(updatedState);
    } catch (err) {
      console.error(err);
    }
  };

  const renderCards = () => {
    return state.map((med) => (
      <Card
        title={med.name}
        key={med._id}
        id={med._id}
        imgUrl={med.image}
        type={med.type}
        size={med.size}
        packSize={med.packSize}
        price={med.price}
        discount={med.discount}
        admin={true}
        onDelete={() => onDelete(med._id)}
      />
    ));
  };

  return (
    <Layout>
      <div className="p-1">
        <h1>List of Medicines</h1>
        <div className={styles.medicines}>{renderCards()}</div>
      </div>
    </Layout>
  );
}
