import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import { ROUTES } from "./constants/routes";

const routeConfig = createRouteConfig().createChildren((createRoute) =>
  Object.entries(ROUTES).map(([path, Element]) =>
    createRoute({
      path,
      element: <Element />,
    })
  )
);

export const router = createReactRouter({ routeConfig });
