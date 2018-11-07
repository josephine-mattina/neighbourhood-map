import React, { Component } from 'react';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import Map from './Map';
import * as LocationsAPI from './LocationsAPI';
import './App.css';

class App extends Component {

  state = {
    venues: [],
    value: '2000',
    position: '',
    selectedItem: undefined
  }

  updateState = () => {
    LocationsAPI.getAll(this.state.value)
    .then((venues) => {
      this.setState({venues});
    })
  }

  componentDidMount() {
    this.updateState();
    setTimeout(() => {
      const iframe = document.getElementsByTagName('iframe').item(0);
      iframe.title = "Map of Glasgow City Centre";
    }, 1500);
  }

  handleFilter = (event) => { 
    LocationsAPI.getAll(event)
       .then((venues) => {
         this.setState({venues});
        })
  }

  // Callback from Listing
  handleListingClick = (listing) => {
    this.setState(() => ({ selectedItem: listing.name}));
    setTimeout(() => {
      this.setState(() => ({ selectedItem: false }));
    }, 1500);
  }

  render() {
    return (
      <main className="app">
        <Header />
        <Filter 
          handleFilter={this.handleFilter}
        />
        <Listings
          listings={this.state.venues}
          handleListingClick={this.handleListingClick}
        />
        <Map 
          locations={this.state.venues}
          position={this.state.position}
          clicked={this.state.selectedItem}
        />
      </main>
    );
  }
}

export default App;
