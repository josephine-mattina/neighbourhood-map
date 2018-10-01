import React, { Component } from 'react';

class Filter extends Component {
	render() {
		return(
			<section className="filter">
				<h2>Choose a distance</h2>
				<article className="custom-select">
					<select defaultValue="1">
						<option value="0.5km">0.5 km</option>
						<option value="1km">1 km</option>
						<option value="1.5km">1.5 km</option>
						<option value="2km">2 km</option>
					</select>
				</article>
			</section>
		)
	}
}

export default Filter;