import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
