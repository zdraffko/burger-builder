import React from "react";

import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.content}>
      {children}
    </main>
  </>
);

export default Layout;
