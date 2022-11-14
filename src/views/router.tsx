import { createReactRouter, createRouteConfig } from "@tanstack/react-router";

import { indexRoute } from "./index.view";

import { errorsRoute } from "./errors/index.view";
import { notFoundFallbackRoute } from "./errors/not-found.view";

import { artworksRoute } from "./artworks/index.view";
import { artworksIndexRoute } from "./artworks/artworks.view";
import { artworkRoute } from "./artworks/artwork.view";

const routeConfig = createRouteConfig().addChildren([
  indexRoute,
  artworksRoute.addChildren([artworksIndexRoute, artworkRoute]),
  errorsRoute.addChildren([notFoundFallbackRoute]),
]);

export const router = createReactRouter({
  routeConfig,
  defaultPreload: "intent",
});
