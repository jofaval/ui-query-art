import { useQuery } from "@tanstack/react-query";

import { Artwork } from "../Artwork";

import { FetchErrorContainer } from "components/FetchErrorContainer";
import { ArtEduArtworkResponse } from "../types/art-work.type";

import styles from "artwork-pager.module.css";

export const ArtPager: React.FC = () => {
  const {
    data: pieces,
    isLoading,
    error,
  } = useQuery<ArtEduArtworkResponse>({
    queryKey: ["arts"],
    queryFn: () =>
      fetch("https://api.artic.edu/api/v1/artworks").then((res) => res.json()),
  });

  return (
    <FetchErrorContainer {...{ isLoading, error }}>
      <div>
        {pieces?.data.map((artPieceProps, index) => (
          <Artwork {...artPieceProps} key={index} />
        ))}
      </div>
    </FetchErrorContainer>
  );
};
