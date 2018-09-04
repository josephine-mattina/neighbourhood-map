import React, { Component } from 'react';
import SingleListing from './SingleListing';

class Listings extends Component {
	render() {
		return(
			<section className="listings">
				<SingleListing />
			</section>
		)
	}
}

export default Listings;