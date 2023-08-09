type Effect_Entries = {
  effect: string;
  language: {
    name: string;
    url: string;
  };
};

export interface AbilityDetail {
  effect_entries: Effect_Entries[];
  name: string;
}
