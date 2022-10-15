import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import HeroArea from "../components/HeroArea";
import MySection from "../components/MySection";
import axios from "axios";

export default function Home() {
  const [popular, setPopular] = useState([]);
  const [homepathic, setHomepathic] = useState([]);
  const [daily, setDaily] = useState([]);
  const [others, setOthers] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("/medicine");
      const data = res.data.results;
      setPopular(data.slice(0, 4));
      const homeMeds = data.filter((item) => item.category === "homeopathic");
      setHomepathic(homeMeds);
      const dailyMeds = data.filter(
        (item) => item.category === "daily well being"
      );
      setDaily(dailyMeds);
      setOthers(data.slice(4));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <HeroArea />
      <MySection title="Popular Medicines" medicines={popular} />
      {!!daily.length && (
        <MySection title="Daily Well being" medicines={daily} />
      )}
      {!!homepathic.length && (
        <MySection title="Homeopathic" medicines={homepathic} />
      )}
      <MySection title="Others" medicines={others} />
    </Layout>
  );
}
