import { createRouteConfig } from "@tanstack/react-router";

export const artworksRoute = createRouteConfig().createRoute({
  path: "artworks",
  element: <Artwork />,
});

function Artwork() {
  return <div></div>;
}
