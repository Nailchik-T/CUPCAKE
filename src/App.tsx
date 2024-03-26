import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MarketDataColumn from "./components/MarketDataColumn";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="container">
          <MarketDataColumn />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
