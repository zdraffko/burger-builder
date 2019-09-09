import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

const Button = ({ buttonType, click, children }) => (
  <button
    type="button"
    className={`${styles.Button} ${styles[buttonType]}`}
    onClick={click}
  >{children}
  </button>
);

Button.propTypes = {
  buttonType: PropTypes.oneOf(["Success", "Fail"]).isRequired,
  click: PropTypes.func.isRequired,
};

export default Button;
