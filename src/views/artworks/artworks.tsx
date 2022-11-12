import { artworksRoute } from ".";

export const artworksIndexRoute = artworksRoute.createRoute({
  path: "/",
  element: <ArtworkIndex />,
});

function ArtworkIndex() {
  return <div>Select an artwork...</div>;
}
