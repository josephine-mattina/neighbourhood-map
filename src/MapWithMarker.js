import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Markers from './Markers';

class MapWithMarker extends Component {
	render() {
		return (
			<GoogleMap
		        aria-label="Map of Glasgow City Centre"
		        tabIndex="-1"
				defaultZoom={13}
				defaultCenter={{
					lat: 55.859292,
					lng: -4.258055
				}}
				options={{gestureHandling: 'greedy'}}
				{...this.props}
			>
				{this.props.locations.map((location) => (
						<Markers 
							{...location}
	      		            lat={location.location.lat}
				            lng={location.location.lng}
							key={location.id}
							clicked={this.props.clicked === location.name ? true : false}
						/>
				))}

			</GoogleMap>
		);
	}
}

export default withScriptjs(withGoogleMap(MapWithMarker));