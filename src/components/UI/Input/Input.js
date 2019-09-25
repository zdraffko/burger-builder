import React from "react";
import PropTypes from "prop-types";

import styles from "./Input.module.css";

const Input = ({ type, placeholder, value, isValid, isTouched, inputChange }) => (
  <div className={styles.Input}>
    {isValid ? null : <p className={styles.ErrorMessage}>Please enter a valid value!</p>}
    <input
      className={!isValid && isTouched ? `${styles.InputElement} ${styles.Invalid}` : styles.InputElement}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={inputChange}
    />
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  isTouched: PropTypes.bool.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default Input;
