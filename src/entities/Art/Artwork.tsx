import { ArtworkImage } from "./content/ArtworkImage";
import { Thumbnail } from "./content/Thumbnail";
import { ArtworkType } from "./types/art-work.type";

export const Artwork: React.FC<ArtworkType & { className?: string }> = ({
  credit_line,
  id,
  image_id,
  thumbnail,
  className = "",
}) => (
  <div title={id.toString()} className={className}>
    {image_id && <ArtworkImage id={image_id} />}
    {/* {thumbnail && <Thumbnail {...thumbnail} />} */}

    <div className="credit_line">{credit_line}</div>
  </div>
);
