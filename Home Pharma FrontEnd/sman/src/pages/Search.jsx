import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import Layout from "./Layout";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [state, setState] = useState([]);

  const query = searchParams.get("query");
  const category = searchParams.get("category");

  const getData = async () => {
    try {
      const res = await axios.get(
        `/medicine?query=${query}&category=${category}`
      );
      setState(res.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, [query, category]);

  const render = () => {
    if (!state.length) {
      return <h1>No Item with given parameters were found!</h1>;
    }

    return state.map((item) => (
      <Card
        title={item.name}
        key={item._id}
        id={item._id}
        imgUrl={item.image}
        type={item.type}
        size={item.size}
        packSize={item.packSize}
        price={item.price}
        discount={item.discount}
        doctorNote={item.doctorNote}
      />
    ));
  };

  return (
    <Layout>
      <div className="p-1">
        <h1>Your Search Results</h1>
        {render()}
      </div>
    </Layout>
  );
}
