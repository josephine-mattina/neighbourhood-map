import React, { Component } from 'react';

class SingleListing extends Component {
	render() {
		return(
			<article className="single-listing">
				<h3 className="venue-name">Restaurant Name</h3>
				<p className="venue-address">33 Example Street, G20 6EZ</p>
			</article>
		)
	}
}

export default SingleListing;