import { useArtworksQuery } from "../hooks/useArtworksQuery";

import { ArtworkType } from "../types/art-work.type";

export const ArtworkImage: React.FC<{ id: ArtworkType["image_id"] }> = ({
  id,
}) => {
  const { data: artworksData, isSuccess } = useArtworksQuery();

  let src = "";
  if (isSuccess && id) {
    src = [artworksData.config.iiif_url, id, "full/843,/0/default.jpg"].join(
      "/"
    );
  }

  return <img {...{ src, className: "w-48 h-48 m-auto" }} />;
};
