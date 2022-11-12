import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "queries/query";

import { RouterProvider } from "@tanstack/react-router";
import { router } from "routes/router";

import { App } from "./App";

import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement ?? document.body).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RouterProvider>
  </React.StrictMode>
);
