import { readFileSync } from 'fs';
import _ from 'lodash';

 export function all() {
    const wards = readFileSync('./entities/wards.json');
    const kata = JSON.parse(wards);
    return kata
  }
  export function id(id) {
    const wards = readFileSync('./entities/wards.json');
    const kata = JSON.parse(wards);
    return _.filter(kata, ["region_id",id]).map(v => ({id:v.id,name:v.name}));
  }
  export function name(name) {
    const wards = readFileSync('./entities/wards.json');
    const kata = JSON.parse(wards);
    return _.filter(kata, ["name",name]).map(v => ({id:v.id,name:v.name}));
  }
