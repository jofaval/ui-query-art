import { createReactRouter, createRouteConfig } from "@tanstack/react-router";

import { indexRoute } from "views/Index";
import { notFoundFallbackRoute } from "views/errors/NotFound";
import { errorsRoute } from "views/errors";
import { artworksRoute } from "views/artworks";
import { artworkRoute } from "views/artworks/artwork";
import { artworksIndexRoute } from "views/artworks/artworks";

const routeConfig = createRouteConfig().addChildren([
  indexRoute,
  artworksRoute.addChildren([artworksIndexRoute, artworkRoute]),
  errorsRoute.addChildren([notFoundFallbackRoute]),
]);

export const router = createReactRouter({ routeConfig });
