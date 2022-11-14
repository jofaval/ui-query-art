import { z } from "zod";

import { router } from "views/router";
import { artworksRoute } from "./index.view";

import { ArtworkImage } from "artworks/content/artwork-image.component";
import { FetchErrorContainer } from "components/fetch-error-container.component";
import { Summary } from "components/summary.component";

import { queryClient } from "queries/query";
import {
  artworksKeys,
  fetchArtworkEntry,
  useArtworkEntryQuery,
} from "artworks/queries";
import { stringifyQueryParams } from "utils/query.helpers";

import type { ArtEduArtworksResponse } from "artworks/types/art-works.type";
import type { ArtEduArtworkEntryResponse } from "artworks/types/art-works-entry.type";

const artworkRouteLoader = async (artworkId: number) => {
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
};

export const artworkRoute = artworksRoute.createRoute({
  path: ":artworkId",
  element: <ArtworkView />,
  parseParams: (params) => ({
    artworkId: z.number().int().parse(Number(params.artworkId)),
  }),
  stringifyParams: stringifyQueryParams,
  loader: async ({ params: { artworkId } }) => artworkRouteLoader(artworkId),
});

const ARTWORK_ENTRY_LOADER = (
  <div className="w-full h-1/2 bg-zinc-300 rounded">&nbsp;</div>
);

function ArtworkView() {
  const {
    params: { artworkId },
  } = router.useMatch(artworkRoute.id);

  const {
    data: artworkData,
    error,
    isLoading,
    isSuccess,
  } = useArtworkEntryQuery(artworkId);

  return (
    <FetchErrorContainer
      {...{ isLoading, error, PropsLoader: ARTWORK_ENTRY_LOADER }}
    >
      <article className="w-full">
        {isSuccess && (
          <>
            <ArtworkImage
              {...{
                id: artworkData.data.id,
                image_id: artworkData.data.image_id,
                title: artworkData.data.title,
                className: "w-full min-h-1/3",
              }}
            />

            <span className="text-md">{artworkData.data.title}</span>
            <p className="text-md">By {artworkData.data.artist_display}</p>

            {artworkData.data.exhibition_history && (
              <Summary label="Show exhibition history">
                {artworkData.data.exhibition_history}
              </Summary>
            )}
          </>
        )}
      </article>
    </FetchErrorContainer>
  );
}
