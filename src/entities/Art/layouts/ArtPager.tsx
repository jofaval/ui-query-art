import { useQuery } from "@tanstack/react-query";

import { Artwork } from "../Artwork";

import { FetchErrorContainer } from "@/components/FetchErrorContainer";
import { ArtEduArtworkResponse } from "../types/art-work.type";

import styles from "artwork-pager.module.css";
import { useArtworksQuery } from "../hooks/useArtworksQuery";

export const ArtPager: React.FC = () => {
  const { data: pieces, isLoading, error } = useArtworksQuery();

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
