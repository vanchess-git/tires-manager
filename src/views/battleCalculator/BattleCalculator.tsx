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
  calculateBattle, calculateMultipleBattles,
  decreaseUnitCount,
  decreaseUnitCountByIndex,
  handleFactionChange,
  increaseUnitCount,
  increaseUnitCountByIndex,
  plasticUnitsArrById
} from "../../utils/BattleCalculatorUtils";
import {defaultFaction} from "../../data/defaultValues/defaultFaction";
import {defaultUnitCounts} from "../../data/defaultValues/defaultUnitCounts";
import {defaultUnitPriorities} from "../../data/defaultValues/defaultUnitPriorities";
import {CombatResults} from "../../data/interfaces/CombatResults";
import {SimpleCombatPercentages} from "../../data/interfaces/SimpleCombatPercentages";
import {defaultCombatPercentages} from "../../data/defaultValues/defaultCombatPercentages";

function BattleCalculator() {

  let [attackerFaction, setAttackerFaction] = useState<PlasticFaction>(defaultFaction);
  let [defenderFaction, setDefenderFaction] = useState<PlasticFaction>(defaultFaction);
  let [attackerUnits, setAttackerUnits] = useState<PlasticUnit[]>([]);
  let [defenderUnits, setDefenderUnits] = useState<PlasticUnit[]>([]);
  let [resolveCombat, setResolveCombat] = useState<boolean>(false);
  let [attackerUnitCounts, setAttackerUnitCounts] = useState<PlasticUnitCount[]>(defaultUnitCounts)
  let [defenderUnitCounts, setDefenderUnitCounts] = useState<PlasticUnitCount[]>(defaultUnitCounts)
  let [attackerUnitPriorities, setAttackerUnitPriorities] = useState<PlasticUnitPriority[]>(defaultUnitPriorities)
  let [defenderUnitPriorities, setDefenderUnitPriorities] = useState<PlasticUnitPriority[]>(defaultUnitPriorities)
  let [graphData, setGraphData] = useState<SimpleCombatPercentages>(defaultCombatPercentages);
  useEffect(() => {
    setAttackerUnits(plasticUnitsArrById(attackerFaction.id) || attackerUnits);
    setResolveCombat(!resolveCombat);
    }, [attackerFaction])
  useEffect(() => {
    setDefenderUnits(plasticUnitsArrById(defenderFaction.id) || defenderUnits);
    setResolveCombat(!resolveCombat);
    }, [defenderFaction])
  useEffect(() => {
    //TODO Create:
    // TODO -- an interface for combat results == 1st version ready!
    // TODO -- a function for calculating combat results == started
    let combatPercentages: SimpleCombatPercentages = calculateMultipleBattles(
      100,
      attackerFaction,
      defenderFaction,
      attackerUnits,
      defenderUnits,
      attackerUnitCounts,
      defenderUnitCounts,
      attackerUnitPriorities,
      defenderUnitPriorities,
    );
    setGraphData(combatPercentages)
    // TODO -- call the function here and store the results to a state
    // TODO -- use a boolean in a state flip whenever a combat is supposed to be calculated
  }, [resolveCombat]);

  return (
    <Container>
      <Typography>
        App is started
      </Typography>
      <BarChart
        xAxis={[{ scaleType: 'band', data: graphData.graphLables }]}
        series={[{ data: graphData.graphValues }, ]}
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
                      value={attackerFaction.id}
                      label="faction"
                      defaultValue={attackerFaction.id}
                      onChange={(event) => setAttackerFaction(handleFactionChange(event) || attackerFaction)}
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
                      value={defenderFaction.id}
                      label="faction"
                      defaultValue={defenderFaction.id}
                      onChange={(event) => setDefenderFaction(handleFactionChange(event) || defenderFaction)}
                  >
                    {plasticFactions.map((faction, index) =>
                        <MenuItem value={faction.id}>{faction.name}</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
            {attackerUnits.map((allyUnit, index) =>
              <Grid item xs={2}
                spacing={2}
              >
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" size="small" onClick={() => {
                      setAttackerUnitCounts(decreaseUnitCount(allyUnit, index, attackerUnitCounts) || attackerUnitCounts)
                      setResolveCombat(!resolveCombat)
                    }}>-</Button>
                    <Button variant="contained" size="small" onClick={() => {
                      setAttackerUnitCounts(increaseUnitCount(allyUnit, index, attackerUnitCounts) || attackerUnitCounts)
                      setResolveCombat(!resolveCombat)
                    }}>+</Button>
                  </Stack>
                  <TextField
                      label={allyUnit ? allyUnit.name.normal : "name"}
                      InputProps={{
                        readOnly: true,
                      }}
                      defaultValue={
                    attackerUnitCounts.find((item) =>
                      allyUnit.type === item.unitType
                    )?.unitCount
                  }
                      value={attackerUnitCounts.find((item) =>
                        allyUnit.type === item.unitType
                      )?.unitCount}
                  />
                  <TextField
                      label={defenderUnits[index] ? defenderUnits[index].name.normal : "name"}
                      InputProps={{
                        readOnly: true,
                      }}
                      defaultValue={
                        defenderUnitCounts.find((item) =>
                          defenderUnits[index]?.type === item.unitType
                        )?.unitCount
                      }
                      value={defenderUnitCounts.find((item) =>
                        defenderUnits[index]?.type === item.unitType
                      )?.unitCount
                  }
                  />
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" size="small" onClick={() => {
                      setDefenderUnitCounts(decreaseUnitCountByIndex(index, defenderUnitCounts, defenderUnits) || defenderUnitCounts)
                      setResolveCombat(!resolveCombat)
                    }}>-</Button>
                    <Button variant="contained" size="small" onClick={() => {
                      setDefenderUnitCounts(increaseUnitCountByIndex(index, defenderUnitCounts, defenderUnits) || defenderUnitCounts)
                      setResolveCombat(!resolveCombat);
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
