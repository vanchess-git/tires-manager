import {SelectChangeEvent} from "@mui/material";
import {PlasticFaction} from "../data/interfaces/PlasticFaction";
import {plasticFactions} from "../data/plasticFactions";
import {PlasticUnit} from "../data/interfaces/PlasticUnit";
import {PlasticUnitCount} from "../data/interfaces/PlasticUnitCount";
import {plasticUnits} from "../data/plasticUnits";
import {CombatResults} from "../data/interfaces/CombatResults";
import {PlasticUnitPriority} from "../data/interfaces/PlasticUnitPriority";

const handleAllyChange = (event: SelectChangeEvent): PlasticFaction | undefined => {
  let newAllyFaction: PlasticFaction | undefined = plasticFactions.find((item) => event.target.value === item.id);
  if (newAllyFaction !== undefined) {
    return newAllyFaction;
  }
};

const handleHostileChange = (event: SelectChangeEvent) => {
  let newHostileFaction: PlasticFaction | undefined = plasticFactions.find((item) => event.target.value === item.id);
  if (newHostileFaction !== undefined) {
    return newHostileFaction;
  }
};

const increaseAllyCount = (allyUnit: PlasticUnit, index: number, alliedUnitCounts: PlasticUnitCount[]): PlasticUnitCount[] | undefined => {
  const nextAllyCount: PlasticUnitCount[] = alliedUnitCounts.map((c, i) => {
    if (c.unitType === allyUnit.type) {
      return {unitType: c.unitType, unitCount: c.unitCount + 1};
    } else {
      return {unitType: c.unitType, unitCount: c.unitCount};
    }
  });
  return nextAllyCount;
}

const decreaseAllyCount = (allyUnit: PlasticUnit, index: number, alliedUnitCounts: PlasticUnitCount[]): PlasticUnitCount[] | undefined => {
  const nextAllyCount: PlasticUnitCount[] = alliedUnitCounts.map((c, i) => {
    if (c.unitType === allyUnit.type) {
      return {unitType: c.unitType, unitCount: c.unitCount - 1};
    } else {
      return {unitType: c.unitType, unitCount: c.unitCount};
    }
  });
  return nextAllyCount;
}

const increaseHostileCount = (index: number, hostileUnitCounts: PlasticUnitCount[], hostileUnits: PlasticUnit[]): PlasticUnitCount[] | undefined => {
  const nextHostileCount: PlasticUnitCount[] = hostileUnitCounts.map((c, i) => {
    if (c.unitType === hostileUnits[index].type) {
      return {unitType: c.unitType, unitCount: c.unitCount + 1};
    } else {
      return {unitType: c.unitType, unitCount: c.unitCount};
    }
  });
  return nextHostileCount;
}

const decreaseHostileCount = (index: number, hostileUnitCounts: PlasticUnitCount[], hostileUnits: PlasticUnit[]): PlasticUnitCount[] | undefined => {
  const nextHostileCount: PlasticUnitCount[] = hostileUnitCounts.map((c, i) => {
    if (c.unitType === hostileUnits[index].type) {
      return {unitType: c.unitType, unitCount: c.unitCount - 1};
    } else {
      return {unitType: c.unitType, unitCount: c.unitCount};
    }
  });
  return nextHostileCount;
}

const plasticUnitsArrById = (id: string): PlasticUnit[] | undefined => {
  let plasticUnitsArr: PlasticUnit[] = plasticUnits.filter((item): item is PlasticUnit => {
    return (typeof item === "object" && item !== null && !Array.isArray(item) &&
        "factions" in item && Array.isArray(item.factions) && item.factions.includes(id))
  })
  return plasticUnitsArr;
}

const calculateBattle = (
    alliedFaction: PlasticFaction,
    hostileFaction: PlasticFaction,
    alliedUnits: PlasticUnit[],
    hostileUnits: PlasticUnit[],
    alliedUnitCounts: PlasticUnitCount[],
    hostileUnitCounts: PlasticUnitCount[],
    alliedUnitPriorities: PlasticUnitPriority[],
    hostileUnitPriorities: PlasticUnitPriority[],
): CombatResults | undefined => {
  // TODO figure out who are in combat
  let alliesLeft = alliedUnitCounts;
  let hostilesLeft = hostileUnitCounts;
  // TODO figure out type of combat: space or ground

  // TODO roll for combat

  // TODO return the results
  return undefined;
}

const rollCombatDice = (
    faction: PlasticFaction,
    units: PlasticUnit[],
    unitCounts: PlasticUnitCount[],
): number => {
  let hits: number = unitCounts.map((item): number => {
    if (item.unitCount > 0) {
      let currentUnit: PlasticUnit | undefined = units.find((item1) => item.unitType === item1.type);
      let currentUnitHits: number = 0;
      if (
        currentUnit?.combat.normal.noOfRolls !== undefined &&
        currentUnit?.combat.normal.strength !== undefined
      ) {
        for (let i: number = 0; i < item.unitCount; i++) {
          for (let j: number = 0; j < currentUnit.combat.normal.noOfRolls; j++) {
            let newRoll: number = Math.floor(Math.random() * 10) + 1;
            if (newRoll >= currentUnit.combat.normal.strength) {
              currentUnitHits += 1;
            }
          }
        }
      }
      return currentUnitHits;
    } else {
      return 0;
    }
  }).reduce((totalIn, hitsIn) => totalIn + hitsIn, 0) as number;
  return hits;
}

export {
  handleAllyChange,
  handleHostileChange,
  increaseAllyCount,
  decreaseAllyCount,
  increaseHostileCount,
  decreaseHostileCount,
  plasticUnitsArrById,
  calculateBattle,
}
