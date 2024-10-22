export interface Monster {
  Count: number;
  Name: string;
}

export interface LootItem {
  Count: number;
  Name: string;
}

export interface SessionData {
  Balance: string;
  Damage?: string;
  "Damage/h"?: string;
  Healing?: string;
  "Healing/h"?: string;
  "Killed Monsters"?: Monster[];
  Loot?: string;
  "Looted Items"?: LootItem[];
  "Raw XP Gain"?: string;
  "Raw XP/h"?: string;
  "Session end": string;
  "Session length": string;
  "Session start": string;
  Supplies?: string;
  "XP Gain"?: string;
  "XP/h"?: string;
}
