import React from "react";
import { Link } from "react-router-dom";

import burgerLogo from "../../assets/images/burger-logo.png";
import styles from "./Logo.module.css";

const Logo = () => (

  <div className={styles.Logo}>
    <Link to="/burger-builder">
      <img src={burgerLogo} alt="logo" />
    </Link>
  </div>

);

export default Logo;
