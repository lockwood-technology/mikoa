import { readFileSync } from 'fs';
import _ from 'lodash';

 export function all() {
    const districts = readFileSync('./entities/districts.json');
    const wilaya = JSON.parse(districts);
    return wilaya
  }
  export function id(id) {
    const districts = readFileSync('./entities/districts.json');
    const wilaya = JSON.parse(districts);
    return _.filter(wilaya, ["region_id",id]).map(v => ({id:v.id,name:v.name}));
  }
  export function name(name) {
    const districts = readFileSync('./entities/districts.json');
    const wilaya = JSON.parse(districts);
    return _.filter(wilaya, ["name",name]).map(v => ({id:v.id,name:v.name}));
  }
