import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Map extends Component {
	componentDidMount() {
		window.initMap = this.initMap;
		loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDUsVzFs47MfEzmFIuQCTRfQx_3kXO69RM&callback=initMap')
	}
	//TODO: Fix error here?
	initMap() {
		var map;
		const google = window.google;
		const mapRef = this.refs.map;
		map = new google.maps.Map(ReactDOM.findDOMNode(mapRef), {
          center:  {lat: 55.859292, lng: -4.258055},
          zoom: 13
		});
	}

	render() {
	    return (
	    	<div>
		      <div ref='map' style={{height: '500px', width: '500px'}}>

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

	// componentDidUpdate(prevProps, prevState) {
	//     if (prevProps.google !== this.props.google) {
	//       this.loadMap();
	//     }
	// }

	// loadMap() {
	//     if (this.props && this.props.google) {
 //    		// google is available
	// 		const {google} = this.props;
	// 		const maps = google.maps;
	// 		// reference to the actual DOM element
	// 		const mapRef = this.refs.map;
	// 		const node = ReactDOM.findDOMNode(mapRef);
	// 		// google map works directly with DOM element as though using JS
	// 		let zoom = 14;
 //    		let lat = 55.859292;
	// 		let lng = -4.258055;
	// 		const center = new maps.LatLng(lat, lng);
	// 		const mapConfig = Object.assign({}, {
	// 	        center: center,
	// 	        zoom: zoom
	// 	    })
	// 	    this.map = new maps.Map(node, mapConfig);
	// 	}
	// }

	// render() {
	//     return (
	//       <div ref='map' className="map">

	//       </div>
	//     )
	// }