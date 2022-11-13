import { Artwork } from "../Artwork";

import { useArtworksQuery } from "../queries";

import { router } from "views/router";

import { FetchErrorContainer } from "components/FetchErrorContainer";

export const ArtPager: React.FC = () => {
  const { data: pieces, isLoading, error, isSuccess } = useArtworksQuery();
  // const {
  //   params: { artworkId },
  // } = router.useMatch("/artworks/:artworkId", { strict: false });

  return (
    <FetchErrorContainer {...{ isLoading, error, PropsLoader: <></> }}>
      <section className="flex flex-wrap gap-6 justify-center">
        {isSuccess &&
          pieces.data.map((artPieceProps, index) => (
            <Artwork
              {...artPieceProps}
              key={index}
              // className="w-1/4"
              className={[
                "w-64 h-64",
                // !(artworkId === artPieceProps.id) ||
                //   // "border-2 border-green-400",
                //   "border-t-8 border-gray-800",
              ]
                .filter(Boolean)
                .join(" ")}
              artWorkImageClassName={"w-auto h-2/3"}
            />
          ))}
      </section>
    </FetchErrorContainer>
  );
};
