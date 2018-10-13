import React, { Component } from 'react';
import * as LocationsAPI from './LocationsAPI';
import * as App from './App';

class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 2000};

    this.handleChange = this.handleChange.bind(this);
    console.log('test')
  }

		handleChange(event){
			//LocationsAPI.getAll(e.target.value);
			//this.setState({value: e.target.value});
			console.log(event.target.value)
			this.setState({value: event.target.value});
			console.log(this.state.value)

		}


	render() {
		return(
			<section className="filter">
				<h2>Choose a distance</h2>
				<article className="custom-select">
					<select 
						onChange={this.handleChange} 
					>
						<option value="500">0.5 km</option>
						<option value="1000">1 km</option>
						<option value="1500">1.5 km</option>
						<option value="2000">2 km</option>
					</select>
				</article>
			</section>
		)
	}
}

export default Filter;


//						defaultValue="2000"