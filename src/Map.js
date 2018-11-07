import React, { Component } from 'react';
import MapWithMarker from './MapWithMarker';

class Map extends Component {

	render() {
		return (
			<MapWithMarker
				googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyDUsVzFs47MfEzmFIuQCTRfQx_3kXO69RM&v=3"}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100vh` }} className={'map'} title={'map'}/>}
				{...this.props}
			/>
		)
	}

}

export default Map;
