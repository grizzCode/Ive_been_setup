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
import Rails from './Rails';
import { Route, Switch } from 'react-router-dom' 
import { DiHeroku, DiRor, DiGit, DiReact, DiPostgresql } from "react-icons/di"; 
import { FaWrench, FaCheckDouble } from "react-icons/fa";

const drawerWidth = 90;

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
              <div style={{fontSize: '3.5em'}}><DiRor/></div>
            </ListItem>
            <ListItem button key={3}>
            <div style={{fontSize: '3.5em'}}><DiGit/></div>
            </ListItem>
            <ListItem button key={5}>
            <div style={{fontSize: '3.5em'}}><DiReact/></div>
            </ListItem>
            <ListItem button key={6}>
            <div style={{fontSize: '3.5em'}}><DiPostgresql/></div>
            </ListItem>
            <ListItem button key={7}>
            <div style={{fontSize: '3.5em'}}><DiHeroku/></div>
            </ListItem>
            <ListItem button key={8}>
            <div style={{fontSize: '3.0em'}}><FaCheckDouble/></div>
            </ListItem>
            <ListItem button key={9}>
            <div style={{fontSize: '3.0em'}}><FaWrench/></div>
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