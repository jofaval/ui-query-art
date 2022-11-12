import { createRouteConfig } from "@tanstack/react-router";
import { router } from "routes/router";

export const indexRoute = createRouteConfig().createRoute({
  path: "/",
  element: <Index />,
});

function Index() {
  return (
    <div className="index">
      <p>Hello World!</p>
    </div>
  );
}
