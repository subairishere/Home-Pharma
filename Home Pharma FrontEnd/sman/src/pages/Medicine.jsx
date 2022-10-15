import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicMedInfo from "../components/BasicMedInfo";
import DetailMedInfo from "../components/DetailMedInfo";
import Layout from "./Layout";
import MedPriceInfo from "../components/MedPriceInfo";
import styles from "./Medicine.module.css";
import DrInfo from "../components/DrInfo";
import axios from "axios";

export default function Medicine() {
  const [drs, setDrs] = useState([]);
  const { id } = useParams();
  const [med, setMed] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(`/medicine/${id}`);
      setMed(res.data.result);
    } catch (err) {
      console.error(err);
    }
  };

  const getDoctors = async () => {
    try {
      const res = await axios.get(`/doctors?tags=${med?.tags}`);
      setDrs(res.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!med) return;
  else if (drs.length === 0) getDoctors();

  const intro = { howToUse: med.howToUse, expertAdvice: med.expertAdvice };
  return (
    <Layout>
      <div className={styles.container}>
        <BasicMedInfo
          imgUrl={med.image}
          title={med.name}
          size={med.size}
          type={med.type}
          tags={med.tags?.split(",")}
          brand={med.brand}
          purpose={med.purpose}
        />
        <MedPriceInfo
          id={id}
          type={med.type}
          image={med.image}
          name={med.name}
          packingType={med.packType}
          packSize={med.packSize}
          price={med.price}
          discount={med.discount}
          unitPerPackType={med.unitPerPackType}
          perUnitPrice={med.perUnitPrice}
          doctorNote={med.doctorNote}
        />
        <DetailMedInfo
          faqs={JSON.parse(med.faqs)}
          contraindictions={med.contraindictions}
          warnings={med.warnings}
          sideEffects={med.sideEffects}
          indications={med.indications}
          primaryUses={med.primaryUses}
          intro={intro}
        />
        <div>
          {drs?.map((dr) => (
            <DrInfo
              key={dr._id}
              name={dr.name}
              specialization={dr.specialization}
              phone={dr.phone}
              imgUrl={`http://localhost:5000/media/${dr.image}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
