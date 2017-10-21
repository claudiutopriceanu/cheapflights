import React from 'react';
import compose from 'recompose/compose';
import withRoot from '../modules/components/withRoot';


function Home(props) {
  return (
    <div>super-blah</div>
  )
}

export default compose(withRoot)(Home)
