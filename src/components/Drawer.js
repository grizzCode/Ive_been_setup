import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';
import Rails from './Rails';
import ReactApp from './ReactApp';
import { Route, Switch } from 'react-router-dom' 
import { DiHeroku, DiRor, DiGit, DiReact, DiPostgresql } from "react-icons/di"; 
import { FaWrench, FaCheckDouble } from "react-icons/fa";
import { Link } from 'react-router-dom'

const drawerWidth = 80;

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
             IVE_BEEN_SETUP
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
              <Link to="/rails">
              <Tooltip title="Rails" placement="right">
                <div style={{fontSize: '3.5em', color: 'lightgrey'}}><DiRor/></div>
              </Tooltip>   
              </Link>
            </ListItem>
            <ListItem button key={3}>
              <Tooltip title="Git / GitHub" placement="right">
                <div style={{fontSize: '3.5em'}}><DiGit/></div>
              </Tooltip>
            </ListItem>
            <Link to="/react">
              <ListItem button key={5}>
                <Tooltip title="React" placement="right">
                  <div style={{fontSize: '3.5em', color: 'lightgrey'}}><DiReact/></div>
                </Tooltip>
              </ListItem>
            </Link>
            <ListItem button key={6}>
              <Tooltip title="SQL / Database" placement="right">
              <div style={{fontSize: '3.5em'}}><DiPostgresql/></div>
              </Tooltip>
            </ListItem>
            <ListItem button key={7}>
              <Tooltip title="Hosting / Deployment" placement="right">
                <div style={{fontSize: '3.5em'}}><DiHeroku/></div>
              </Tooltip>
            </ListItem>
            <ListItem button key={8}>
              <Tooltip title="Testing" placement="right">
                <div style={{fontSize: '2.6em'}}><FaCheckDouble/></div>
              </Tooltip>
            </ListItem>
            <ListItem button key={9}>
              <Tooltip title="Tools" placement="right">
                <div style={{fontSize: '2.6em'}}><FaWrench/></div>
              </Tooltip>
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        <Switch>
          <Route exact path="/rails" component={Rails} />
          <Route exact path="/react" component={ReactApp} />
        </Switch>
    
      </main>
    </div>
  );
}


