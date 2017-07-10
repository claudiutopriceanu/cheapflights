import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css';
 
class ReduxFormSelect extends Component {
    onChange(event) {
        if (this.props.input.onChange && event != null) {
            // To be aligned with how redux-form publishes its CHANGE action payload.
            // The event received is an object with 2 keys: "value" and "label"
            this.props.input.onChange(event.value);
        } else {
            // Clear the input field
            this.props.input.onChange(null)
        }
    }
 
    render() {
        return ( 
          <Select {...this.props }
            value = { this.props.input.value || null }
            onBlur = {() => this.props.input.onBlur(this.props.input.value) }
            onChange = { this.onChange.bind(this) } />
        );
    }
}

export const renderSelect = field => (
  <div>
    <ReduxFormSelect {...field} />
    {field.meta.touched && (
      field.meta.error && <div className="text-danger">{field.meta.error}</div>
    )}
  </div>
)
 
export default renderSelect;
