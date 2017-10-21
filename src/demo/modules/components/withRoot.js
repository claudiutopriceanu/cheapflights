import React from 'react';
import pure from 'recompose/pure';

import AppWrapper from './AppWrapper';


function withRoot(BaseComponent) {
  // Prevent rerendering
  const PureBaseComponent = pure(BaseComponent);

  class WithRoot extends React.Component<WithRootProps> {

    render() {
      const { ...other } = this.props;

      return (
        <AppWrapper>
          <PureBaseComponent initialProps={other} />
        </AppWrapper>
      );
    }
  }

  return WithRoot;
}

export default withRoot;
