import { queryClient } from "queries/query";

export const prefetchQueryWithDefault = async (
  queryKey: Readonly<string[]>,
  fetchQuery: (...args: any) => Promise<any>,
  fallback: any = {}
) => {
  queryClient.getQueryData(queryKey) ??
    (await queryClient.prefetchQuery(queryKey, fetchQuery));

  return fallback;
};

export const stringifyQueryParams = (params: Record<string, any>) =>
  Object.entries(params).reduce(
    (prev, [key, value]) => ({
      ...prev,
      [key]: value.toString(),
    }),
    {} as Record<string, any>
  );
