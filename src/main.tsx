import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux"; 
import store from "./app/store";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";

const Application = () => {
  const queryClient = new QueryClient();

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ReduxProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Application />);
