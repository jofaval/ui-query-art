import { ErrorWrapper } from "components/error.component";
import { SmartImage } from "components/smart-image.component";

import { ArtworkType } from "../types/generic-art-work.type";

const NO_THUMBNAIL_ERROR = {
  name: "Missing",
  message: "No thumbnail was found",
};

export const Thumbnail: React.FC<ArtworkType["thumbnail"]> = (props) => {
  if (!props) {
    return <ErrorWrapper error={NO_THUMBNAIL_ERROR} />;
  }

  const { alt_text, height, lqip, width } = props;

  return <SmartImage {...{ alt: alt_text, height, src: lqip, width }} />;
};
