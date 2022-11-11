import { Thumbnail } from "./details/Thumbnail";
import { ArtworkType } from "./types/art-work.type";

export const Artwork: React.FC<ArtworkType> = ({
  credit_line,
  thumbnail,
  id,
}) => (
  <div title={id.toString()}>
    <div className="credit_line">{credit_line}</div>
    {thumbnail && <Thumbnail {...thumbnail} />}
  </div>
);
