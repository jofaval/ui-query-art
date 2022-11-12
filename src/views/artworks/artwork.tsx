import { z } from "zod";

import { router } from "routes/router";
import { artworksRoute } from "./index";

import { queryClient } from "queries/query";
import { artworksKeys, fetchArtworkEntry } from "entities/Art/queries";
import { stringifyQueryParams } from "utils/query.helpers";

import type { ArtEduArtworksResponse } from "entities/Art/types/art-works.type";
import type { ArtEduArtworkEntryResponse } from "entities/Art/types/art-works-entry.type";

export const artworkRoute = artworksRoute.createRoute({
  path: ":artworkId",
  element: <ArtworkView />,
  parseParams: (params) => ({
    artworkId: z.number().int().parse(Number(params.artworkId)),
  }),
  stringifyParams: stringifyQueryParams,
  loader: async ({ params: { artworkId } }) => {
    console.log("entry", artworkId);

    const prefetchArtworkEntry = queryClient.getQueryData(
      artworksKeys.detail(artworkId)
    ) as ArtEduArtworkEntryResponse;

    // console.log("prefetchArtworkEntry", prefetchArtworkEntry);
    if (prefetchArtworkEntry) {
      return { artwork: prefetchArtworkEntry };
    }

    const prefetchedArtworks = queryClient.getQueryData(
      artworksKeys.all
    ) as ArtEduArtworksResponse;
    // console.log("prefetchedArtworks", prefetchedArtworks);

    if (prefetchedArtworks) {
      const artworkEntryFromPrefetchedArtworks = prefetchedArtworks.data.find(
        (artworkEntry) => artworkEntry.id === artworkId
      );
      // console.log(
      //   "artworkEntryFromPrefetchedArtworks",
      //   artworkEntryFromPrefetchedArtworks
      // );

      if (artworkEntryFromPrefetchedArtworks) {
        const artwork = {
          ...prefetchedArtworks,
          data: artworkEntryFromPrefetchedArtworks,
        };
        return { artwork };
      }
    }

    // console.log("loading...");
    await queryClient.prefetchQuery(artworksKeys.detail(artworkId), () =>
      fetchArtworkEntry(artworkId)
    );
    // console.log("loaded");

    return {
      artwork: queryClient.getQueryData(artworksKeys.detail(artworkId)),
    };
  },
});

function ArtworkView() {
  console.log("entry");

  const { loaderData } = router.useMatch(artworkRoute.id);

  console.log("test");

  // const { data, error, isLoading, isSuccess } = useArtworkEntryQuery(id);

  return (
    <article className="w-full">
      <span className="text-md">{JSON.stringify(loaderData)}</span>
    </article>
  );
}
