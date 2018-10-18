import React, { Component } from 'react';

class Listings extends Component {

	// TODO: Ignore for now: write click listener for showing address p

	onListingClick = (listing) => {
		console.log('this is from Listings component:', listing);
		this.props.handleListingClick(listing)
	}

	render() {
		return(
			<section className="listings-container">
			<ol className="listings">
				{this.props.listings.map(listing => (
					<li key={listing.id} 
						className="single-listing" 
						tabIndex="0"
		                role="button"
						id={listing} 
						onClick={this.onListingClick.bind(this, listing)}
					>
						<h3>{listing.name}</h3>
					</li>
				))}
			</ol>
			</section>
		);
	}

}

export default Listings;

// <p>{listing.location.address || "address unavailable"}</p>