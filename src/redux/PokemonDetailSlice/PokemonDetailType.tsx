export interface Details {
  effect: string;
  name: string;
  url: string;
  short_effect: string;
  flavor_text: string;
  effect_entries: string[];
  flavor_text_entries: string[];
  id: number;
  names: string;
  pokemon: string;
}

export interface FlavourText {
  flavor_text: string;
}

export interface names {
  name: string;
}
export interface EffectEntries {
  effect: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface DetailsList {
  list: Details[];
  isLoading: boolean;
  name: string;
  is_main_series: boolean;
  id: number;
  effectEntries: EffectEntries[];
  language: Language;
  flavourText: FlavourText[];
}
