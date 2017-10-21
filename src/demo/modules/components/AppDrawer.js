import React from 'react';

import Drawer from 'material-ui/Drawer';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
})


function AppDrawer(props) {
  const { classes } = props;
  return (
		<Drawer
			classes={{
				paper: classes.paper,
			}}
			type="permanent"
			open
		>
      <div className={classes.nav}>
        <Toolbar className={classes.toolbar}>
        </Toolbar>
      </div>

    </Drawer>
  )
}

export default withStyles(styles)(AppDrawer);
