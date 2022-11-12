import { useArtworksQuery } from "../queries";

import { router } from "routes/router";
import { SmartImage } from "components/SmartImage";

import { ArtworkType } from "../types/art-work.type";
import { artworksRoute } from "views/artworks";

const ArtworkImagePlaceholder: React.FC = () => (
  <div className="bg-zinc-300 rounded h-full">&nbsp;</div>
);

export const ArtworkImage: React.FC<
  Pick<ArtworkType, "id" | "image_id" | "title"> & {
    className?: string;
  }
> = ({ id, image_id, title, className = "w-48 h-48" }) => {
  const { data: artworksData, isSuccess } = useArtworksQuery();
  const { Link } = router.useMatch(artworksRoute.id);

  let src = "";
  if (isSuccess && image_id) {
    src = [
      artworksData.config.iiif_url,
      image_id,
      "full/843,/0/default.jpg",
    ].join("/");
  }

  return (
    <Link to={"/artworks/:id"} params={{ id }}>
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
