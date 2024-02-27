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

function BattleCalculator() {

  let [alliedFaction, setAlliedFaction] = useState<string>("faction_arborec");
  let [hostileFaction, setHostileFaction] = useState<string>("faction_arborec");
  let [alliedUnits, setAlliedUnits] = useState<PlasticUnit[]>(
    [

    ]
  );
  let [hostileUnits, setHostileUnits] = useState<PlasticUnit[]>([]);

  useEffect(() => {
    let allyArray: PlasticUnit[] = plasticUnits.filter((item): item is PlasticUnit => {
      return (
          typeof item === "object" &&
              item !== null &&
              !Array.isArray(item) &&
              "factions" in item &&
              Array.isArray(item.factions) &&
              item.factions.includes("arborec")
      )
    })
    setAlliedUnits(allyArray);
  }, [])

  const plasticUnitsOld = [
    'flagship',
    'warsun',
    'dreadnought',
    'carrier',
    'cruiser',
    'destroyer',
    'fighter',
    'mech',
    'infantry',
    'pds',
  ]

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
                  <InputLabel id="1st-player-faction">Faction</InputLabel>
                  <Select
                      labelId="1st-player-faction"
                      label="faction"
                  >
                    {factionNames.map((faction, index) =>
                        <MenuItem value={faction}>{faction}</MenuItem>
                    )}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="2nd-player-faction">Faction</InputLabel>
                  <Select
                      labelId="2nd-player-faction"
                      label="faction"
                  >
                    {factionNames.map((faction, index) =>
                        <MenuItem value={faction}>{faction}</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
            {plasticUnits.map((ship, index) =>
              <Grid item xs={2}
                spacing={2}
              >
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" size="small">-</Button>
                    <Button variant="contained" size="small">+</Button>
                  </Stack>
                  <TextField
                      label={ship ? ship.name.normal : "name"}
                      InputProps={{
                        readOnly: true,
                      }}
                      defaultValue={0}
                  />
                  <TextField
                      label={ship ? ship.name.normal : "name"}
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
