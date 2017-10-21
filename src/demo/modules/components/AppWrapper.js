import React from 'react';

import AppFrame from './AppFrame';


class AppWrapper extends React.Component<any, any> {
  render () {
    const { children } = this.props;
    return (
      <div>
        <AppFrame>{children}</AppFrame>
      </div>
    )
  }
}


export default AppWrapper;
