import React, { useState, useContext } from "react";
import Layout from "./Layout";
import styles from "./Login.module.css";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const initialState = { username: "", password: "" };

export default function Login() {
  const [data, setData] = useState({ ...initialState });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await axios.post("/auth/login", data);
      auth.login(res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      const msg = err.response?.data?.error;
      const errors = err.response?.data?.errors;
      if (errors) {
        const msgs = errors.map((error) => error.msg + " of " + error.param);
        setError(msgs);
      } else if (msg) setError([msg]);
      else setError(["Internal server error"]);
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1>Enter Admin's Credientials</h1>
          <form className={styles.form} onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <button className="button" disabled={loading}>
              {loading ? "Loggin In" : "Log In"}
            </button>
            {error && error.map((err, i) => <small key={i}>{err}</small>)}
          </form>
        </div>
      </section>
    </Layout>
  );
}
