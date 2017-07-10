import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import FlightSearch from './components/FlightSearch';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <FlightSearch />
      </Provider>
    );
  }
}

export default App;
