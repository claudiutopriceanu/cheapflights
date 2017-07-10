import React, { Component } from 'react';
import ReduxFormSelect from './ReduxFormSelect';
import { reduxForm, Field, Fields } from 'redux-form';
import { Button } from 'react-bootstrap';
import { send } from 'react-icons-kit/fa/send'; 
import Icon from 'react-icons-kit';
import moment from 'moment';
import { connect } from 'react-redux';

import DateRangePickerWrapper from './DateRangePickerWrapper';
import airports from './airports'
import { fetchFlights } from '../../actions'

import 'react-select/dist/react-select.css';
import 'react-dates/lib/css/_datepicker.css'


const required = value => value ? undefined : 'This field is required'


const renderDates = fields => {
  return (
    <div>
      <DateRangePickerWrapper
        startDateFieldName="start"
        endDateFieldName="end"
        {...fields}
      />
      {fields.start.meta.touched && fields.start.meta.error &&
           <div className="text-danger">{fields.start.meta.error}</div>}
      {fields.end.meta.touched && fields.end.meta.error &&
           <div className="text-danger">{fields.end.meta.error}</div>}
    </div>
  )
}

const formatDates = (value, name) => {
  if (value) {
    return moment(value);
  }
}

const normalizeDates = (name, value) => {
  return value.format();
}


const validate = values => {
    const errors = {}
    if (!values.start) {
        errors.start = 'Please select a start date'
    }
    if (!values.end) {
        errors.end = 'Please select an end date'
    }
    return errors
}


const FlightsSearchForm = (props) => {

    return (
      <form onSubmit={props.handleSubmit} >
        <div className="form-field">
          <Field name="from"
                 component={ReduxFormSelect}
                 validate={[required]}
                 placeholder="From"
                 options={airports} />
        </div>
        <div className="form-field">
          <Field name="to"
                 component={ReduxFormSelect}
                 validate={[required]}
                 placeholder="To"
                 options={airports} />
        </div>

        <div className="form-field">
          <Fields
              names={['start', 'end']}
              component={renderDates}
              normalize={normalizeDates}
              format={formatDates}
           />
        </div>

        <Button bsStyle="info"
                bsSize="large"
                type="submit"
                className="form-submit">
          Search <Icon icon={send}/>
        </Button>
      </form>
    )
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      let count = 0
      let {from, to, start, end} = values
      const days = end.diff(start, 'days')
      start = moment(start)

      dispatch({type: 'RESET_SEARCH'})
      while (count < days) {
        dispatch(fetchFlights(from, to, start))
        start.add(7, 'days')
        count += 7
      }
    }
  }
}


export default connect(null, mapDispatchToProps)(reduxForm({
    form:'search',
    validate
  })(FlightsSearchForm)
)
