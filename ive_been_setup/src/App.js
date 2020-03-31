import React from 'react';
import './App.css';
import MiniDrawer from './components/MiniDrawer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
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
