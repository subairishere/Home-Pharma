import React from "react";
import styles from "./index.module.css";

export default function BasicMedInfo(props) {
  return (
    <div className={styles.container}>
      <div className={styles.imgCon}>
        <img src={`http://localhost:5000/media/${props.imgUrl}`} />
      </div>
      <div className={styles.details}>
        <h1>
          {props.title} {props.size} {props.type}
        </h1>
        <p className={styles.brand}>Brand: {props.brand}</p>
        <div className={styles.tags}>
          {props.tags.map((tag, i) => (
            <span key={`tag-${i}`}>{tag}</span>
          ))}
        </div>
        <p className={styles.purpose}>{props.purpose}</p>
      </div>
    </div>
  );
}
