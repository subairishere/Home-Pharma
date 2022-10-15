import React from "react";
import fbIcon from "../../assets/icons/facebook.png";
import igIcon from "../../assets/icons/instagram.png";
import twitterIcon from "../../assets/icons/twitter.png";
import ytIcon from "../../assets/icons/youtube.png";
import styles from "./index.module.css";

export default function MyFooter() {
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <div>
          <h3>Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13199.558348324555!2d72.0309591!3d34.2002974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x54b11f16339e3c5e!2sMedRASm!5e0!3m2!1sen!2s!4v1658062102778!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <h3>Follow Us</h3>
          <ul className={styles.socialMedia}>
            <a target="_blank" href="https://www.facebook.com/MedRASm">
              <li>
                <img src={fbIcon} /> Facebook
              </li>
            </a>
            <a target="_blank" href="https://www.instagram.com/MedRASM">
              <li>
                <img src={igIcon} /> Instagram
              </li>
            </a>
            <a target="_blank" href="https://twitter.com">
              <li>
                <img src={twitterIcon} /> Twitter
              </li>
            </a>
            <a
              target="_blank"
              href="https://youtube.com/channel/UCN9Koy6THfCMIpfbG94AUOg"
            >
              <li>
                <img src={ytIcon} /> YouTube
              </li>
            </a>
          </ul>
        </div>
      </section>
      <p className={styles.notice}>
        © {new Date().getFullYear()} HomePharma.Pk, All Rights Reserved, Designed & Develop By Subair Ali Shah
      </p>
    </footer>
  );
}
