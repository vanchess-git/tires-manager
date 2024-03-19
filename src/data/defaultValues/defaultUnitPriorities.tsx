import {PlasticUnitPriority} from "../interfaces/PlasticUnitPriority";

/** unitType is used to compare against similar typings in other interfaces
 * unitPriority is the value of a unit with higher number being more valuable unit
 * */

export const defaultUnitPriorities: PlasticUnitPriority[] = [
    {unitType: "war_sun", unitPriority: 8,},
    {unitType: "cruiser", unitPriority: 3,},
    {unitType: "dreadnought", unitPriority: 5,},
    {unitType: "destroyer", unitPriority: 2,},
    {unitType: "pds", unitPriority: 9,},
    {unitType: "carrier", unitPriority: 7,},
    {unitType: "fighter", unitPriority: 0,},
    {unitType: "infantry", unitPriority: 1,},
    {unitType: "space_dock", unitPriority: 10,},
    {unitType: "flagship", unitPriority: 6,},
    {unitType: "mech", unitPriority: 4,},
];
