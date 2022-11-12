import { createReactRouter, createRouteConfig } from "@tanstack/react-router";

import { indexRoute } from "views";

import { errorsRoute } from "views/errors";
import { notFoundFallbackRoute } from "views/errors/NotFound";

import { artworksRoute } from "views/artworks/index";
import { artworkRoute } from "views/artworks/artwork";

const routeConfig = createRouteConfig().addChildren([
  indexRoute,
  artworksRoute.addChildren([artworkRoute]),
  errorsRoute.addChildren([notFoundFallbackRoute]),
]);

export const router = createReactRouter({ routeConfig });
