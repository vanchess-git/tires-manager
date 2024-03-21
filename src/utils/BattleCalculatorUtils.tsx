import {SelectChangeEvent} from "@mui/material";
import {PlasticFaction} from "../data/interfaces/PlasticFaction";
import {plasticFactions} from "../data/plasticFactions";
import {PlasticUnit} from "../data/interfaces/PlasticUnit";
import {PlasticUnitCount} from "../data/interfaces/PlasticUnitCount";
import {plasticUnits} from "../data/plasticUnits";
import {CombatResults} from "../data/interfaces/CombatResults";
import {PlasticUnitPriority} from "../data/interfaces/PlasticUnitPriority";
import {SimpleCombatPercentages} from "../data/interfaces/SimpleCombatPercentages";
import {defaultCombatPercentages} from "../data/defaultValues/defaultCombatPercentages";

const handleFactionChange = (event: SelectChangeEvent): PlasticFaction | undefined => {
  let newFaction: PlasticFaction | undefined = plasticFactions.find((item) => event.target.value === item.id);
  if (newFaction !== undefined) {
    return newFaction;
  }
};

const increaseUnitCount = (currentUnit: PlasticUnit, index: number, unitCounts: PlasticUnitCount[]): PlasticUnitCount[] | undefined => {
  const nextUnitCount: PlasticUnitCount[] = unitCounts.map((c, i) => {
    if (c.unitType === currentUnit.type) {
      return {unitType: c.unitType, unitCount: c.unitCount + 1};
    } else {
      return {unitType: c.unitType, unitCount: c.unitCount};
    }
  });
  return nextUnitCount;
}

const decreaseUnitCount = (currentUnit: PlasticUnit, index: number, unitCounts: PlasticUnitCount[]): PlasticUnitCount[] | undefined => {
  const nextUnitCount: PlasticUnitCount[] = unitCounts.map((c, i) => {
    if (c.unitType === currentUnit.type) {
      return {unitType: c.unitType, unitCount: c.unitCount - 1};
    } else {
      return {unitType: c.unitType, unitCount: c.unitCount};
    }
  });
  return nextUnitCount;
}

const increaseUnitCountByIndex = (index: number, unitCounts: PlasticUnitCount[], PlasticUnits: PlasticUnit[]): PlasticUnitCount[] | undefined => {
  const nextUnitCount: PlasticUnitCount[] = unitCounts.map((c, i) => {
    if (c.unitType === PlasticUnits[index].type) {
      return {unitType: c.unitType, unitCount: c.unitCount + 1};
    } else {
      return {unitType: c.unitType, unitCount: c.unitCount};
    }
  });
  return nextUnitCount;
}

const decreaseUnitCountByIndex = (index: number, unitCounts: PlasticUnitCount[], PlasticUnits: PlasticUnit[]): PlasticUnitCount[] | undefined => {
  const nextUnitCount: PlasticUnitCount[] = unitCounts.map((c, i) => {
    if (c.unitType === PlasticUnits[index].type) {
      return {unitType: c.unitType, unitCount: c.unitCount - 1};
    } else {
      return {unitType: c.unitType, unitCount: c.unitCount};
    }
  });
  return nextUnitCount;
}

const plasticUnitsArrById = (id: string): PlasticUnit[] | undefined => {
  let plasticUnitsArr: PlasticUnit[] = plasticUnits.filter((item): item is PlasticUnit => {
    return (typeof item === "object" && item !== null && !Array.isArray(item) &&
        "factions" in item && Array.isArray(item.factions) && item.factions.includes(id))
  })
  return plasticUnitsArr;
}

const calculateMultipleBattles = (
    numberOfBattles: number,
    attackerFaction: PlasticFaction,
    defenderFaction: PlasticFaction,
    attackerUnits: PlasticUnit[],
    defenderUnits: PlasticUnit[],
    attackerUnitCounts: PlasticUnitCount[],
    defenderUnitCounts: PlasticUnitCount[],
    attackerUnitPriorities: PlasticUnitPriority[],
    defenderUnitPriorities: PlasticUnitPriority[],
): SimpleCombatPercentages => {
  // return was CombatResults[]
  let arrOfCombatResults: CombatResults[] = [];
  let winPercentages = defaultCombatPercentages;
  for (let i: number = 0; i < numberOfBattles; i++) {
    arrOfCombatResults.push(calculateBattle(
        attackerFaction,
        defenderFaction,
        attackerUnits,
        defenderUnits,
        attackerUnitCounts,
        defenderUnitCounts,
        attackerUnitPriorities,
        defenderUnitPriorities,
    ))
  }
  winPercentages = percentagesByResultType(arrOfCombatResults);
  console.log(winPercentages)
  return winPercentages;
}

