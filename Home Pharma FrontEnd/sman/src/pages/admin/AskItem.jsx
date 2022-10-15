import React, { useState } from "react";
import styles from "./AskItem.module.css";
import axios from "axios";

export default function AskItem(props) {
  const [state, setState] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `/ask/${props._id}`,
        { answer: state },
        {
          headers: { authorization: `Bearer ${props.token}` },
        }
      );
      props.updated(props._id);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={styles.box}>
      <img src={`http://localhost:5000/media/${props.image}`} />
      <h3>{props.username}</h3>
      <form className="form" onSubmit={onSubmit}>
        <textarea
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Answer user query"
        ></textarea>
        <button className="button">Answer</button>
      </form>
    </div>
  );
}
