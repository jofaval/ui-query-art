import { z } from "zod";

import { FetchErrorContainer } from "components/FetchErrorContainer";

import { prefetchQueryWithDefault } from "utils/query.helpers";

import { router } from "routes/router";
import { artworksRoute } from "./index";

import {
  artworksKeys,
  fetchArtworkEntry,
  useArtworkEntryQuery,
} from "entities/Art/queries";

export const artworkRoute = artworksRoute.createRoute({
  path: ":id",
  element: <ArtworkView />,
  parseParams: (params) => ({
    id: z.number().int().parse(Number(params.id)),
  }),
  stringifyParams: ({ id }) => ({ id: `${id}` }),
  loader: async ({ params: { id } }) =>
    prefetchQueryWithDefault(artworksKeys.detail(id), () =>
      fetchArtworkEntry(id)
    ),
});

function ArtworkView() {
  const {
    loaderData: { id },
  } = router.useMatch(artworkRoute.id);

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
