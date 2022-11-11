import { ArtEduRequestResponse } from "../../../types/art-edu";

export interface ArtPieceType {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles?: string[];
  thumbnail?: Thumbnail;
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank?: any;
  date_start: number;
  date_end: number;
  date_display: string;
  date_qualifier_title: string;
  date_qualifier_id?: number;
  artist_display: string;
  place_of_origin: string;
  dimensions: string;
  medium_display: string;
  inscriptions?: string;
  credit_line: string;
  catalogue_display?: any;
  publication_history?: string;
  exhibition_history?: string;
  provenance_text?: string;
  publishing_verification_level: string;
  internal_department_id: number;
  fiscal_year?: number;
  fiscal_year_deaccession?: any;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  copyright_notice?: string;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  colorfulness?: number;
  color?: Color;
  latitude?: any;
  longitude?: any;
  latlon?: any;
  is_on_view: boolean;
  on_loan_display?: any;
  gallery_title?: string;
  gallery_id?: number;
  artwork_type_title: string;
  artwork_type_id: number;
  department_title: string;
  department_id: string;
  artist_id: number;
  artist_title: string;
  alt_artist_ids: any[];
  artist_ids: number[];
  artist_titles: string[];
  category_ids: string[];
  category_titles: string[];
  term_titles: string[];
  style_id?: string;
  style_title?: string;
  alt_style_ids: string[];
  style_ids: string[];
  style_titles: string[];
  classification_id: string;
  classification_title: string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id?: string;
  alt_subject_ids: string[];
  subject_ids: string[];
  subject_titles: string[];
  material_id?: string;
  alt_material_ids: string[];
  material_ids: string[];
  material_titles: string[];
  technique_id?: string;
  alt_technique_ids: string[];
  technique_ids: string[];
  technique_titles: string[];
  theme_titles: string[];
  image_id?: string;
  alt_image_ids: string[];
  document_ids: any[];
  sound_ids: any[];
  video_ids: any[];
  text_ids: any[];
  section_ids: number[];
  section_titles: string[];
  site_ids: any[];
  suggest_autocomplete_boosted?: string;
  suggest_autocomplete_all: SuggestAutoCompleteAll[];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
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

export type ArtEduArtPieceResponse = ArtEduRequestResponse<ArtPieceType[]>;
