import React, { Component } from 'react';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import Map from './Map';
import Footer from './Footer';
import * as LocationsAPI from './LocationsAPI';
import './App.css';

class App extends Component {

  state = {
    venues: [],
    value: '2000',
    position: '',
    height: '100%'
  }

  updateState = () => {
    LocationsAPI.getAll(this.state.value)
    .then((venues) => {
      this.setState({venues});
    })
  }

  componentDidMount() {
    this.updateState();
    this.handleResize();
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  handleChange = (event) => { 
    console.log(event);
    LocationsAPI.getAll(event)
       .then((venues) => {
         this.setState({venues});
         console.log(this.state.venues);
        })
    }

  handleResize() {
      if (window.innerWidth < 768) {
          this.setState({position: 'absolute', height: '50%'});
     } else {
          this.setState({position: 'relative', height: '100%'});
     }
  }

  // Callback from Listing
  // handleListingClick(dataFromListing) {

  // }

  // For line 65: 
  // handleListingClick={this.handleListingClick}

  render() {
    return (
      <main className="app">
        <Header />
        <Filter 
          handleChange={this.handleChange}
        />
        <Listings
          listings={this.state.venues}
        />
        <Map 
          locations={this.state.venues}
          position={this.state.position}
        />
        <Footer/>
      </main>
    );
  }
}

export default App;
