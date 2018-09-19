import React, { Component } from 'react';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import Map from './Map';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <Listings />
        <Map />
      </div>
    );
  }
}

export default App;
