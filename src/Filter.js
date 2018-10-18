import React from 'react';

const Filter = (props) => {

		return(
			<section className="filter">
				<h2>Choose a distance</h2>
				<article className="custom-select">
					<select 
						onChange={(event) => props.handleChange(event.target.value)}
						defaultValue="2000" 
					>
						<option value="1000">1 km</option>
						<option value="1500">1.5 km</option>
						<option value="2000">2 km</option>
					</select>
				</article>
			</section>
		);
	}


export default Filter;