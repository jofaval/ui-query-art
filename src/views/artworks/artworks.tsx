import { ArtPager } from "entities/Art/layouts/ArtPager";
import { artworksRoute } from ".";

export const artworksIndexRoute = artworksRoute.createRoute({
  path: "/",
  element: <Artworks />,
});

function Artworks() {
  return <ArtPager />;
}
