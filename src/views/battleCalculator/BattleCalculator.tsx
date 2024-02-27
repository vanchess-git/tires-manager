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

function BattleCalculator() {

  let [alliedFaction, setAlliedFaction] = useState<PlasticFaction>(
    {
      id: "faction_arborec",
      name: "Arborec"
    });
  let [hostileFaction, setHostileFaction] = useState<PlasticFaction>({
    id: "faction_federation_of_sol",
    name: "Federation of Sol"
  });
  let [alliedUnits, setAlliedUnits] = useState<PlasticUnit[]>([]);
  let [hostileUnits, setHostileUnits] = useState<PlasticUnit[]>([]);

  useEffect(() => {
    let allyArray: PlasticUnit[] = plasticUnits.filter((item): item is PlasticUnit => {
      return (
          typeof item === "object" &&
              item !== null &&
              !Array.isArray(item) &&
              "factions" in item &&
              Array.isArray(item.factions) &&
              item.factions.includes(alliedFaction.id)
      )
    })
    console.log("th LOG", allyArray)
    setAlliedUnits(allyArray);

    let hostileArray: PlasticUnit[] = plasticUnits.filter((item): item is PlasticUnit => {
      return (
        typeof item === "object" &&
        item !== null &&
        !Array.isArray(item) &&
        "factions" in item &&
        Array.isArray(item.factions) &&
        item.factions.includes(hostileFaction.id)
      )
    })
    console.log("th LOG", hostileArray)
    setHostileUnits(hostileArray);

  }, [])

  const factionNames = [
    'Arborec',
    'Barony of Letnev',
    'Clan of Saar',
    'Embers of Muaat',
    'Emirates of Hacan',
    'Federation of Sol',
    'Ghosts of Creuss',
    'L1Z1X Mindnet',
    'Mentak Coalition',
    'Naalu Collective',
    'Nekro Virus',
    `Sardakk N'orr`,
    'Universities of Jol-Nar',
    'Winnu',
    'Xxcha Kingdom',
    'Yin Brotherhood',
    'Yssaril Tribes',
    'Argent Flight',
    'Empyrean',
    'Mahact Gene-Sorcerers',
    'Naaz-Rokha Alliance',
    'Nomad',
    'Titans of Ul',
    `Vuil'Raith Cabal`,
    'Council Keleres',
  ]

  return (
    <Container>
      <Typography>
        App is started
      </Typography>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Turn 1', 'Turn 2', 'Turn 3', 'Turn 4', 'Turn 5'] }]}
        series={[{ data: [20, 36, 48.8, 59.04, 67.23] }, { data: [20, 36, 48.8, 59.04, 67.23] }]}
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
                      label="faction"
                      defaultValue={alliedFaction.id}
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
                      label="faction"
                      defaultValue={hostileFaction.id}
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
                    <Button variant="contained" size="small">-</Button>
                    <Button variant="contained" size="small">+</Button>
                  </Stack>
                  <TextField
                      label={allyUnit ? allyUnit.name.normal : "name"}
                      InputProps={{
                        readOnly: true,
                      }}
                      defaultValue={0}
                  />
                  <TextField
                      label={hostileUnits[index] ? hostileUnits[index].name.normal : "name"}
                      InputProps={{
                        readOnly: true,
                      }}
                      defaultValue={0}
                  />
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" size="small">-</Button>
                    <Button variant="contained" size="small">+</Button>
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
