import React, { Component } from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import iconInactive from "./icons/marker.png";
import iconActive from "./icons/active.png";

// const LoadingContainer = props => (
// 	<div className="map">
// 		<p>Sorry, Google Maps can't load right now</p>
// 	</div>
// );

const Markers = props => (
	props.locations.map((location) => (
		<Marker 
			{...props}
			onClick={props.onClick}
      		position={{lat: location.location.lat, lng: location.location.lng}}
			key={location.id}
      		icon={props.activeMarker ? (props.activeMarker.name === location.name ? iconActive : iconInactive) : iconInactive}
      		name={location.name}
      		address={location.location.address || "address unavailable"}
		/>
	)
));

export class GlaMap extends Component {

	state = {
	    showingInfoWindow: false,
	    activeMarker: null,
	    selectedPlace: {},
	};

	markers = [];

	onMarkerClick = (anything1, anything2) =>
    this.setState({
		selectedPlace: anything1,
		activeMarker: anything2,
		showingInfoWindow: true,
    })
    ;

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
					activeMarker={this.state.activeMarker}
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