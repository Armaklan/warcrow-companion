export interface CollapsibleItem {
  title: string;
  details: string;
  icon?: string;
}

export interface Decor {
  title: string;
  keywords: {
    name: string,
    value?: string
  }[];
  dimensions: string;
}

export interface Scenario {
  title: string;
  image: string;
  requiredMaterial?: string[];
  roundLength: number;
  endRoundScoring?: string[];
  endGame: number;
  // Additional notes/details; can contain HTML
  additionnal?: string;
}

export interface Feat {
  title: string
  requiredMaterial?: string[];
  scoring?: string;
  // Additional notes/details; can contain HTML
  additionnal?: string;
}
