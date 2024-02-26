export interface PlasticUnit {
  id: string;
  class: string[];
  type: string;
  factions: string[];
  name: {
    normal: string;
    upgrade: string;
  }
  combat: {
    normal: {
      strength: number;
      noOfRolls: number;
    }
    upgrade: {
      strength: number;
      noOfRolls: number;
    }
  };
}