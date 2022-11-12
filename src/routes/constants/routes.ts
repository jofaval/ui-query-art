import React from "react";
import { PATHS } from "./paths";

import { Artwork } from "entities/Art/Artwork";
import { ArtPager } from "entities/Art/layouts/ArtPager";
import { Index } from "views/Index";

export const ROUTES = {
  [PATHS.HOME]: ArtPager,
  [PATHS.ARTWORKS.LIST]: Artwork,
  [PATHS.FALLBACK]: Index,
} as Record<string, React.FC>;
