import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/burger-builder" component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Redirect exact from="/" to="/burger-builder" />
            <Route render={() => <div>404</div>} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
