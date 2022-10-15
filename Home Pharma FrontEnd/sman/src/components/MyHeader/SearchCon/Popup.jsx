import axios from "axios";
import React, { useRef, useState } from "react";
import closeIcon from "../../../assets/icons/close.png";
import styles from "./Popup.module.css";

export default function Popup(props) {
  const [userInfo, setUserInfo] = useState({ username: "", email: "" });
  const imgRef = useRef(null);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", userInfo.username);
    formData.append("email", userInfo.email);
    formData.append("file", imgRef.current.files[0]);

    setError(false);
    setMsg("");
    try {
      await axios.post(`/ask`, formData);
      setMsg("Query recieved!");
    } catch (err) {
      console.log(err);
      setError(true);
      setMsg("something went wrong");
    }
  };

  return (
    <>
      <section className={styles.popup}>
        <h1>Upload Your Image</h1>
        <span className={styles.closeIconCon}>
          <img src={closeIcon} al="close popup" onClick={props.close} />
        </span>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            value={userInfo.username}
            placeholder="User Name"
            onChange={(e) =>
              setUserInfo({ ...userInfo, username: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="User Email"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
          <div>
            <label>Your Image</label>
            <input type="file" accept="image/*" ref={imgRef} />
          </div>
          <small className={error ? "error" : "success"}>{msg}</small>
          <button className="button">Upload Image</button>
        </form>
      </section>
      <div className={styles.modal}></div>
    </>
  );
}
