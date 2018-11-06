import React, { Component } from 'react';
import MapWithMarker from './MapWithMarker';
// import iconInactive from "./icons/marker.png";
// import iconActive from "./icons/active.png";


class Map extends Component {

	// markers = [];

	// onMarkerClick = (marker, location) => {
	// 	console.log('This is marker', marker, 'This is location', location)
	// 	this.props.handleMarkerClick(location)
	// }

	render() {
		return (
			<MapWithMarker
				googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyDUsVzFs47MfEzmFIuQCTRfQx_3kXO69RM&v=3"}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100vh` }} className={'map'} />}
				{...this.props}
			/>
		)
	}

}

export default Map;
