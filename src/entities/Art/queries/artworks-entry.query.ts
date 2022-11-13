import { useQuery } from "@tanstack/react-query";
import { queryClient } from "queries/query";

import { ENDPOINTS } from "constants/service.constants";
import { artworksKeys } from ".";

import { ArtEduArtworkEntryResponse } from "../types/art-works-entry.type";
import { ArtEduArtworksResponse } from "../types/art-works.type";

export const fetchArtworkEntry = async (
  id: number
): Promise<ArtEduArtworkEntryResponse> => {
  const response = await fetch([ENDPOINTS.ARTWORKS.LIST, id].join("/"));
  return await response.json();
};

export const useArtworkEntryQuery = (id: number) => {
  useQuery({
    queryKey: artworksKeys.detail(id),
    queryFn: () => {
      const prefetchedArtworks = queryClient.getQueryData(
        artworksKeys.all
      ) as ArtEduArtworksResponse;

      // cached response
      if (prefetchedArtworks.data) {
        const prefetchedArtworkEntry = prefetchedArtworks.data.find(
          (artwork) => artwork.id === id
        );

        if (prefetchedArtworkEntry) {
          return {
            ...prefetchedArtworks,
            data: prefetchedArtworkEntry,
          };
        }
      }

      return fetchArtworkEntry(id);
    },
  });
};
