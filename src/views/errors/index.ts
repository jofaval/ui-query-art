import { createRouteConfig } from "@tanstack/react-router";

import { PATHS } from "routes/constants/paths";

export const errorsRoute = createRouteConfig().createRoute({
  path: PATHS.FALLBACK,
  element: "Errors",
});
