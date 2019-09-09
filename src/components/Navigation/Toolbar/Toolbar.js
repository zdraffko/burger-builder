import React from "react";
import PropTypes from "prop-types";

import Logo from "../../Logo/Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavItems from "../NavItems/NavItems";
import styles from "./Toolbar.module.css";

const Toolbar = ({ openSideDrawer }) => (
  <header className={styles.Toolbar}>
    <BurgerMenu open={openSideDrawer} />
    <Logo />
    <nav className={styles.HideNavItems}>
      <NavItems />
    </nav>
  </header>
);

Toolbar.propTypes = { openSideDrawer: PropTypes.func.isRequired };

export default Toolbar;
