import { ErrorWrapper } from "./Error";
import { Loader } from "./Loader";

export const FetchErrorContainer: React.FC<{
  isLoading: boolean;
  error: unknown;
  children: JSX.Element | JSX.Element[];
}> = ({ isLoading, error, children }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error && error instanceof Error) {
    return <ErrorWrapper error={error} />;
  } else {
    <ErrorWrapper
      error={{
        name: "Unkown",
        message: error?.toString() ?? "",
      }}
    />;
  }

  return <>{children}</>;
};
