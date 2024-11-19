import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Container} from '@mui/material';
import ElectricityChart from './components/ElectricityChart/ElectricityChart.tsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <ElectricityChart />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
