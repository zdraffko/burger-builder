import React, { Component } from "react";

import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import styles from "./Layout.module.css";

class Layout extends Component {
  state = { isSideDrawerActive: false };

  openSideDrawerHandler = () => {
    this.setState({ isSideDrawerActive: true });
  };

  closeSideDrawerHandler = () => {
    this.setState({ isSideDrawerActive: false });
  };

  render() {
    return (
      <>
        <Toolbar openSideDrawer={this.openSideDrawerHandler} />
        <SideDrawer
          isActive={this.state.isSideDrawerActive}
          closeSideDrawer={this.closeSideDrawerHandler}
        />
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </>
    );
  }
}
export default Layout;
