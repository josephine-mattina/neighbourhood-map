import React, { Component } from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import icon from "./icons/marker.png";
import iconActive from "./icons/active.png";

// const LoadingContainer = props => (
// 	<div className="map">
// 		<p>Sorry, Google Maps can't load right now</p>
// 	</div>
// );

const Markers = props => (
	props.locations.map((location, index) => (
		<Marker 
			{...props}
      		position={{lat: location.location.lat, lng: location.location.lng}}
			key={location.id}
	    	ref={instance => {
	        	// add the Marker instance to an array of references
	        	props.refs[index] = instance;
      		}}
      		icon={
      			icon
      			//this.state.icon //iconActive
		        //props.activeMarker.name === location.name ? iconActive : icon
		     }
      		name={location.name}
      		address={location.location.address || "address unavailable"}
		/>
	)
));

export class GlaMap extends Component {

	state = {
	    showingInfoWindow: false,
	    activeMarker: {},
	    selectedPlace: {},
	    // icon: {iconActive}
	};

	markers = [];

	onMarkerClick = (props, marker, e) =>
    this.setState({
		selectedPlace: props,
		activeMarker: marker,
		showingInfoWindow: true,
		// icon: iconActive
    }

    );

	render() {

		return(
			<Map 
		        role="application"
		        aria-label="Map of Glasgow City Centre"
		        tabIndex="-1"
				google={this.props.google}
				zoom={13}
				initialCenter={{
					lat: 55.859292,
					lng: -4.258055
				}}
				className={'map'}
				containerStyle={{position: this.props.position}}
			>
				<Markers
					locations={this.props.locations}
					refs={this.markers}
					onClick={this.onMarkerClick}
					//icon={this.icon}
					//icon={this.state.icon}
				/>
				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
					className={'info'}
				>
					<article>
						<h2>{this.state.selectedPlace.name}</h2>
						<p>{this.state.selectedPlace.address}</p>
					</article>
				</InfoWindow>

			</Map>
		)
	}

}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDUsVzFs47MfEzmFIuQCTRfQx_3kXO69RM",
  // LoadingContainer: LoadingContainer
})(GlaMap)