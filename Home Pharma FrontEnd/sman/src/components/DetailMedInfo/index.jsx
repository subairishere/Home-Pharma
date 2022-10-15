import React from "react";
import styles from "./index.module.css";

const renderInfo = (info) => {
  return info.split("\n").map((item) => <p>{item}</p>);
};

const Block = (props) => (
  <div id={props.id}>
    <h2>{props.title}</h2>
    {renderInfo(props.info)}
  </div>
);

export default function BasicMedInfo(props) {
  const renderFaqs = () =>
    props.faqs.map((faq) => (
      <div className={styles.faq}>
        <p className={styles.question}>{faq.question}</p>
        <p>{faq.answer}</p>
      </div>
    ));

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <ul>
          <a href="#intro">
            <li>Introduction</li>
          </a>
          <a href="#primary-uses">
            <li>Primary Uses</li>
          </a>
          <a href="#indications">
            <li>Indications</li>
          </a>
          <a href="#side-effects">
            <li>Side Effects</li>
          </a>
          <a href="#warnings">
            <li>Warnings</li>
          </a>
          <a href="#contraindications">
            <li>Contraindications</li>
          </a>
          <a href="#faqs">
            <li>FAQs</li>
          </a>
        </ul>
      </div>
      <div className={styles.content}>
        <div id="intro">
          <h2>Introduction</h2>
          <h3>How To Use</h3>
          {renderInfo(props.intro.howToUse)}
          <h3>Expert Advice</h3>
          {renderInfo(props.intro.expertAdvice)}
        </div>
        <Block
          title="Primary Uses"
          id="primary-uses"
          info={props.primaryUses}
        />
        <Block title="Indications" id="indications" info={props.indications} />
        <Block
          title="Side Effects"
          id="side-effects"
          info={props.sideEffects}
        />
        <Block title="Warnings" id="warnings" info={props.warnings} />
        <Block
          title="Contraindications"
          id="contraindictions"
          info={props.contraindictions}
        />
        <div id="faqs">
          <h2>FAQS</h2>
          {renderFaqs()}
        </div>
      </div>
    </div>
  );
}
