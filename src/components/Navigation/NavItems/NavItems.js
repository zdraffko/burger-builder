import React from "react";

import NavItem from "./NavItem/NavItem";
import styles from "./NavItems.module.css";

const NavItems = () => (
  <ul className={styles.NavItems}>
    <NavItem link="/burger-builder">Burger Builder</NavItem>
    <NavItem link="/checkout">Checkout</NavItem>
  </ul>
);

export default NavItems;
