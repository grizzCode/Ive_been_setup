import React from 'react';
import './App.css';
import MiniDrawer from './components/MiniDrawer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: lightBlue,
    secondary: lightBlue,
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <MiniDrawer/>
    </ThemeProvider>
   
  );
}

export default App;
