import { createRouteConfig, Outlet } from "@tanstack/react-router";

import { prefetchQueryWithDefault } from "utils/query.helpers";
import { artworksKeys, fetchArtworks } from "entities/Art/queries";

import { ArtPager } from "entities/Art/layouts/ArtPager";

export const artworksRoute = createRouteConfig().createRoute({
  path: "artworks",
  element: <Artworks />,
  loader: async () => prefetchQueryWithDefault(artworksKeys.all, fetchArtworks),
});

function Artworks() {
  return (
    <div>
      <Outlet />

      <ArtPager />
    </div>
  );
}
