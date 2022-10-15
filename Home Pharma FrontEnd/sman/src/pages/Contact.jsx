import React, { useState } from "react";
import Layout from "./Layout";
import styles from "./Contact.module.css";
import axios from "axios";

const initalState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [state, setState] = useState({ ...initalState });
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      await axios.post("/contact", state);
      setStatus({ success: true, msg: "Successfully send your message!" });
    } catch (err) {
      console.log(err);
      setStatus({ success: false, msg: "Something went wrong" });
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={state.name}
            required={true}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={state.email}
            required={true}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Subject"
            value={state.subject}
            onChange={(e) => setState({ ...state, subject: e.target.value })}
          />
          <textarea
            placeholder="Type your message here!"
            required={true}
            value={state.message}
            onChange={(e) => setState({ ...state, message: e.target.value })}
          ></textarea>
          {status && (
            <small className={status.success ? "success" : "error"}>
              {status.msg}
            </small>
          )}
          <button className="button">Send Message</button>
        </form>
      </div>
    </Layout>
  );
}
