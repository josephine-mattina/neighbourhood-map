import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Map extends Component {
	componentDidMount() {
		window.initMap = this.initMap;
		loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDUsVzFs47MfEzmFIuQCTRfQx_3kXO69RM&callback=initMap')
	}

	initMap() {
		const google = window.google;
		const map = new google.maps.Map(document.getElementById('map'), {
          center:  {lat: 55.859292, lng: -4.258055},
          zoom: 13
		});
	}

	render() {
	    return (
	    	<div>
		      <div id="map">

		      </div>
	      </div>
	    )
	}
}

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}

export default Map;