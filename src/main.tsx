import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

import "./index.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/queries/query";

import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/routes/router";

const rootElement = document.getElementById("root");
if (!rootElement?.innerHTML) {
  ReactDOM.createRoot(rootElement as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </RouterProvider>
    </React.StrictMode>
  );
}
