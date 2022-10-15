import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../../assets/icons/search.png";
import CameraIcon from "../../../assets/icons/camera.png";
import styles from "./index.module.css";
import Popup from "./Popup";

export default function SearchCon() {
  const [popup, setPopup] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <form
        className={styles.search_con}
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search?query=${search}`);
        }}
      >
        <input
          type="text"
          placeholder="Search Medicines"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className={styles.cameraCon} onClick={() => setPopup(true)}>
          <img src={CameraIcon} alt="Upload Image" />
        </span>
        <button className={styles.button}>
          <img src={SearchIcon} alt="Go" />
        </button>
      </form>
      {popup && <Popup close={() => setPopup(false)} />}
    </div>
  );
}
