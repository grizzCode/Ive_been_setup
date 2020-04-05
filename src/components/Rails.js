import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CliHighlight from './CLI';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';



export default function Rails() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {/* ________________________________ PANEL 1 ______________________________________ */}
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>CREATE RAILS APP</Typography>
          <Typography className={classes.secondaryHeading}>
            <a href='https://guides.rubyonrails.org/getting_started.html' 
            style={{color:'lightgrey', fontSize:'14px'}}>Documentation</a>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Create a full-featured rails application:<br/>
            <div style={{display: 'inline-block'}}>
              <CliHighlight text={'rails new *name* -d postgresql '}/>
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     {/* ________________________________ PANEL 2 ______________________________________ */}
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>CREATE RAILS APP --API</Typography>
          <Typography className={classes.secondaryHeading}>
            <a href='https://guides.rubyonrails.org/api_app.html' 
            style={{color:'lightgrey', fontSize:'14px'}}>Documentation</a>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Create a new API / backend-only rails application:<br/>
            <div style={{display: 'inline-block'}}>
              <CliHighlight text={'rails new *name* -d postgresql --api'}/>
            </div>
          </Typography>         
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Typography>
          This will do three main things for you:
            <ul>
              <li>Configure your application to start with a more limited set of middleware than normal. Specifically, it will not include any middleware primarily useful for browser applications (like cookies support) by default.</li>
              <li>Make ApplicationController inherit from ActionController::API instead of ActionController::Base. As with middleware, this will leave out any Action Controller modules that provide functionalities primarily used by browser applications.</li>
              <li>Configure the generators to skip generating views, helpers, and assets when you generate a new resource.</li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Advanced settings</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

// const codeString = " function addOne = () => { return ( 1 + 1)}"

const codeString =`
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));
// expected output: 6
console.log(sum(1, 2, 3, 4));
// expected output: 10
`

{/* <SyntaxHighlighter language="javascript" style={tomorrowNightEighties}>
{codeString}
</SyntaxHighlighter> */}