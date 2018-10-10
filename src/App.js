import React, { Component } from 'react';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import Map from './Map';
import * as LocationsAPI from './LocationsAPI';
import './App.css';

class App extends Component {

  state = {
    venues: []
  }

  updateState = () => {
    LocationsAPI.getAll()
    .then((venues) => {
      this.setState({ venues });
      console.log(this.state.venues);
    })
  }

  componentDidMount() {
    this.updateState();
  }

  render() {
    return (
      <main className="app">
        <Header />
        <Filter />
        <Listings 
          listings={this.state.venues}
        />
        <Map 
          locations={this.state.venues}
        />
      </main>
    );
  }
}

export default App;
