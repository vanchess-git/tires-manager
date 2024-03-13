import {SelectChangeEvent} from "@mui/material";
import {PlasticFaction} from "../data/interfaces/PlasticFaction";
import {plasticFactions} from "../data/plasticFactions";
import {PlasticUnit} from "../data/interfaces/PlasticUnit";
import {PlasticUnitCount} from "../data/interfaces/PlasticUnitCount";

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

export {
  handleAllyChange,
  handleHostileChange,
  increaseAllyCount,
  decreaseAllyCount,
  increaseHostileCount,
  decreaseHostileCount
}