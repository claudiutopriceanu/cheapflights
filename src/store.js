import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import moment from 'moment';

const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const initialState = {
  flights: {
    entries: []
  }
}

function flights(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_FLIGHTS':
      return {...state, entries: [...state.entries, ...action.entries]}
    case 'RESET_SEARCH':
      return {...state, entries: []}
    default:
      return state
  }
}


const middleware = [
  thunk
]


const composedEnhancers = compose(
  applyMiddleware(...middleware),
	...enhancers,
)

const rootReducer = combineReducers({
  flights,
  form: formReducer
})


const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
