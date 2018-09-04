import React, { Component } from 'react';
import Filter from './Filter';

class Header extends Component {
	render() {
		return(
			<header>
				<h1>Where Vego</h1>
				<Filter />
			</header>
		)
	}
}

export default Header;