import { createRouteConfig } from "@tanstack/react-router";

export const notFoundFallbackRoute = createRouteConfig().createRoute({
  path: "*",
  element: <NotFound />,
});

function NotFound() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-0">Not found</h1>
    </div>
  );
}
