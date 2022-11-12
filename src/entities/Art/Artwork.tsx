import { ArtworkImage } from "./content/ArtworkImage";
import { Thumbnail } from "./content/Thumbnail";
import { ArtworkType } from "./types/art-work.type";

export const Artwork: React.FC<ArtworkType> = ({
  credit_line,
  id,
  image_id,
  thumbnail,
}) => (
  <div title={id.toString()}>
    <div className="credit_line">{credit_line}</div>
    {image_id && <ArtworkImage id={image_id} />}
    {/* {thumbnail && <Thumbnail {...thumbnail} />} */}
  </div>
);
