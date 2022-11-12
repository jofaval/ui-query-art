import { ArtEduRequestResponse } from "types/art-edu";

export interface ArtworkType {
  alt_artist_ids: any[];
  alt_classification_ids: string[];
  alt_image_ids: string[];
  alt_material_ids: string[];
  alt_style_ids: string[];
  alt_subject_ids: string[];
  alt_technique_ids: string[];
  alt_titles?: string[];
  api_link: string;
  api_model: string;
  artist_display: string;
  artist_id: number;
  artist_ids: number[];
  artist_title: string;
  artist_titles: string[];
  artwork_type_id: number;
  artwork_type_title: string;
  boost_rank?: any;
  catalogue_display?: any;
  category_ids: string[];
  category_titles: string[];
  classification_id: string;
  classification_ids: string[];
  classification_title: string;
  classification_titles: string[];
  color?: Color;
  colorfulness?: number;
  copyright_notice?: string;
  credit_line: string;
  date_display: string;
  date_end: number;
  date_qualifier_id?: number;
  date_qualifier_title: string;
  date_start: number;
  department_id: string;
  department_title: string;
  dimensions: string;
  document_ids: any[];
  exhibition_history?: string;
  fiscal_year_deaccession?: any;
  fiscal_year?: number;
  gallery_id?: number;
  gallery_title?: string;
  has_advanced_imaging: boolean;
  has_educational_resources: boolean;
  has_multimedia_resources: boolean;
  has_not_been_viewed_much: boolean;
  id: number;
  image_id?: string;
  inscriptions?: string;
  internal_department_id: number;
  is_boosted: boolean;
  is_on_view: boolean;
  is_public_domain: boolean;
  is_zoomable: boolean;
  latitude?: any;
  latlon?: any;
  longitude?: any;
  main_reference_number: string;
  material_id?: string;
  material_ids: string[];
  material_titles: string[];
  max_zoom_window_size: number;
  medium_display: string;
  on_loan_display?: any;
  place_of_origin: string;
  provenance_text?: string;
  publication_history?: string;
  publishing_verification_level: string;
  section_ids: number[];
  section_titles: string[];
  site_ids: any[];
  sound_ids: any[];
  source_updated_at: string;
  style_id?: string;
  style_ids: string[];
  style_title?: string;
  style_titles: string[];
  subject_id?: string;
  subject_ids: string[];
  subject_titles: string[];
  suggest_autocomplete_all: SuggestAutoCompleteAll[];
  suggest_autocomplete_boosted?: string;
  technique_id?: string;
  technique_ids: string[];
  technique_titles: string[];
  term_titles: string[];
  text_ids: any[];
  theme_titles: string[];
  thumbnail?: Thumbnail;
  timestamp: string;
  title: string;
  updated_at: string;
  video_ids: any[];
}

interface SuggestAutoCompleteAll {
  input: string[];
  contexts: {
    groupings: string[];
  };
  weight?: number;
}

interface Color {
  h: number;
  l: number;
  s: number;
  percentage: number;
  population: number;
}

interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

export type ArtEduArtworkResponse = ArtEduRequestResponse<ArtworkType[]>;
export type ArtEduArtworkEntryResponse = ArtEduRequestResponse<ArtworkType>;
