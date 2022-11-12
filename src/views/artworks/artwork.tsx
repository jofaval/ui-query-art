import { z } from "zod";
import { useArtworkEntryQuery } from "entities/Art/hooks/useArtworkEntryQuery";

import { FetchErrorContainer } from "components/FetchErrorContainer";

import { router } from "routes/router";
import { artworksRoute } from ".";
import { artworksIndexRoute } from "./artworks";
import { queryClient } from "queries/query";

export const artworkRoute = artworksRoute.createRoute({
  path: ":id",
  element: <ArtworkView />,
  parseParams: (params) => ({
    id: z.number().int().parse(Number(params.id)),
  }),
  stringifyParams: ({ id }) => ({ id: `${id}` }),
  loader: async () => {
    queryClient.getQueryData(["posts"]) ??
      (await queryClient.prefetchQuery(["posts"], fetchPosts));
    return {};
  },
  action: patchInvoice,
});

function ArtworkView() {
  const {
    loaderData: { id },
  } = router.useMatch(artworksIndexRoute.id);

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
