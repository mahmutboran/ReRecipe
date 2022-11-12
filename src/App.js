
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './component/globalstyles/theme';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <AppRouter />
    </ThemeProvider>

  );
}

export default App;
