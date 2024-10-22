export interface Creature {
  name: string;
  race: string;
  image_url: string;
  featured: boolean;
}

export interface BoostedCreature {
  name: string;
  race: string;
  image_url: string;
  featured: boolean;
}

export interface CreaturesResponse {
  boosted: BoostedCreature;
  creature_list: Creature[];
}
