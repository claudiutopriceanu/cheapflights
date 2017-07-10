import React from 'react';
import { Panel } from 'react-bootstrap';

import FlightSearchResultList from './FlightSearchResultList';
import FlightsSearchReduxForm from './FlightSearchReduxForm';

import { fetchFlights } from '../../actions'



export default function FlightSearch(props) {
  return (
    <div className="container">
        <Panel>
          <FlightsSearchReduxForm onSubmit={fetchFlights} />
        </Panel>

        <FlightSearchResultList />
    </div>
  )
}
