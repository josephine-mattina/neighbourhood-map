import React, { Component } from 'react';

class Filter extends Component {
	render() {
		return(
			<section className="filter">
				<h2>How far do you want to go?</h2>
				<select defaultValue="1">
					<option disabled="disabled" value="1">Choose a distance</option>
					<option value="0.5km">0.5km</option>
					<option value="1km">1km</option>
					<option value="1.5km">1.5km</option>
					<option value="2km">2km</option>
				</select>
			</section>
		)
	}
}

export default Filter;