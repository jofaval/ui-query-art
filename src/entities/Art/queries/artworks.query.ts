import { useQuery } from "@tanstack/react-query";

import { ENDPOINTS } from "constants/service.constants";
import { artworksKeys } from ".";

import { ArtEduArtworkResponse } from "../types/art-work.type";

export const fetchArtworks = async (): Promise<ArtEduArtworkResponse> => {
  const response = await fetch(ENDPOINTS.ARTWORKS.LIST);
  return await response.json();
};

export const useArtworksQuery = () =>
  useQuery({
    queryKey: artworksKeys.all,
    queryFn: fetchArtworks,
    cacheTime: Infinity,
  });
