import React, { Component } from 'react';
// import menu from "./icons/menu.svg";

class Header extends Component {
	// state = {
	//     open: false
	// };

	render() {
		return(
	        <header>
		        <h1>Vego Central</h1>
	            <p className="credit">
		            with data provided by <a href="https://foursquare.com/" className="link">Foursquare</a>
		        </p>
	        </header>
			// <img 
	  //         src={menu}
	  //         role="menu"
	  //         alt="hamburger menu icon, opens sidebar"
	  //         className="menu-icon"
	  //         onClick={() => {
	  //           this.setState({
	  //             open: !this.state.open
	  //           });
	  //         }}
			// />
		)
	}
}

export default Header;