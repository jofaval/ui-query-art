import { createReactRouter, createRouteConfig } from "@tanstack/react-router";

import { PATHS } from "./constants/paths";
import { ROUTES } from "./constants/routes";

import { ArtPager } from "entities/Art/layouts/ArtPager";
import { Index } from "views/Index";
import { NotFound } from "views/errors/NotFound";

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({ path: PATHS.HOME, element: <Index /> }),
  createRoute({
    path: PATHS.ARTWORKS.LIST,
    element: <ArtPager />,
  }).createChildren((createArtworksRoute) => [
    createArtworksRoute({ path: PATHS.ARTWORKS.ENTRY, element: <ArtPager /> }),
  ]),
  createRoute({ path: PATHS.FALLBACK, element: <NotFound /> }),
]);

export const router = createReactRouter({ routeConfig });
