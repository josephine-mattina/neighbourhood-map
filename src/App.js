import React, { Component } from 'react';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import Map from './Map';
import * as LocationsAPI from './LocationsAPI';
import './App.css';

// TODO: Read docs on state & Thinking in React. How to pass state to components as props?
class App extends Component {

  state = {
    venues: []
  }

  updateState = () => {
    LocationsAPI.getAll()
    .then((venues) => {
      this.setState({ venues });
    })
  }

  componentDidMount() {
    this.updateState();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Filter />
        <Listings 
          listings={this.state.venues}
        />
        <Map 

        />
      </div>
    );
  }
}

export default App;
