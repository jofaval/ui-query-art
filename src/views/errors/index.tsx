import { createRouteConfig } from "@tanstack/react-router";

import { PATHS } from "routes/constants/paths";

export const errorsRoute = createRouteConfig().createRoute({
  path: PATHS.FALLBACK,
  element: <Errors />,
});

function Errors() {
  return (
    <div>
      <div className="text-center">An unexpected error happened</div>
    </div>
  );
}
