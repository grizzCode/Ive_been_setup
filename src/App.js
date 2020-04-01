import React from 'react';
import './App.css';
import MiniDrawer from './components/Drawer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#90caf9',
    },
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
