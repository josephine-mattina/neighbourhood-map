import React, { Component } from 'react';
import MapWithMarker from './MapWithMarker';

const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDUsVzFs47MfEzmFIuQCTRfQx_3kXO69RM&v=3'

class Map extends Component {

	componentDidMount() {
		window.gm_authFailure = this.gm_authFailure;
	}		

	gm_authFailure = () => {
		this.props.gm_authFailure("Authorization failed!");
	}

	render() {
		return (
			<MapWithMarker
				googleMapURL={url}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100%` }} />}
				mapElement={<div style={{ height: `100vh` }} className={'map'} title={'map'}/>}
				{...this.props}
			/>
		)
	}

}

export default Map;
