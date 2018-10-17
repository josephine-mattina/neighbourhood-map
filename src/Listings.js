import React, { Component } from 'react';

class Listings extends Component {

	// TODO: Ignore for now: write click listener for showing address p
	// DONE: find out what data can be passed from event target


	onListingClick = (listing, event) => 
		{console.log('this is from Listings component:', listing.name);
		this.props.handleListingClick(listing.name)
	}

	render() {
		return(
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
		);
	}

}

export default Listings;

// <p>{listing.location.address || "address unavailable"}</p>