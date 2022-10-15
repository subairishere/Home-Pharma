import React from "react";
import Layout from "./Layout";
import styles from "./Contact.module.css";

export default function Location() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Find Us</h1>
        <p>
          S1-2, Waddan Mall, Mardan KP-Pakistan
        </p>
        <div className={styles.mapCon}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13199.558348324555!2d72.0309591!3d34.2002974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x54b11f16339e3c5e!2sMedRASm!5e0!3m2!1sen!2s!4v1658062102778!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
