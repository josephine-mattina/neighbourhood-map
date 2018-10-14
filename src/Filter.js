import React, { Component } from 'react';
import * as LocationsAPI from './LocationsAPI';
import App from './App';
import Header from './Header';
import Listings from './Listings';
import Map from './Map';

const Filter = (props) => {

		return(
			<section className="filter">
				<h2>Choose a distance</h2>
				<article className="custom-select">
					<select 
						onChange={(event) => props.handleChange(event.target.value)}
						defaultValue="2000" 
					>
						<option value="500">0.5 km</option>
						<option value="1000">1 km</option>
						<option value="1500">1.5 km</option>
						<option value="2000">2 km</option>
					</select>
				</article>
			</section>
		);
	}


export default Filter;