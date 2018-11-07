import React, { Component } from 'react';

class Header extends Component {

	render() {
		return(
	        <header>
		        <h1>Vego Central</h1>
	            <p className="credit">
		            with data provided by <a href="https://foursquare.com/" className="link">Foursquare</a>
		        </p>
	        </header>
		)
	}
}

export default Header;