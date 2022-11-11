import { ErrorWrapper } from "../../../components/Error";
import { ArtworkType } from "../types/art-work.type";

const NO_THUMBNAIL_ERROR = {
  name: "Missing",
  message: "No thumbnail was found",
};

export const Thumbnail: React.FC<ArtworkType["thumbnail"]> = (props) => {
  if (!props) {
    return <ErrorWrapper error={NO_THUMBNAIL_ERROR} />;
  }

  const { alt_text, height, lqip, width } = props;

  return <img {...{ alt: alt_text, height, src: lqip, width }} />;
};
