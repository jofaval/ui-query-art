import { Artwork } from "../Artwork";

import { FetchErrorContainer } from "components/FetchErrorContainer";

import { useArtworksQuery } from "../hooks/useArtworksQuery";

export const ArtPager: React.FC = () => {
  const { data: pieces, isLoading, error, isSuccess } = useArtworksQuery();

  return (
    <FetchErrorContainer {...{ isLoading, error, PropsLoader: <></> }}>
      <section className="flex flex-wrap">
        {isSuccess &&
          pieces.data.map((artPieceProps, index) => (
            <Artwork {...artPieceProps} key={index} className="w-1/4" />
          ))}
      </section>
    </FetchErrorContainer>
  );
};
