import React from "react";
import PropTypes from "prop-types";

import styles from "./Control.module.css";

const Control = ({ label, add, remove, isDisabled }) => (
  <div className={styles.Control}>
    <div className={styles.Label}>{label}</div>
    <button
      className={styles.More}
      type="button"
      onClick={add}
    >More
    </button>
    <button
      className={styles.Less}
      type="button"
      onClick={remove}
      disabled={isDisabled}
    >Less
    </button>
  </div>
);

Control.propTypes = {
  label: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Control;
