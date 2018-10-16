import React from 'react';
// import SingleListing from './SingleListing';

const Listings = (props) => {

	// TODO: write click listener for showing address p
	// TODO: find out what data can be passed from event target

	// onListingClick = () => {
	// 	// p display: block
	// 	// this.props.handleListingClick(dataFromEventTarget);
	// }

	return(
		<section className="listings">
			{props.listings.map(listing => (
				<article key={listing.id} className="single-listing">
					<h3>{listing.name}</h3>
					<p>{listing.location.address || "address unavailable"}</p>
				</article>
			))}
		</section>
	);
}

export default Listings;

// <SingleListing listing={listing}/>