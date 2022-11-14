import { ArtworkImage } from "./content/artwork-image.component";
import { Thumbnail } from "./content/artwork-thumbnail.component";

import type { ArtworkType } from "./types/generic-art-work.type";

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
  <article title={`${id} - ${title}`} className={className}>
    {image_id && (
      <ArtworkImage
        {...{
          id,
          image_id,
          title,
          className: artWorkImageClassName,
          size: 843,
        }}
      />
    )}
    {/* {thumbnail && <Thumbnail {...thumbnail} />} */}

    <h3 className="text-lg font-bold text-ellipsis whitespace-nowrap overflow-hidden">
      {title}
    </h3>
    <p
      className="credit_line text-center text-ellipsis whitespace-nowrap overflow-hidden"
      title={credit_line}
    >
      {credit_line}
    </p>
  </article>
);
