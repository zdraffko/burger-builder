import React from "react";

import NavItem from "./NavItem/NavItem";
import styles from "./NavItems.module.css";

const NavItems = () => (
  <ul className={styles.NavItems}>
    <NavItem link="/" isActive>Burger Builder</NavItem>
    <NavItem link="/" isActive={false}>Checkout</NavItem>
  </ul>
);

export default NavItems;
