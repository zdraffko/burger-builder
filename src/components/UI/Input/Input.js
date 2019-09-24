import React from "react";

import styles from "./Input.module.css";

const Input = ({ type, placeholder, value, inputChange }) => (
  <div className={styles.Input}>
    <input
      className={styles.InputElement}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={inputChange}
    />
  </div>
);

export default Input;
