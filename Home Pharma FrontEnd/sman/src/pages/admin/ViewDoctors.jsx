import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import DrInfo from "../../components/DrInfo";
import styles from "./doctor.module.css";
import axios from "axios";

export default function ViewDoctors({ token }) {
  const [state, setState] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("/doctors");
      setState(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`/doctors/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      setState(state.filter((dr) => dr._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const renderDoctors = () => {
    return state.map((dr) => (
      <DrInfo
        onDelete={() => deleteHandler(dr._id)}
        key={dr._id}
        name={dr.name}
        specialization={dr.specialization}
        phone={dr.phone}
        imgUrl={`http://localhost:5000/media/${dr.image}`}
        admin={true}
      />
    ));
  };
  return (
    <Layout>
      <div className="p-1">
        <h1>List of doctors</h1>
        <div className={styles.doctors}>{renderDoctors()}</div>
      </div>
    </Layout>
  );
}
