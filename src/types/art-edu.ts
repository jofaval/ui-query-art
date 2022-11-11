export interface ArtEduRequestPagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface Info {
  license_text: string;
  license_links: string[];
  version: string;
}

export interface Config {
  iiif_url: string;
  website_url: string;
}

export interface ArtEduRequestResponse<TData = any> {
  pagination: ArtEduRequestPagination;
  data: TData;
  info: Info;
  config: Config;
}
