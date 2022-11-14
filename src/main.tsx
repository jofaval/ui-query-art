import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "queries/query";

import { RouterProvider } from "@tanstack/react-router";
import { router } from "views/router";

import { App } from "./app.component";

import "./styles/index.css";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement ?? document.body).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
