import serviceConstants from "@/constants/service.constants";

export const artKeys = {
  all: ["pieces"] as const,
  lists: () => [...artKeys.all, "list"] as const,
  list: (filters: string) => [...artKeys.lists(), { filters }] as const,
  details: () => [...artKeys.all, "detail"] as const,
  detail: (id: number) => [...artKeys.details(), id] as const,
};

// const getArtworks = ({}): Promise<ArtEduArtRequest> => {
//   return fetch({
//     url: [serviceConstants.BASE_URL].join("/"),
//   });
// };
