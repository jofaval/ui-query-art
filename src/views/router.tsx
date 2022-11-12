import { createReactRouter, createRouteConfig } from "@tanstack/react-router";

import { indexRoute } from ".";

import { errorsRoute } from "./errors";
import { notFoundFallbackRoute } from "./errors/NotFound";

import { artworksRoute } from "./artworks/index";
import { artworksIndexRoute } from "./artworks/artworks";
import { artworkRoute } from "./artworks/artwork";

const routeConfig = createRouteConfig().addChildren([
  indexRoute,
  artworksRoute.addChildren([artworksIndexRoute, artworkRoute]),
  errorsRoute.addChildren([notFoundFallbackRoute]),
]);

export const router = createReactRouter({
  routeConfig,
  defaultPreload: "intent",
});
