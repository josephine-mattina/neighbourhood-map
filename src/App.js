import React, { Component } from 'react';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import Map from './Map';
import * as LocationsAPI from './LocationsAPI';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      value: '2000',
      position: '',
      selectedItem: undefined,
      gmError: null
    }
    this.gm_authFailure = this.gm_authFailure.bind(this);

  }

  updateState = () => {
    LocationsAPI.getAll(this.state.value)
    .then((venues) => {
      this.setState({venues});
    })
  }

  componentDidMount() {
    this.updateState();
    // Handle iframe a11y
    setTimeout(() => {
      this.titleIframe();
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

  // Handle custom error message for map
  gm_authFailure(error) {
    this.setState(() => ({ gmError: error }));
    clearTimeout(this.timeOut);
  }

  // Give title to map iframe for a11y
  titleIframe = () => {
    const iframe = document.getElementsByTagName('iframe').item(0);
    iframe.title = "Map of Glasgow City Centre";
  }
 
  render() {
    return (
      <main className="app">
        <Header />
        <Filter 
          handleFilter={this.handleFilter}
        />
        <ErrorBoundary>
          <Listings
            listings={this.state.venues}
            handleListingClick={this.handleListingClick}
          />
          <section role="application">
            {this.state.gmError ? 
              <div className="errMsg">Sorry, Google Maps can't load right now!<iframe id="errIframe" title="{this.titleIframe}"></iframe></div> :
              <Map 
                locations={this.state.venues}
                position={this.state.position}
                clicked={this.state.selectedItem}
                gm_authFailure={this.gm_authFailure}
              />
            }
          </section>
        </ErrorBoundary>
      </main>
    );
  }
}

export default App;
