import React, { Component } from 'react';
import { GoogleApiComponent } from 'google-maps-react';
import Map from './Map';

export class MapContainer extends Component {
	render() {
	    if (!this.props.loaded) {
	    	return <div>Loading...</div>
	    }
	    return (
	    	<div>
		      <Map google={this.props.google} />
	    	</div>
	    )
	}
}

export default GoogleApiComponent({
	apiKey: AIzaSyDUsVzFs47MfEzmFIuQCTRfQx_3kXO69RM
})(MapContainer)