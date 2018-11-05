import React, { Component } from 'react';
// import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { compose, withProps } from "recompose";
import iconInactive from "./icons/marker.png";
import iconActive from "./icons/active.png";


// const Markers = props => (
// 	props.locations.map((location) => (
// 		<Marker 
// 			{...props}
// 			onClick={props.onClick} //.bind(this, location)
//       		position={{lat: location.location.lat, lng: location.location.lng}}
// 			key={location.id}
//       		icon={props.selectedItem ? (props.selectedItem.name === location.name ? iconActive : iconInactive) : iconInactive}
//       		name={location.name}
//       		address={location.location.address || "address unavailable"}
// 		/>
// 	)
// ));

const MapComponent = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDUsVzFs47MfEzmFIuQCTRfQx_3kXO69RM&v=3",
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `100vh` }} className={'map'} />,
		mapElement: <div style={{ height: `100%` }} />,
		locations: this.props.locations,
	}),
	withScriptjs,
	withGoogleMap
)((props) =>
	<GoogleMap
        role="application"
        aria-label="Map of Glasgow City Centre"
        tabIndex="-1"
		defaultZoom={13}
		defaultCenter={{
			lat: 55.859292,
			lng: -4.258055
		}}
	>
	
		{props.locations.map((location) => {
			return (
			<Marker 
				{...props}
				onClick={props.onClick} //.bind(this, location)
	      		position={{lat: location.location.lat, lng: location.location.lng}}
				key={location.id}
	      		icon={props.selectedItem ? (props.selectedItem.name === location.name ? iconActive : iconInactive) : iconInactive}
	      		name={location.name}
	      		address={location.location.address || "address unavailable"}
			/>
			)
		})}

	</GoogleMap>
)

class GlaMap extends Component {

	// markers = [];

	// onMarkerClick = (marker, location) => {
	// 	console.log('This is marker', marker, 'This is location', location)
	// 	this.props.handleMarkerClick(location)
	// }

	render() {


		return(
	

			<MapComponent
				// onMarkerClick={this.onMarkertClick}
			/>
		)
	}

}

export default GlaMap;


        // <Marker
        //   position={{lat: 55.859292,lng: -4.258055}}
        //   title="Click to zoom"
        //   onClick={props.onMarkerClick}
        // />



