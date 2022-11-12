import { useArtworksQuery } from "../queries";

import { router } from "views/router";

import { SmartImage } from "components/SmartImage";
import { ArtworkType } from "../types/generic-art-work.type";

const ArtworkImagePlaceholder: React.FC = () => (
  <div className="bg-zinc-300 rounded h-full">&nbsp;</div>
);

export const ArtworkImage: React.FC<
  Pick<ArtworkType, "id" | "image_id" | "title"> & {
    className?: string;
    size?: number;
  }
> = ({
  id: artworkId,
  image_id,
  title,
  className = "w-48 h-48",
  size = 843,
}) => {
  const { data: artworksData, isSuccess } = useArtworksQuery();

  let src = "";
  if (isSuccess && image_id) {
    src = [
      artworksData.config.iiif_url,
      image_id,
      `full/${size},/0/default.jpg`,
    ].join("/");
  }

  return (
    <router.Link to={"/artworks/:artworkId"} params={{ artworkId }}>
      <div className={["m-auto", className].filter(Boolean).join(" ")}>
        <SmartImage
          {...{ src, className: "object-contain m-auto max-h-full max-w-full" }}
          alt={title}
          loading={<ArtworkImagePlaceholder />}
        />
      </div>
    </router.Link>
  );
};
