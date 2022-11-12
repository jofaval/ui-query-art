import { ENDPOINTS } from "@/constants/service.constants";

import { useQuery } from "@tanstack/react-query";

import { ArtEduArtworkResponse } from "../types/art-work.type";

const fetchArtworks = async (): Promise<ArtEduArtworkResponse> => {
  const response = await fetch(ENDPOINTS.ARTWORKS.LIST);
  return await response.json();
};

export const useArtworksQuery = () =>
  useQuery<ArtEduArtworkResponse>({
    queryKey: ["artworks", "list"],
    queryFn: fetchArtworks,
    cacheTime: Infinity,
  });
