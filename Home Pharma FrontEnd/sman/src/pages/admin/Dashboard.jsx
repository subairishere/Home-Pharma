import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import styles from "./Dashboard.module.css";
import AuthContext from "../../context/AuthContext";

import salesIcn from "../../assets/icons/sales.png";
import drsIcn from "../../assets/icons/medical-team.png";
import addDrIcn from "../../assets/icons/add-user.png";
import pillsIcn from "../../assets/icons/medicines.png";
import addPillIcn from "../../assets/icons/add-medicine.png";
import askIcn from "../../assets/icons/ask.png";

const Box = (props) => {
  return (
    <Link to={props.to} className={styles.box}>
      <div>
        <img src={props.imgUrl} />
        <h3>{props.title}</h3>
      </div>
    </Link>
  );
};

export default function Dashboard() {
  const auth = useContext(AuthContext);

  return (
    <Layout>
      <div className={styles.container}>
        <header>
          <h1>Admin Dashboard</h1>
          <button className="button" onClick={auth.logout}>
            Logout
          </button>
        </header>
        <article>
          <h2>Doctor</h2>
          <div className={styles.boxes}>
            <Box
              imgUrl={drsIcn}
              title="View all doctors"
              to="/admin/view-doctors"
            />
            <Box
              imgUrl={addDrIcn}
              title="Add a doctor"
              to="/admin/add-doctor"
            />
          </div>
        </article>
        <article>
          <h2>Medicine</h2>
          <div className={styles.boxes}>
            <Box
              imgUrl={pillsIcn}
              title="View all medicines"
              to="/admin/view-medicines"
            />
            <Box
              imgUrl={addPillIcn}
              title="Add a medicine"
              to="/admin/add-medicine"
            />
            <Box
              imgUrl={askIcn}
              title="View User Queries"
              to="/admin/view-asks"
            />
          </div>
        </article>
        <article>
          <h2>Sales</h2>
          <div className={styles.boxes}>
            <Box
              imgUrl={salesIcn}
              title="View all sales"
              to="/admin/view-sales"
            />
          </div>
        </article>
      </div>
    </Layout>
  );
}