const calculateBattle = (
    attackerFaction: PlasticFaction,
    defenderFaction: PlasticFaction,
    attackerUnits: PlasticUnit[],
    defenderUnits: PlasticUnit[],
    attackerUnitCounts: PlasticUnitCount[],
    defenderUnitCounts: PlasticUnitCount[],
    attackerUnitPriorities: PlasticUnitPriority[],
    defenderUnitPriorities: PlasticUnitPriority[],
): CombatResults => {
  let combatOngoing: boolean = true;

  // TODO figure out who are in combat
  let attackersLeft: PlasticUnitCount[] = attackerUnitCounts;
  let defendersLeft: PlasticUnitCount[] = defenderUnitCounts;
  // TODO figure out type of combat: space or ground

  // roll dice and assign hits
  while (combatOngoing) {
    let allyHits: number = rollCombatDice(attackerFaction, attackerUnits, attackersLeft)
    let hostileHits: number = rollCombatDice(defenderFaction, defenderUnits, defendersLeft)
    attackersLeft = assignHits(hostileHits, attackersLeft, attackerUnits, attackerUnitPriorities)
    defendersLeft = assignHits(allyHits, defendersLeft, defenderUnits, defenderUnitPriorities)
    combatOngoing = checkIfCombatContinues(attackersLeft, defendersLeft)
  }

  // return the results of a single combat
  return checkCombatResults(attackerFaction, defenderFaction, attackersLeft, defendersLeft);
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

const checkIfCombatContinues = (
  attackersLeft: PlasticUnitCount[],
  defendersLeft: PlasticUnitCount[],
): boolean => {
  const totalAttackersLeft: number = attackersLeft.reduce((total, unit) => total + unit.unitCount, 0);
  const totalDefendersLeft: number = defendersLeft.reduce((total, unit) => total + unit.unitCount, 0);
  if (totalAttackersLeft <= 0 || totalDefendersLeft <= 0) {
    return false;
  } else {
    return true;
  }
}

const checkCombatResults = (
  attackerFaction: PlasticFaction,
  defenderFaction: PlasticFaction,
  attackersLeft: PlasticUnitCount[],
  defendersLeft: PlasticUnitCount[],
): CombatResults => {
  const totalAttackersLeft: number = attackersLeft.reduce((total, unit) => total + unit.unitCount, 0);
  const totalDefendersLeft: number = defendersLeft.reduce((total, unit) => total + unit.unitCount, 0);
  if (totalAttackersLeft <= 0 && totalDefendersLeft <= 0) {
    return {
      resultType: "draw",
      factions: {
        attacker: attackerFaction.name,
        defender: defenderFaction.name,
      },
      unitCounts: {
        attacker: attackersLeft,
        defender: defendersLeft,
      }
    }
  } else if (totalAttackersLeft > 0 && totalDefendersLeft <= 0) {
    return {
      resultType: "attacker_win",
      factions: {
        attacker: attackerFaction.name,
        defender: defenderFaction.name,
      },
      unitCounts: {
        attacker: attackersLeft,
        defender: defendersLeft,
      }
    }
  } else {
    return {
      resultType: "defender_win",
      factions: {
        attacker: attackerFaction.name,
        defender: defenderFaction.name,
      },
      unitCounts: {
        attacker: attackersLeft,
        defender: defendersLeft,
      }
    }
  }
}

const percentagesByResultType = (
    combatResultsArr: CombatResults[],
): SimpleCombatPercentages => {
  let returnValues: SimpleCombatPercentages = defaultCombatPercentages;
  if (combatResultsArr.length > 0) {
    let attackerWins: number = combatResultsArr.filter(result => result.resultType === "attacker_win").length / combatResultsArr.length * 100;
    let draws: number = combatResultsArr.filter(result => result.resultType === "draw").length / combatResultsArr.length * 100;
    let defenderWins: number = combatResultsArr.filter(result => result.resultType === "defender_win").length / combatResultsArr.length * 100;
    returnValues.graphValues = [attackerWins, draws, defenderWins];
    return returnValues;
  }
  return returnValues;
}

export {
  handleFactionChange,
  increaseUnitCount,
  decreaseUnitCount,
  increaseUnitCountByIndex,
  decreaseUnitCountByIndex,
  plasticUnitsArrById,
    calculateMultipleBattles,
  calculateBattle,
}
