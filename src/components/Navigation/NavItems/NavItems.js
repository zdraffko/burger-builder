import React, { Component } from "react";

import NavItem from "./NavItem/NavItem";
import styles from "./NavItems.module.css";

class NavItems extends Component {
	state = { promptEvent: null };

	handler = (event) => {
		event.preventDefault();
		this.setState({promptEvent: event});
	}

	componentDidMount(){
		window.addEventListener("beforeinstallprompt", this.handler);

	}

	componentWillUnmount(){
		window.removeEventListener("transitionend", this.handler);
	}

	onClick = () => {
		if (!this.state.promptEvent){
			return;
		}

		this.state.promptEvent.prompt();
	}

	render(){
		return (
		<ul className={styles.NavItems}>
			<NavItem link="/burger-builder">Burger Builder</NavItem>
			<NavItem link="/orders">Orders</NavItem>
			{this.state.promptEvent && <button onClick={this.onClick}>Install App</button>}
		</ul>
		);
	}
}

export default NavItems;
