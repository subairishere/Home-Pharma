import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbarCon}>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <Link to="/search?category=daily well being">Daily Well Being</Link>
          </li>
          <li>
            <Link to="/search?category=homeopathic">Homeopathic</Link>
          </li>
          <li>
            <Link to="/search?category=personal-care">Personal Care</Link>
          </li>
          <li>
            <Link to="/search?category=baby-care">Baby Care</Link>
          </li>
          <li>
            <Link to="/search?category=life-style-and-fitness">
              Life Style & Fitness
            </Link>
          </li>
          <li>
            <Link to="/search?category=organic">Organic</Link>
          </li>
          <li>
            <Link to="/search?category=home-essentials">Home Essentials</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
