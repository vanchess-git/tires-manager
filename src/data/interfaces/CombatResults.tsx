import {PlasticUnitCount} from "./PlasticUnitCount";

export interface CombatResults {
    resultType: string;     // attacker_win, defender_win or draw
    factions: {
        attacker: string;
        defender: string;
    }
    unitCounts: {
        attacker: PlasticUnitCount[];
        defender: PlasticUnitCount[];
    }
}
