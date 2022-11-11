import { useQuery } from "@tanstack/react-query";

import { ArtPiece } from "../ArtPiece";
import { FetchErrorContainer } from "../../../components/FetchErrorContainer";

import { ArtEduArtPieceResponse } from "../types/art-piece.type";

export const ArtPager: React.FC = () => {
  const {
    data: pieces,
    isLoading,
    error,
  } = useQuery<ArtEduArtPieceResponse>({
    queryKey: ["arts"],
    queryFn: () =>
      fetch("https://api.artic.edu/api/v1/artworks").then((res) => res.json()),
  });

  return (
    <FetchErrorContainer {...{ isLoading, error }}>
      {/* <div>{JSON.stringify(data)}</div> */}
      <div>{pieces?.data.map(ArtPiece)}</div>
    </FetchErrorContainer>
  );
};
