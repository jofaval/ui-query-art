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

export const useArtworkEntryQuery = (id: number) =>
  useQuery({
    queryKey: artworksKeys.detail(id),
    queryFn: () => {
      const artworks = queryClient.getQueryData(artworksKeys.all) as
        | ArtEduArtworksResponse
        | undefined;

      // cached response
      if (artworks?.data) {
        const artworkEntry = artworks.data.find((artwork) => artwork.id === id);

        if (artworkEntry) {
          return { ...artworks, data: artworkEntry };
        }
      }

      return fetchArtworkEntry(id);
    },
  });
