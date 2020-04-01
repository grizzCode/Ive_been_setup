import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

export default function SimplePaper() {


  return (
    <div>
      <Paper elevation={3} style={{backgroundColor: '#010406'}}>
      <div style={{fontFamily: 'Monaco', color: '#87BDF5'}}>
      Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
      </div>
      </Paper>
      
    </div>
  );
}