import {BarChart} from "@mui/x-charts/BarChart";
import React from "react";
import {Box, Card, Container, FormControl, InputLabel, Select, Stack, TextField, Typography} from "@mui/material";

function BattleCalculator() {

  const plasticUnits = [
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
          <Stack direction="row" spacing={2}>
            <Stack
              spacing={2}
            >
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="faction"
              ></Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="faction"
                ></Select>
              </FormControl>
            </Stack>
            {plasticUnits.map(ship =>
              <Stack
                spacing={2}
              >
                <TextField
                  label={ship}
                  InputProps={{
                    readOnly: true,
                  }}
                  defaultValue={0}
                />
                <TextField
                  label={ship}
                  InputProps={{
                    readOnly: true,
                  }}
                  defaultValue={0}
                />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Card>
    </Container>
  )
}

export default BattleCalculator;