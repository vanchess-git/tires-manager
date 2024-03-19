import {SelectChangeEvent} from "@mui/material";
import {PlasticFaction} from "../data/interfaces/PlasticFaction";
import {plasticFactions} from "../data/plasticFactions";
import {PlasticUnit} from "../data/interfaces/PlasticUnit";
import {PlasticUnitCount} from "../data/interfaces/PlasticUnitCount";
import {plasticUnits} from "../data/plasticUnits";
import {CombatResults} from "../data/interfaces/CombatResults";
import {PlasticUnitPriority} from "../data/interfaces/PlasticUnitPriority";

const handleFactionChange = (event: SelectChangeEvent): PlasticFaction | undefined => {
  let newAllyFaction: PlasticFaction | undefined = plasticFactions.find((item) => event.target.value === item.id);
  if (newAllyFaction !== undefined) {
    return newAllyFaction;
  }
};

const increaseUnitCount = (currentUnit: PlasticUnit, index: number, unitCounts: PlasticUnitCount[]): PlasticUnitCount[] | undefined => {
  const nextAllyCount: PlasticUnitCount[] = unitCounts.map((c, i) => {
    if (c.unitType === currentUnit.type) {
      return {unitType: c.unitType, unitCount: c.unitCount + 1};
    } else {
      return {unitType: c.unitType, unitCount: c.unitCount};
    }
  });
  return nextAllyCount;
}

const decreaseUnitCount = (currentUnit: PlasticUnit, index: number, unitCounts: PlasticUnitCount[]): PlasticUnitCount[] | undefined => {
  const nextAllyCount: PlasticUnitCount[] = unitCounts.map((c, i) => {
    if (c.unitType === currentUnit.type) {
      return {unitType: c.unitType, unitCount: c.unitCount - 1};
    } else {
      return {unitType: c.unitType, unitCount: c.unitCount};
    }
  });
  return nextAllyCount;
}

const increaseUnitCountByIndex = (index: number, unitCounts: PlasticUnitCount[], PlasticUnits: PlasticUnit[]): PlasticUnitCount[] | undefined => {
  const nextHostileCount: PlasticUnitCount[] = unitCounts.map((c, i) => {
    if (c.unitType === PlasticUnits[index].type) {
      return {unitType: c.unitType, unitCount: c.unitCount + 1};
    } else {
      return {unitType: c.unitType, unitCount: c.unitCount};
    }
  });
  return nextHostileCount;
}

const decreaseUnitCountByIndex = (index: number, unitCounts: PlasticUnitCount[], PlasticUnits: PlasticUnit[]): PlasticUnitCount[] | undefined => {
  const nextHostileCount: PlasticUnitCount[] = unitCounts.map((c, i) => {
    if (c.unitType === PlasticUnits[index].type) {
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
): CombatResults => {
  let combatResults: CombatResults = {
    resultType: "draw",
    factions: {
      allied: alliedFaction.name,
      hostile: hostileFaction.name,
    },
    unitCounts: {
      allied: alliedUnitCounts,
      hostile: hostileUnitCounts,
    }
  }
  // TODO figure out who are in combat
  let alliesLeft: PlasticUnitCount[] = alliedUnitCounts;
  let hostilesLeft: PlasticUnitCount[] = hostileUnitCounts;
  // TODO figure out type of combat: space or ground

  // TODO roll for combat
  let allyHits: number = rollCombatDice(alliedFaction, alliedUnits, alliesLeft)
  let hostileHits: number = rollCombatDice(hostileFaction, hostileUnits, hostilesLeft)
  alliesLeft = assignHits(hostileHits, alliesLeft, alliedUnits, alliedUnitPriorities)
  hostilesLeft = assignHits(allyHits, hostilesLeft, hostileUnits, hostileUnitPriorities)
  // TODO return the results
  return combatResults;
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

const assignHits = (
  hitsToAssign: number,
  unitCounts: PlasticUnitCount[],
  plasticUnits: PlasticUnit[],
  unitPriorities: PlasticUnitPriority[],
): PlasticUnitCount[] => {
  let hitsLeftToAssign: number = hitsToAssign;
  let unitCountsLeft: PlasticUnitCount[] | undefined = unitCounts;
  for (let i: number = 0; i < unitPriorities.length; i++) {
    if (hitsToAssign > 0) {
      const unitPriority: PlasticUnitPriority | undefined = unitPriorities.find((item) => item.unitPriority == i);
      if (unitPriority != undefined) {
        const unitCount: PlasticUnitCount | undefined = unitCounts.find((item) => item.unitType === unitPriority.unitType);
        if (unitCount != undefined && unitCount.unitCount > 0) {
          const plasticUnit: PlasticUnit | undefined = plasticUnits.find((item) => item.type === unitPriority.unitType);
          if (plasticUnit != undefined) {
            // unitPriority & unitCount should exist here
            let currentUnitsRemaining: number = unitCount.unitCount;
            while (currentUnitsRemaining > 0 && hitsLeftToAssign > 0) {
              unitCountsLeft = decreaseUnitCount(plasticUnit, 0, unitCountsLeft) || unitCountsLeft;
              currentUnitsRemaining--;
              hitsToAssign--;
            }
          }
        }
      }
    }
  }
  return unitCountsLeft;
}

export {
  handleFactionChange,
  increaseUnitCount,
  decreaseUnitCount,
  increaseUnitCountByIndex,
  decreaseUnitCountByIndex,
  plasticUnitsArrById,
  calculateBattle,
}
