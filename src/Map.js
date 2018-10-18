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
			onClick={props.onClick} //.bind(this, location)
      		position={{lat: location.location.lat, lng: location.location.lng}}
			key={location.id}
      		icon={props.selectedItem ? (props.selectedItem.name === location.name ? iconActive : iconInactive) : iconInactive}
      		name={location.name}
      		address={location.location.address || "address unavailable"}
		/>
	)
	
));

export class GlaMap extends Component {

	// state = {
	 
	//     // selectedPlace: {},
	//     // showingInfoWindow:false
	// };

	markers = [];

	// onMarkerClick = (props, marker) => {

	//     this.setState({
	// 		selectedPlace: props,
	// 		activeMarker: marker,
	// 		showingInfoWindow: true
	//     });

	// }

	// TODO: Why is showingInfoWindow not working? 
	// In APP infoWindow state is logged from lines 57 and 65 as true, but props passed in here do not reflect state?
	
	

	onMarkerClick = (marker, location) => {
		console.log('This is marker', marker, 'This is location', location)
		this.props.handleMarkerClick(location)
			//  this.setState({

			// showingInfoWindow: true
	  //   });

	}

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
						onClick={this.onMarkerClick.bind(this)}
						selectedItem={this.props.selectedItem}
					/>
					<InfoWindow
						marker={this.props.selectedItem}
						visible= {this.props.showingInfoWindow}
						className={'info'}
						//open=true
					>
						<article>
							<h2>{this.props.selectedItem.name}</h2>
							<p>{this.props.selectedItem.address}</p>
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







