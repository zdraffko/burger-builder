import React from "react";
import PropTypes from "prop-types";

import styles from "./Backdrop.module.css";

const Backdrop = ({ isShown, close }) => (
  isShown ? <div className={styles.Backdrop} onClick={close} role="presentation" /> : null
);

Backdrop.propTypes = {
  isShown: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default Backdrop;
