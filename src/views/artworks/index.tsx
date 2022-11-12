import { createRouteConfig } from "@tanstack/react-router";
import { router } from "routes/router";

import { prefetchQueryWithDefault } from "utils/query.helpers";
import { artworksKeys, fetchArtworks } from "entities/Art/queries";

import { ArtPager } from "entities/Art/layouts/ArtPager";

export const artworksRoute = createRouteConfig().createRoute({
  path: "artworks",
  element: <Artworks />,
  loader: async () => prefetchQueryWithDefault(artworksKeys.all, fetchArtworks),
});

function Artworks() {
  const route = router.useMatch(artworksRoute.id);

  return <ArtPager />;
}
