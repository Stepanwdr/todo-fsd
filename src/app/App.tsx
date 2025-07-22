import React, {lazy} from 'react';
import '../app/styles/index.css'
import { QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { queryClient } from 'shared/config';
import { ToastContainer } from "react-toastify";

const HomePage = lazy(() => import('pages/Home'))


const theme = createTheme();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
      />
      <HomePage />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App