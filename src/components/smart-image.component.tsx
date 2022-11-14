import { useEffect, useState } from "react";

type ImagePropsType = {
  src: string;
  alt?: string;
  loading?: JSX.Element | JSX.Element[] | string;
  className?: string;
};

const DEFAULT_IMAGE = "Loading...";

/**
 * Complex image loader wrapper
 *
 * @source https://stackoverflow.com/questions/57074619/show-a-dummy-text-until-image-load-in-react#answer-57074793
 * @author Asaf Aviv <https://stackoverflow.com/users/8605960/asaf-aviv>
 */
export const SmartImage: React.FC<ImagePropsType> = ({
  alt,
  src,
  loading = DEFAULT_IMAGE,
  className = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setIsLoaded(true);
    image.src = src;
  }, []);

  return isLoaded ? <img {...{ alt, src, className }} /> : <>{loading}</>;
};
