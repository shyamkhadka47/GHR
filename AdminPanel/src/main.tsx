
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import { ColorModeProvider } from './hooks/useCheckLocalColor';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ColorModeProvider>
    {/* <React.StrictMode> */}
    <QueryClientProvider client={queryClient}>
      <Toaster position='top-right' />
      <Router>
        <App />
      </Router>
      </QueryClientProvider>
    {/* </React.StrictMode> */}
    
  </ColorModeProvider>,
);
