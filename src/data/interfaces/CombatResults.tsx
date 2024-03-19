import {PlasticUnitCount} from "./PlasticUnitCount";

export interface CombatResults {
    resultType: string;     // ally victory, hostile victory or draw
    factions: {
        allied: string;
        hostile: string;
    }
    unitCounts: {
        allied: PlasticUnitCount[];
        hostile: PlasticUnitCount[];
    }
}
