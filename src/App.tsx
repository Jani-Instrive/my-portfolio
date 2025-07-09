import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from './store';
import LandingPage from './components/LandingPageComponents/Layout';
// import { HomePage } from './pages/HomePage';
import { CustomThemeProvider } from './context/ThemeProvider';

function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <CssBaseline />
        <LandingPage />
      </CustomThemeProvider>
    </Provider>
  );
}

export default App
