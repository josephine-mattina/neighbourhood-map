import React, { Component } from 'react';
import { InfoWindow, Marker } from 'react-google-maps';
import iconInactive from "./icons/marker.png";
import iconActive from "./icons/active.png";

class Markers extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  isOpen: this.props.clicked,
		  count: false,
		  activeMarker: undefined
		}
		this.onMarkerClick = this.onMarkerClick.bind(this);
	}

	onMarkerClick() {
		this.props.updateOpenedMarker(this.props.name);
		this.setState((prevState) => ({ isOpen: !(prevState.isOpen) }));
	}

	// Handle infowindow open/close on listing click
	componentDidUpdate() {
		if(this.props.clicked && !this.state.count) {
		  this.setState(() => ({isOpen: true, count: true}))
		  this.props.updateOpenedMarker(this.props.name);
		  setTimeout(() => {
		    this.setState(() => ({count: false}))
		  }, 1500);
		}
		//Make sure previous marker is clickable again after closing
		if (this.props.opened !== this.props.name && this.state.isOpen) {
		   this.setState(() => ({ isOpen: false }))
		}
	}

	render() {
		return (
			<Marker
				position={{lat: this.props.lat, lng: this.props.lng}}
				onClick={this.onMarkerClick}
				icon={this.state.isOpen && this.props.opened === this.props.name ? iconActive : iconInactive}
			>
			{(this.state.isOpen && this.props.opened === this.props.name) && 
				<InfoWindow 
					onCloseClick={this.onMarkerClick}
					className={'info'}
				>
					<article>
						{this.props.name ?
							<h2>{this.props.name}</h2> : "name unavailable"
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
