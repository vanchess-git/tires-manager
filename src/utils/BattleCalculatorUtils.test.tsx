import {percentagesByResultType} from './BattleCalculatorUtils';
import {CombatResults} from "../data/interfaces/CombatResults";
import {SimpleCombatPercentages} from "../data/interfaces/SimpleCombatPercentages";
import {PlasticUnitCount} from "../data/interfaces/PlasticUnitCount";
import {defaultUnitCounts} from "../data/defaultValues/defaultUnitCounts";

describe('percentagesByResultType function', ()  => {
  it('turns CombatResults[] into SimpleCombatPercentages', () => {
    const input: CombatResults[] = [
      {
        resultType: "attacker_win",     // attacker_win, defender_win or draw
        factions: {
          attacker: "Arborec",
          defender: "Arborec",
        },
        unitCounts: {
          attacker: [
            {unitType: "war_sun", unitCount: 0,},
            {unitType: "cruiser", unitCount: 1,},
            {unitType: "dreadnought", unitCount: 0,},
            {unitType: "destroyer", unitCount: 0,},
            {unitType: "pds", unitCount: 0,},
            {unitType: "carrier", unitCount: 0,},
            {unitType: "fighter", unitCount: 0,},
            {unitType: "infantry", unitCount: 0,},
            {unitType: "space_dock", unitCount: 0,},
            {unitType: "flagship", unitCount: 0,},
            {unitType: "mech", unitCount: 0,},
          ],
          defender: defaultUnitCounts,
        }
      },
    ];

    const expected: SimpleCombatPercentages = {
      graphLables: ["attacker", "draw", "defender"],
      graphValues: [100, 0, 0],
      };

    const result = percentagesByResultType(input);

    expect(result).toStrictEqual(expected);
  })
})