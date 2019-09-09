import React from "react";
import PropTypes from "prop-types";

import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import styles from "./SideDrawer.module.css";

const SideDrawer = ({ isActive, closeSideDrawer }) => {
  let attachedStyle = styles.SideDrawer;
  if (isActive) {
    attachedStyle += ` ${styles.Opened}`;
  } else {
    attachedStyle += ` ${styles.Closed}`;
  }

  return (
    <>
      <Backdrop isShown={isActive} close={closeSideDrawer} />
      <div className={attachedStyle}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </>
  );
};

SideDrawer.propTypes = {
  isActive: PropTypes.bool.isRequired,
  closeSideDrawer: PropTypes.func.isRequired,
};

export default SideDrawer;
