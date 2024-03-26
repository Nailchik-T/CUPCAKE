import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="container">
          <HomePage />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
