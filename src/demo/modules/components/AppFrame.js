import React from 'react';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';

import AppDrawer from './AppDrawer';

const styles = theme => ({
	appBar: {
    transition: theme.transitions.create('width'),
    '@media print': {
      position: 'absolute',
    },
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 250px)',
    },
  },
	drawer: {
    [theme.breakpoints.up('lg')]: {
      width: 250,
    },
  },
})


class AppFrame extends React.Component<any, any> {
  render () {
    const { children, classes } = this.props;
    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="contrast"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" noWrap>
              Cheap Flights
            </Typography>
          </Toolbar>

        </AppBar>

        <AppDrawer className={classes.drawer} />

        {children}
      </div>
    )
  }
}


export default withStyles(styles)(AppFrame);
