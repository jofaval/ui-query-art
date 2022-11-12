import { useArtworksQuery } from "../hooks/useArtworksQuery";

import { Link } from "components/Link";
import { SmartImage } from "components/SmartImage";

import { ArtworkType } from "../types/art-work.type";

const ArtworkImagePlaceholder: React.FC = () => (
  <div className="bg-zinc-300 rounded h-full">&nbsp;</div>
);

export const ArtworkImage: React.FC<
  Pick<ArtworkType, "id" | "image_id" | "title"> & {
    className?: string;
  }
> = ({ id, image_id, title, className = "w-48 h-48" }) => {
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
      <div className={["m-auto", className].filter(Boolean).join(" ")}>
        <SmartImage
          {...{ src, className: "object-contain m-auto max-h-full max-w-full" }}
          alt={title}
          loading={<ArtworkImagePlaceholder />}
        />
      </div>
    </Link>
  );
};
