export interface Info {
  license_text: string;
  license_links: string[];
  version: string;
}

export interface Config {
  iiif_url: string;
  website_url: string;
}

export type ArtEduRequestResponse<TData = any> = Readonly<{
  data: TData;
  info: Info;
  config: Config;
}>;

export interface ArtEduRequestPagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export type ArtEduRequestPaginatedResponse<TData = any> = Readonly<
  ArtEduRequestResponse<TData> & {
    pagination: ArtEduRequestPagination;
  }
>;
