import { ArtworkImage } from "./content/ArtworkImage";
import { Thumbnail } from "./content/Thumbnail";
import { ArtworkType } from "./types/art-work.type";

export const Artwork: React.FC<
  ArtworkType & { className?: string; artWorkImageClassName?: string }
> = ({
  credit_line,
  id,
  image_id,
  thumbnail,
  className = "",
  title,
  artWorkImageClassName,
}) => (
  <div title={id.toString()} className={className}>
    {image_id && (
      <ArtworkImage
        {...{ id, image_id, title, className: artWorkImageClassName }}
      />
    )}
    {/* {thumbnail && <Thumbnail {...thumbnail} />} */}

    <div className="credit_line text-center">{credit_line}</div>
  </div>
);
