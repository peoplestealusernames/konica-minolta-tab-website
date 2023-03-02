import './App.css';
import { createTheme, CssBaseline, TextField, ThemeProvider } from '@mui/material';
import { TopBar } from './TopBar';
import { Main } from './Comp/Main';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <CssBaseline />
        <TopBar />
        <Main />
      </div >
    </ThemeProvider>
  );
}

export default App;
