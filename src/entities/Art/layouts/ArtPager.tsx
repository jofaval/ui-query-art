import { Artwork } from "../Artwork";

import { FetchErrorContainer } from "components/FetchErrorContainer";

import { useArtworksQuery } from "../queries";

export const ArtPager: React.FC = () => {
  const { data: pieces, isLoading, error, isSuccess } = useArtworksQuery();

  return (
    <FetchErrorContainer {...{ isLoading, error, PropsLoader: <></> }}>
      <section className="flex flex-wrap gap-6 justify-center">
        {isSuccess &&
          pieces.data.map((artPieceProps, index) => (
            <Artwork
              {...artPieceProps}
              key={index}
              className="w-1/4"
              artWorkImageClassName={"w-auto h-2/3"}
            />
          ))}
      </section>
    </FetchErrorContainer>
  );
};
