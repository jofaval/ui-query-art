import { createRouteConfig } from "@tanstack/react-router";
import { PATHS } from "routes/constants/paths";

export const indexRoute = createRouteConfig().createRoute({
  path: PATHS.HOME,
  element: <Index />,
});

function Index() {
  return (
    <div className="index">
      <p>Hello World!</p>
    </div>
  );
}
