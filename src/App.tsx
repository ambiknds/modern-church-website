import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import AppRoutes from './routes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;