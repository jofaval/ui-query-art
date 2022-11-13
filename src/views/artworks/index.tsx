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
    <div className="flex">
      <div
        className="w-8/12 scrollbar-thin"
        style={{
          scrollbarWidth: "thin",
        }}
      >
        <ArtPager />
      </div>

      <div className="w-4/12">
        <Outlet />
      </div>
    </div>
  );
}
