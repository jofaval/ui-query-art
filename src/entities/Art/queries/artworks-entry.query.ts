import { useQuery } from "@tanstack/react-query";

import { ENDPOINTS } from "constants/service.constants";
import { artworksKeys } from ".";

import { ArtEduArtworkEntryResponse } from "../types/art-work.type";

export const fetchArtworkEntry = async (
  id: number
): Promise<ArtEduArtworkEntryResponse> => {
  const response = await fetch([ENDPOINTS.ARTWORKS.LIST, id].join("/"));
  return await response.json();
};

export const useArtworkEntryQuery = (id: number) =>
  useQuery({
    queryKey: artworksKeys.detail(id),
    queryFn: () => fetchArtworkEntry(id),
  });
