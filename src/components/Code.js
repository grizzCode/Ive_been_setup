import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

export default function SimplePaper() {


  return (
    <div>
      <Paper elevation={3} style={{backgroundColor: '#010406', padding: '6px'}}>
      <div style={{fontFamily: 'Monaco', color: '#87BDF5'}}>
        rails new react-with-rails -d postgresql --api
      </div>
      </Paper>
      
    </div>
  );
}