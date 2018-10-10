import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const LoadingContainer = props => (
	<div id="map">
		<p>Sorry, Google Maps can't load right now</p>
	</div>
);

const Markers = props => (
	props.locations.map((location, index) => (
		<Marker 
			{...props}
			// {...location.location.labeledLatLngs}
      		// position={{lat: 55.861099987043744, lng:-4.257893711003083}}
			key={location.id}
	    	ref={instance => {
	        	// add the Marker instance to an array of references
	        	props.refs[index] = instance;
      		}}
      		name={location.name}
		/>
	)
));

export class GlaMap extends Component {
	markers = [];

	render() {

		return(
			<Map 
		        role="application"
		        aria-label="Map of Glasgow City Centre"
		        tabIndex="-1"
				google={this.props.google}
				zoom={14}
				initialCenter={{
					lat: 55.859292,
					lng: -4.258055
				}}
			>
				<Markers
					locations={this.props.locations}
					refs={this.markers}
				/>

			</Map>
		)
	}

}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDUsVzFs47MfEzmFIuQCTRfQx_3kXO69RM",
  LoadingContainer: LoadingContainer
})(GlaMap)