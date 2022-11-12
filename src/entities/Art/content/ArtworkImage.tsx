import { useArtworksQuery } from "../hooks/useArtworksQuery";

import { Link } from "@/components/Link";
import { SmartImage } from "@/components/SmartImage";

import { ArtworkType } from "../types/art-work.type";

const ArtworkImagePlaceholder: React.FC = () => (
  <div className="w-48 h-48 m-auto bg-zinc-300 rounded">&nbsp;</div>
);

export const ArtworkImage: React.FC<
  Pick<ArtworkType, "id" | "image_id" | "title">
> = ({ id, image_id, title }) => {
  const { data: artworksData, isSuccess } = useArtworksQuery();

  let src = "";
  if (isSuccess && image_id) {
    src = [
      artworksData.config.iiif_url,
      image_id,
      "full/843,/0/default.jpg",
    ].join("/");
  }

  return (
    <Link path={`artworks/${id}`}>
      <SmartImage
        {...{ src, className: "w-48 h-48 m-auto object-contain" }}
        alt={""}
        loading={<ArtworkImagePlaceholder />}
      />
    </Link>
  );
};
