import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./NavItem.module.css";

const NavItem = ({ link, children }) => (
  <li className={styles.NavItem}>
    <NavLink to={link} activeClassName={styles.active}>{children}</NavLink>
  </li>
);

NavItem.propTypes = { link: PropTypes.string.isRequired };

export default NavItem;
