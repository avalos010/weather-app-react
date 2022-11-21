import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false,
      // refetchOnmount: false,
      // refetchOnReconnect: false,
      // retry: true,
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
