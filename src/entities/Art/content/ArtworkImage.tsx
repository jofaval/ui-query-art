import { useQuery } from "@tanstack/react-query";
import { ArtEduArtworkResponse, ArtworkType } from "../types/art-work.type";

export const ArtworkImage: React.FC<{ id: string | undefined }> = ({ id }) => {
  const { data: artworksData, isSuccess } = useQuery<ArtEduArtworkResponse>({
    queryKey: ["arts"],
  });

  let src = "";
  if (isSuccess && id) {
    src = [artworksData.config.iiif_url, id, "full/843,/0/default.jpg"].join(
      "/"
    );
  }
  console.log({ isSuccess, id });

  return <img src={src} />;
};
