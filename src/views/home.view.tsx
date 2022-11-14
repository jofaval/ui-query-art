import { createRouteConfig } from "@tanstack/react-router";

export const homeRoute = createRouteConfig().createRoute({
  path: "home",
  element: <Home />,
});

function Home() {
  return (
    <div className="index">
      <p>Home</p>
    </div>
  );
}
