import { useQuery } from "@tanstack/react-query";

import { ENDPOINTS } from "constants/service.constants";
import { artworksKeys } from ".";

import { ArtEduArtworksResponse } from "../types/art-works.type";

export const fetchArtworks = async (): Promise<ArtEduArtworksResponse> => {
  const response = await fetch(ENDPOINTS.ARTWORKS.LIST);
  return await response.json();
};

export const useArtworksQuery = () =>
  useQuery({
    queryKey: artworksKeys.all,
    queryFn: fetchArtworks,
    cacheTime: Infinity,
  });
