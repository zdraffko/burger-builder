import React from "react";
import PropTypes from "prop-types";

import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

const Modal = ({ isShown, children, closeModal }) => {
  let modalClass = styles.Modal;
  if (isShown) {
    modalClass += ` ${styles.showModal}`;
  } else {
    modalClass += ` ${styles.hideModal}`;
  }

  return (
    <>
      <Backdrop isShown={isShown} close={closeModal} />
      <div className={modalClass}>
        {children}
      </div>
    </>
  );
};

Modal.propTypes = {
  isShown: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
