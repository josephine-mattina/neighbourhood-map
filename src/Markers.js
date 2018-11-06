import React, { Component } from 'react';
import { InfoWindow, Marker } from 'react-google-maps';
import iconInactive from "./icons/marker.png";
import iconActive from "./icons/active.png";

class Markers extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  isOpen: this.props.clicked,
		  count: false
		}
		this.onToggleOpen = this.onToggleOpen.bind(this);
	}

	onToggleOpen() {
		this.setState((prevState) => ({ isOpen: !(prevState.isOpen) }));
	}

	componentDidUpdate() {
		if(this.props.clicked && !this.state.count) {
		  this.setState(() => ({isOpen: true, count: true}))
		  setTimeout(() => {
		    this.setState(() => ({count: false}))
		  }, 1500);
		}
	}

	render() {
		return (
			<Marker
				position={{lat: this.props.lat, lng: this.props.lng}}
				onClick={this.onToggleOpen}
				icon={this.state.isOpen ? iconActive : iconInactive}
			>
			{(this.state.isOpen) && 
				<InfoWindow 
					onCloseClick={this.onToggleOpen}
					className={'info'}
				>
					<article>
						{this.props.name ?
							<h2>{this.props.name}</h2> : null
						}
						{this.props.location.address ?
							<p>{this.props.location.address}</p> : "address unavailable"
						}
					</article>
				</InfoWindow>

			}
				
			</Marker>
		)
	}
}

export default Markers;

	// icon={props.selectedItem ? (props.selectedItem.name === location.name ? iconActive : iconInactive) : iconInactive}
	// name={location.name}
	// address={location.location.address || "address unavailable"}