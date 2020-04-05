import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


export default function SimplePaper(props) {

  return (
    <div>
      <Paper elevation={3} style={{backgroundColor: '#010406', padding: '4px'}}>
      <div style={{fontFamily: 'Monaco', color: '#87BDF5', fontSize: '14px', display: 'inline-block'}}>
        {props.text}
      </div>
      </Paper>
      
    </div>
  );
}