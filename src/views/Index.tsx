import { createRouteConfig } from "@tanstack/react-router";
import { router } from "routes/router";

export const indexRoute = createRouteConfig().createRoute({
  path: "/",
  element: <Index />,
});

function Index() {
  const route = router.useMatch(indexRoute.id);

  return (
    <div className="index">
      <p>Hello World!</p>
    </div>
  );
}
