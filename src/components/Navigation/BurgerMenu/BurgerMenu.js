import React from "react";
import PropTypes from "prop-types";

import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ open }) => (
  <div
    role="presentation"
    className={styles.BurgerMenu}
    onClick={open}
  >
    <div />
    <div />
    <div />
  </div>
);

BurgerMenu.propTypes = { open: PropTypes.func.isRequired };

export default BurgerMenu;
