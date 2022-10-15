import React from "react";
import Card from "../Card";
import styles from "./index.module.css";

export default function MySection(props) {
  const renderCards = () => {
    return props.medicines.map((med) => (
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
        doctorNote={med.doctorNote}
      />
    ));
  };
  return (
    <section className={styles.section}>
      <h2>{props.title}</h2>
      <div className={styles.items}>{renderCards()}</div>
    </section>
  );
}
