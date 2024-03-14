import {BarChart} from "@mui/x-charts/BarChart";
import React, {useEffect, useState} from "react";
import {
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  InputLabel, MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import {PlasticUnit} from "../../data/interfaces/PlasticUnit";
import {plasticUnits} from "../../data/plasticUnits";
import {PlasticFaction} from "../../data/interfaces/PlasticFaction";
import {plasticFactions} from "../../data/plasticFactions";
import {PlasticUnitCount} from "../../data/interfaces/PlasticUnitCount";
import {PlasticUnitPriority} from "../../data/interfaces/PlasticUnitPriority";
import {
  decreaseAllyCount, decreaseHostileCount,
  handleAllyChange,
  handleHostileChange,
  increaseAllyCount, increaseHostileCount, plasticUnitsArrById
} from "../../utils/BattleCalculatorUtils";
import {defaultFaction} from "../../data/defaultValues/defaultFaction";
import {defaultUnitCounts} from "../../data/defaultValues/defaultUnitCounts";
import {defaultUnitPriorities} from "../../data/defaultValues/defaultUnitPriorities";

function BattleCalculator() {

  let [alliedFaction, setAlliedFaction] = useState<PlasticFaction>(defaultFaction);
  let [hostileFaction, setHostileFaction] = useState<PlasticFaction>(defaultFaction);
  let [alliedUnits, setAlliedUnits] = useState<PlasticUnit[]>([]);
  let [hostileUnits, setHostileUnits] = useState<PlasticUnit[]>([]);
  let [resolveCombat, setResolveCombat] = useState<boolean>(false);
  let [alliedUnitCounts, setAlliedUnitCounts] = useState<PlasticUnitCount[]>(defaultUnitCounts)
  let [hostileUnitCounts, setHostileUnitCounts] = useState<PlasticUnitCount[]>(defaultUnitCounts)
  let [alliedUnitPriorities, setAlliedUnitPriorities] = useState<PlasticUnitPriority[]>(defaultUnitPriorities)
  let [hostileUnitPriorities, setHostileUnitPriorities] = useState<PlasticUnitPriority[]>(defaultUnitPriorities)

  useEffect(() => {setAlliedUnits(plasticUnitsArrById(alliedFaction.id) || alliedUnits);}, [alliedFaction])
  useEffect(() => {setHostileUnits(plasticUnitsArrById(hostileFaction.id) || hostileUnits);}, [hostileFaction])

  useEffect(() => {
    let alliesInCombat: PlasticUnitCount[] = alliedUnitCounts.filter((item):item is PlasticUnitCount => {
      return (typeof item == "object" && item !== null && item.unitCount > 0)
    });
    let hostilesInCombat: PlasticUnitCount[] = hostileUnitCounts.filter((item):item is PlasticUnitCount => {
      return (typeof item == "object" && item !== null && item.unitCount > 0)
    });
    let alliesTotal: number = alliesInCombat.reduce((total, item) => total + item.unitCount, 0);
    let hostilesTotal: number = hostilesInCombat.reduce((total, item) => total + item.unitCount, 0);
    // the combat loop
    while (alliesTotal > 0 && hostilesTotal > 0) {

      let allyHits: number = alliesInCombat.map((item): number => {
        let currentShip: PlasticUnit | undefined = alliedUnits.find((item1) => item.unitType === item1.type);
        let currentShipHits: number = 0;
        if (
          currentShip?.combat.normal.noOfRolls !== undefined &&
          currentShip?.combat.normal.strength !== undefined
        ) {
          for (let j = 0; j < item.unitCount; j++) {
            for (let i = 0; i < currentShip.combat.normal.noOfRolls; i++) {
              let newRoll: number = Math.floor(Math.random() * 10) + 1;
              if (newRoll >= currentShip.combat.normal.strength) {
                currentShipHits += 1;
              }
            }
          }
        }
        return currentShipHits;
      }).reduce((total, hits) => total + hits, 0);

      let hostileHits: number = hostilesInCombat.map((item): number => {
        let currentShip: PlasticUnit | undefined = hostileUnits.find((item1) => item.unitType === item1.type);
        let currentShipHits: number = 0;
        if (
          currentShip?.combat.normal.noOfRolls !== undefined &&
          currentShip?.combat.normal.strength !== undefined
        ) {
          for (let j = 0; j < item.unitCount; j++) {
            for (let i = 0; i < currentShip.combat.normal.noOfRolls; i++) {
              let newRoll: number = Math.floor(Math.random() * 10) + 1;
              if (newRoll >= currentShip.combat.normal.strength) {
                currentShipHits += 1;
              }
            }
          }
        }
        return currentShipHits;
      }).reduce((total, hits) => total + hits, 0);

      alliesTotal -= hostileHits;
      hostilesTotal -= allyHits;

      while (allyHits > 0) {

      }
    }
  }, [resolveCombat]);

  return (
    <Container>
      <Typography>
        App is started
      </Typography>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Turn 1', 'Turn 2', 'Turn 3', 'Turn 4', 'Turn 5', ] }]}
        series={[{ data: [20, 36, 48.8, 59.04, 67.23] }, { data: [20, 36, 48.8, 59.04, 67.23] }, ]}
        width={500}
        height={300}
      />
      <Card variant="outlined">
        <Stack
          spacing={2}
        >
          <Typography>hi</Typography>
          <Grid container spacing={2}>
            <Grid item xs={2}
              spacing={2}
            >
              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="1st-player-faction">Ally Faction</InputLabel>
                  <Select
                      labelId="1st-player-faction"
                      value={alliedFaction.id}
                      label="faction"
                      defaultValue={alliedFaction.id}
                      onChange={(event) => setAlliedFaction(handleAllyChange(event) || alliedFaction)}
                  >
                    {plasticFactions.map((faction, index) =>
                        <MenuItem value={faction.id}>{faction.name}</MenuItem>
                    )}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="2nd-player-faction">Hostile Faction</InputLabel>
                  <Select
                      labelId="2nd-player-faction"
                      value={hostileFaction.id}
                      label="faction"
                      defaultValue={hostileFaction.id}
                      onChange={(event) => setHostileFaction(handleHostileChange(event) || alliedFaction)}
                  >
                    {plasticFactions.map((faction, index) =>
                        <MenuItem value={faction.id}>{faction.name}</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
            {alliedUnits.map((allyUnit, index) =>
              <Grid item xs={2}
                spacing={2}
              >
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" size="small" onClick={() => {
                      setAlliedUnitCounts(decreaseAllyCount(allyUnit, index, alliedUnitCounts) || alliedUnitCounts)
                    }}>-</Button>
                    <Button variant="contained" size="small" onClick={() => {
                      setAlliedUnitCounts(increaseAllyCount(allyUnit, index, alliedUnitCounts) || alliedUnitCounts)
                    }}>+</Button>
                  </Stack>
                  <TextField
                      label={allyUnit ? allyUnit.name.normal : "name"}
                      InputProps={{
                        readOnly: true,
                      }}
                      defaultValue={
                    alliedUnitCounts.find((item) =>
                      allyUnit.type === item.unitType
                    )?.unitCount
                  }
                      value={alliedUnitCounts.find((item) =>
                        allyUnit.type === item.unitType
                      )?.unitCount}
                  />
                  <TextField
                      label={hostileUnits[index] ? hostileUnits[index].name.normal : "name"}
                      InputProps={{
                        readOnly: true,
                      }}
                      defaultValue={
                        hostileUnitCounts.find((item) =>
                          hostileUnits[index]?.type === item.unitType
                        )?.unitCount
                      }
                      value={hostileUnitCounts.find((item) =>
                        hostileUnits[index]?.type === item.unitType
                      )?.unitCount
                  }
                  />
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" size="small" onClick={() => {
                      setHostileUnitCounts(decreaseHostileCount(index, hostileUnitCounts, hostileUnits) || hostileUnitCounts)
                    }}>-</Button>
                    <Button variant="contained" size="small" onClick={() => {
                      setHostileUnitCounts(increaseHostileCount(index, hostileUnitCounts, hostileUnits) || hostileUnitCounts)
                    }}>+</Button>
                  </Stack>
                </Stack>
              </Grid>
            )}
          </Grid>
        </Stack>
      </Card>
    </Container>
  )
}

export default BattleCalculator;
