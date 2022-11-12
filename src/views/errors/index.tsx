import { createRouteConfig } from "@tanstack/react-router";

export const errorsRoute = createRouteConfig().createRoute({
  path: "errors",
  element: <Errors />,
});

function Errors() {
  return (
    <div>
      <div className="text-center">An unexpected error happened</div>
    </div>
  );
}
