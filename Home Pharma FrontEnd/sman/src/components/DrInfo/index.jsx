import React from "react";
import styles from "./index.module.css";
import oldPhone from "../../assets/icons/old-phone.png";
import badge from "../../assets/icons/badge.png";
import delIcon from "../../assets/icons/delete.png";

export default function DrInfo(props) {
  return (
    <div className={[styles.container, props.admin && styles.admin].join(" ")}>
      <div className={styles.delIcon} onClick={props.onDelete}>
        <img src={delIcon} />
      </div>
      <div className={styles.imgCon}>
        <img src={props.imgUrl} />
      </div>
      <h3>{props.name}</h3>
      <h4>
        <img src={badge} alt="Qualification" className={styles.icon} />{" "}
        {props.specialization}
      </h4>
      <p>
        <img src={oldPhone} alt="Phone" className={styles.icon} /> {props.phone}
      </p>
    </div>
  );
}
