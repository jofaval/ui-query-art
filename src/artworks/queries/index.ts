export * from "./artworks.query";
export * from "./artworks-entry.query";

export const artworksKeys = {
  all: ["artworks"] as const,
  lists: () => [...artworksKeys.all, "list"] as const,
  list: (filters: string) => [...artworksKeys.lists(), { filters }] as const,
  details: () => [...artworksKeys.all, "detail"] as const,
  detail: (id: number) => [...artworksKeys.details(), id.toString()] as const,
};
