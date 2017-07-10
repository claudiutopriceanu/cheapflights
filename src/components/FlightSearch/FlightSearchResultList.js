import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Panel, Row, Col } from 'react-bootstrap';


class FlightSearchResultList extends Component {
  constructor(props) {
    super(props)
    this.renderItems = this.renderItems.bind(this)
  }

  renderItems() {
    return this.props.items.map((item) =>
      <Panel key={item.id}>
        <Row>
          <Col lg={1}>
            <div>Ryanair</div>
          </Col>
          <Col lg={4}>
            <div>{item.from}</div>
            <div>{item.departure.format('MMM DD, YYYY')}</div>
            <div>{item.departure.format('HH:mm')}</div>
          </Col>
          <Col lg={4}>
            <div>{item.to}</div>
            <div>{item.arrival.format('MMM DD, YYYY')}</div>
            <div>{item.arrival.format('HH:mm')}</div>
          </Col>
          <Col lg={3}>
            <div className='text-center'>{item.fare}</div>
          </Col>
        </Row>
      </Panel>
    )
  }

  render () {
    return (
      <div>
        {this.renderItems()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    items: state.flights.entries
})

export default connect(mapStateToProps, null)(FlightSearchResultList)
