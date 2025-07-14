import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from "./store";
import { CustomThemeProvider } from "./context/ThemeProvider";
import { AuthProvider } from "./context/AuthProvider";
import { AppRouter } from "./router";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <CssBaseline />
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </CustomThemeProvider>
    </Provider>
  );
};

export default App;
