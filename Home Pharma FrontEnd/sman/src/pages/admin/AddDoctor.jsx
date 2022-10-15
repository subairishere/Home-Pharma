import axios from "axios";
import React, { useState, useContext, useRef } from "react";
import AuthContext from "../../context/AuthContext";

import Layout from "../Layout";

const initialState = {
  name: "",
  specialization: "",
  phone: "",
  tags: "",
};

export default function AddDoctor() {
  const [state, setState] = useState({ ...initialState });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);

  const auth = useContext(AuthContext);
  const imgRef = useRef(null);
  const token = auth.getToken();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    setError(null);

    try {
      const formData = new FormData();
      formData.append("name", state.name);
      formData.append("specialization", state.specialization);
      formData.append("phone", state.phone);
      formData.append("tags", state.tags);
      const img = imgRef.current.files[0];
      formData.append("file", img);

      await axios.post("/doctors", formData, {
        headers: { authorization: `Bearer ${token}` },
      });

      setState({ ...initialState });
      e.target.reset();
      setError(false);
      setMsg("Doctor Created Successfully");
    } catch (err) {
      console.log(err);
      setError(true);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div className="section">
        <div className="p-1 form-container">
          <h1>Add a Doctor</h1>
          <form className="form" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Dr. Name"
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              required={true}
            />
            <input
              type="text"
              placeholder="Specialization"
              value={state.specialization}
              onChange={(e) =>
                setState({ ...state, specialization: e.target.value })
              }
              required={true}
            />
            <input
              type="text"
              placeholder="Tags (comma seperated)"
              value={state.tags}
              required={true}
              onChange={(e) => setState({ ...state, tags: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone"
              value={state.phone}
              required={true}
              onChange={(e) => setState({ ...state, phone: e.target.value })}
            />
            <input
              ref={imgRef}
              type="file"
              accept="images/*"
              placeholder="Image"
              required={true}
            />
            {<small className={error ? "error" : "success"}>{msg}</small>}
            <button disabled={loading} className="button">
              {loading ? "Creating Doctor" : "Create Doctor"}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
