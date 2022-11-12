import { Artwork } from "../Artwork";

import { FetchErrorContainer } from "@/components/FetchErrorContainer";

import { useArtworksQuery } from "../hooks/useArtworksQuery";

import styles from "artwork-pager.module.css";

export const ArtPager: React.FC = () => {
  const { data: pieces, isLoading, error, isSuccess } = useArtworksQuery();

  return (
    <FetchErrorContainer {...{ isLoading, error }}>
      <main className="flex flex-wrap">
        {isSuccess &&
          pieces.data.map((artPieceProps, index) => (
            <Artwork {...artPieceProps} key={index} className="w-1/4" />
          ))}
      </main>
    </FetchErrorContainer>
  );
};
