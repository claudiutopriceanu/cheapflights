import axios from 'axios';
import moment from 'moment';

const baseURL = 'https://desktopapps.ryanair.com/v3/en-gb/availability'


const flatten = list => list.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

const flattenFlights = (response) => {
  return flatten(response.trips[0]['dates'].map( date => date['flights']))
}

const normalizeFlight = (flight) => {
  return {
    id: flight.flightKey,
    departure: moment(flight.timeUTC[0]),
    arrival: moment(flight.timeUTC[1]),
    from: flight.segments[0].origin,
    to: flight.segments[0].destination,
    fare: flight.regularFare.fares[0]['amount']
  }
}




export function fetchFlights(origin, destination, startDate) {
  return dispatch => {
    const params = {
      'Origin': origin,
      'Destination': destination,
      'DateOut': startDate.format('YYYY-MM-DD'),
      'ADT': 1,
      'CHD': 0,
      'INF': 0,
      'TEEN': 0,
      'FlexDaysOut': 6,
      'RoundTrip': false,
      'ToUs': 'AGREED',
      'exists': false
    }
    return axios({
        method: 'get',
        url: baseURL,
        params: params,
      })
      .then(response => response.data)
      .then(json => {
        dispatch({
          type: 'FETCH_FLIGHTS',
          entries: flattenFlights(json).filter(flight => flight.faresLeft !== 0).map(flight => {
            return normalizeFlight(flight)
          })
        })
      })
  }
}
