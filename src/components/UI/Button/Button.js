import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

const Button = ({ buttonType, click, isDisabled, children }) => (
  <button
    type="button"
    className={`${styles.Button} ${styles[buttonType]}`}
    onClick={click}
    disabled={isDisabled}
  >{children}
  </button>
);

Button.propTypes = {
  buttonType: PropTypes.oneOf(["Success", "Fail"]).isRequired,
  click: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = { isDisabled: false };

export default Button;
