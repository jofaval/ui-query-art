import { ArtEduRequestPaginatedResponse } from "types/art-edu";
import { ArtworkType } from "./generic-art-work.type";

export type ArtEduArtworksResponse = ArtEduRequestPaginatedResponse<
  ArtworkType[]
>;
