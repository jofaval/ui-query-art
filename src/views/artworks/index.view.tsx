import { createRouteConfig, Outlet } from "@tanstack/react-router";

import { prefetchQueryWithDefault } from "utils/query.helpers";
import { artworksKeys, fetchArtworks } from "artworks/queries";

import { ArtPager } from "artworks/layouts/artworks-paginator.layout";

export const artworksRoute = createRouteConfig().createRoute({
  path: "artworks",
  element: <Artworks />,
  loader: async () => prefetchQueryWithDefault(artworksKeys.all, fetchArtworks),
});

function Artworks() {
  return (
    <div className="flex max-h-full">
      <div className="w-8/12 h-full">
        <ArtPager />
      </div>

      <div className="w-4/12 h-full overflow-x-hidden overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
