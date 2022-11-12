import { z } from "zod";

import { FetchErrorContainer } from "components/FetchErrorContainer";

import { router } from "routes/router";
import { artworksRoute } from "./index";

import {
  artworksKeys,
  fetchArtworkEntry,
  useArtworkEntryQuery,
} from "entities/Art/queries";
import { queryClient } from "queries/query";
import { ArtEduArtworksResponse } from "entities/Art/types/art-works.type";

export const artworkRoute = artworksRoute.createRoute({
  path: ":id",
  element: <ArtworkView />,
  parseParams: (params) => ({
    id: z.number().int().parse(Number(params.id)),
  }),
  stringifyParams: ({ id }) => ({ id: `${id}` }),
  loader: async ({ params: { id } }) => {
    const prefetchArtworkEntry = queryClient.getQueryData(
      artworksKeys.detail(id)
    );

    if (prefetchArtworkEntry) {
      return prefetchArtworkEntry;
    }

    const prefetchedArtworks = queryClient.getQueryData(
      artworksKeys.all
    ) as ArtEduArtworksResponse;

    if (prefetchedArtworks) {
      const artworkEntryFromPrefetchedArtworks = prefetchedArtworks.data.find(
        (artworkEntry) => artworkEntry.id === id
      );

      if (artworkEntryFromPrefetchedArtworks) {
        return {
          ...prefetchedArtworks,
          data: artworkEntryFromPrefetchedArtworks,
        };
      }
    }

    await queryClient.prefetchQuery(artworksKeys.detail(id), () =>
      fetchArtworkEntry(id)
    );

    return {};
  },
});

function ArtworkView() {
  const {
    loaderData: { id },
  } = router.useMatch(artworkRoute.id);

  console.log("entry");

  const { data, error, isLoading, isSuccess } = useArtworkEntryQuery(id);

  return (
    <FetchErrorContainer {...{ isLoading, error, PropsLoader: <></> }}>
      <article className="w-full">
        {isSuccess && (
          <>
            <span className="text-md">{JSON.stringify(data)}</span>
          </>
        )}
      </article>
    </FetchErrorContainer>
  );
}
