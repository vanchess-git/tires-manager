import {PlasticUnitCount} from "./PlasticUnitCount";

export interface CombatResults {
    resultType: string;     // ally victory, hostile victory or draw
    factions: {
        attacker: string;
        defender: string;
    }
    unitCounts: {
        attacker: PlasticUnitCount[];
        defender: PlasticUnitCount[];
    }
}
