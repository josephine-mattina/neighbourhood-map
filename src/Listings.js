import React from 'react';
import SingleListing from './SingleListing';

const Listings = (props) => {
	return(
		<section className="listings">
			{props.listings.map(listing => (
				<article key={listing.id}>
					<SingleListing listing={listing}/>
				</article>
			))}
		</section>
	);
}

export default Listings;