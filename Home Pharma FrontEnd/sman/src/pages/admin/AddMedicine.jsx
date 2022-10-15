import React, { useRef, useState } from "react";
import axios from "axios";
import Layout from "../Layout";

import plusIcn from "../../assets/icons/plus.png";

const initialFaq = { question: "", answer: "" };
const initialState = {
  name: "",
  doctorNote: false,
  type: "",
  packType: "",
  unitPerPackType: "",
  size: "",
  packSize: "",
  price: 0,
  pricePerUnit: 0,
  discount: 0,
  brand: "",
  tags: "",
  category: "",
  purpose: "",
  howToUse: "",
  expertAdvice: "",
  primaryUses: "",
  indications: "",
  sideEffects: "",
  warnings: "",
  precautions: "",
  contraindictions: "",
  faqs: [{ ...initialFaq }],
};

export default function AddMedicine({ token }) {
  const [state, setState] = useState(initialState);
  const imgRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  const addFaq = () => {
    setState({ ...state, faqs: [...state.faqs, { ...initialFaq }] });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const item in state) {
      if (item === "faqs") formData.append("faqs", JSON.stringify(state.faqs));
      else formData.append(item, state[item]);
    }

    formData.append("file", imgRef.current.files[0]);
    setLoading(true);
    setError(false);
    setMsg("");

    try {
      const res = await axios.post("/medicine", formData, {
        headers: { authorization: `Bearer ${token}` },
      });
      console.log(res.data);
      setMsg("successfully created a medicine");
    } catch (err) {
      console.log(err);
      setError(true);
      setMsg("Something went wrong, try again");
    }

    setLoading(false);
  };

  const renderFaqs = () => {
    const updateFaq = (e, index, field) => {
      const value = e.target.value;
      const faqs = [...state.faqs];
      faqs[index][field] = value;
      setState({ ...state, faqs });
    };

    return state.faqs.map((faq, i) => {
      return (
        <div key={`faq-${i}`}>
          <input
            type="text"
            placeholder="Question"
            required={true}
            value={faq.question}
            onChange={(e) => updateFaq(e, i, "question")}
          />
          <textarea
            required={true}
            value={faq.answer}
            onChange={(e) => updateFaq(e, i, "answer")}
            placeholder="Answer"
          ></textarea>
        </div>
      );
    });
  };

  return (
    <Layout>
      <div className="section">
        <div className="p-1 form-container">
          <h1>Add a Medicine</h1>
          <form className="form" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Medicine Name"
              required={true}
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />

            <input
              type="text"
              placeholder="Type (Tablet, Capsoule)"
              required={true}
              value={state.type}
              onChange={(e) => setState({ ...state, type: e.target.value })}
            />
            <input
              type="text"
              placeholder="Packing Type (Strip)"
              required={true}
              value={state.packType}
              onChange={(e) => setState({ ...state, packType: e.target.value })}
            />
            <input
              type="text"
              placeholder="Unit Per Pack Type"
              required={true}
              value={state.unitPerPackType}
              onChange={(e) =>
                setState({ ...state, unitPerPackType: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Size (10mg, 100mg)"
              required={true}
              value={state.size}
              onChange={(e) => setState({ ...state, size: e.target.value })}
            />
            <input
              type="text"
              placeholder="Pack Size (10 x 1, 20 x 2)"
              required={true}
              value={state.packSize}
              onChange={(e) => setState({ ...state, packSize: e.target.value })}
            />
            <input
              type="file"
              placeholder="Image"
              ref={imgRef}
              required={true}
            />
            <label>
              Doctor's Note Required?
              <input
                type="checkbox"
                value={state.doctorNote}
                onChange={(e) =>
                  setState({ ...state, doctorNote: e.target.value })
                }
              />
            </label>
            <input
              type="number"
              placeholder="Price"
              required={true}
              value={state.price}
              onChange={(e) => setState({ ...state, price: e.target.value })}
            />
            <input
              type="number"
              placeholder="Price Per Unit"
              required={true}
              value={state.pricePerUnit}
              onChange={(e) =>
                setState({ ...state, pricePerUnit: e.target.value })
              }
            />
            <input
              type="discount"
              placeholder="Discount"
              required={true}
              value={state.discount}
              onChange={(e) => setState({ ...state, discount: e.target.value })}
            />
            <input
              type="text"
              placeholder="Brand"
              required={true}
              value={state.brand}
              onChange={(e) => setState({ ...state, brand: e.target.value })}
            />
            <input
              type="text"
              placeholder="Tags (comma seperated)"
              required={true}
              value={state.tags}
              onChange={(e) => setState({ ...state, tags: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category"
              required={true}
              value={state.category}
              onChange={(e) => setState({ ...state, category: e.target.value })}
            />
            <textarea
              required={true}
              value={state.purpose}
              onChange={(e) => setState({ ...state, purpose: e.target.value })}
              placeholder="Purpose"
            ></textarea>
            <textarea
              required={true}
              value={state.howToUse}
              onChange={(e) => setState({ ...state, howToUse: e.target.value })}
              placeholder="How To Use"
            ></textarea>
            <textarea
              required={true}
              value={state.expertAdvice}
              onChange={(e) =>
                setState({ ...state, expertAdvice: e.target.value })
              }
              placeholder="Expert Advice"
            ></textarea>
            <textarea
              required={true}
              value={state.primaryUses}
              onChange={(e) =>
                setState({ ...state, primaryUses: e.target.value })
              }
              placeholder="Primary Uses"
            ></textarea>
            <textarea
              required={true}
              value={state.indications}
              onChange={(e) =>
                setState({ ...state, indications: e.target.value })
              }
              placeholder="Indications"
            ></textarea>
            <textarea
              required={true}
              value={state.sideEffects}
              onChange={(e) =>
                setState({ ...state, sideEffects: e.target.value })
              }
              placeholder="Side Effects"
            ></textarea>
            <textarea
              required={true}
              value={state.warnings}
              onChange={(e) => setState({ ...state, warnings: e.target.value })}
              placeholder="Warnings"
            ></textarea>
            <textarea
              required={true}
              value={state.precautions}
              onChange={(e) =>
                setState({ ...state, precautions: e.target.value })
              }
              placeholder="Precaution"
            ></textarea>
            <textarea
              required={true}
              value={state.contraindictions}
              onChange={(e) =>
                setState({ ...state, contraindictions: e.target.value })
              }
              placeholder="Contraindications"
            ></textarea>
            <div className="faqs">
              <h3>FAQs</h3>
              {renderFaqs()}

              <img
                src={plusIcn}
                alt="Add Another FAQ"
                className="add-faq"
                onClick={addFaq}
              />
            </div>
            <small className={error ? "error" : "success"}>{msg}</small>
            <button className="button" disabled={loading}>
              {loading ? "Creating Medicine..." : "Create Medicine"}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
