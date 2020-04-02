import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import Rails from './Rails';
import { Route, Switch } from 'react-router-dom' 
import { DiJsBadge } from "react-icons/di"; 

const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <DiJsBadge/>
          <Typography variant="h5" noWrap style={{marginLeft: '40px'}}>
             I'VE BEEN SETUP
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
            <ListItem button key={2}>
              <ListItemText primary={'RAILS'} />
            </ListItem>
            <ListItem button key={3}>
              <ListItemText primary={'GIT'} />
            </ListItem>
            <ListItem button key={5}>
              <ListItemText primary={'REACT'} />
            </ListItem>
            <ListItem button key={6}>
              <ListItemText primary={'SQL'} />
            </ListItem>
            <ListItem button key={7}>
              <ListItemText primary={'DEPLOYMENT'} />
            </ListItem>
            <ListItem button key={8}>
              <ListItemText primary={'TESTING'} />
            </ListItem>
            <ListItem button key={9}>
              <ListItemText primary={'TOOLS'} />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/rails" component={Rails} />
          {/* <Route path="/YYY/:id" component={YYY} /> */}
          ...
          {/* <Route component={NoMatch} /> */}
        </Switch>
    
      </main>
    </div>
  );
}