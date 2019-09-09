import React from "react";
import PropTypes from "prop-types";

import styles from "./NavItem.module.css";

const NavItem = ({ link, isActive, children }) => (
  <li className={styles.NavItem}>
    <a
      className={isActive ? styles.active : null}
      href={link}
    >{children}
    </a>
  </li>
);

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default NavItem;
