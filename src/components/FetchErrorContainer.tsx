import { ErrorWrapper } from "./Error";
import { Loader } from "./Loader";

import { UseQueryResult } from "@tanstack/react-query";

const defaultErrorWrapper = (error: unknown) => ({
  name: "Unkown",
  message: error?.toString() ?? "",
});

export const FetchErrorContainer: React.FC<
  Pick<UseQueryResult, "isLoading" | "error"> & {
    children: JSX.Element | JSX.Element[];
  }
> = ({ isLoading, error, children }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error && error instanceof Error) {
    return <ErrorWrapper error={error} />;
  } else {
    <ErrorWrapper error={defaultErrorWrapper(error)} />;
  }

  return <>{children}</>;
};
