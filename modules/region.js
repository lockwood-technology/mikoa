import { readFileSync } from 'fs';
import _ from 'lodash';

 export function all() {
    const region = readFileSync('./entities/regions.json');
    let mikoa = JSON.parse(region);
    return mikoa
  }
  export function id(id) {
    const region = readFileSync('./entities/regions.json');
    let mikoa = JSON.parse(region);
    return _.find(mikoa, ["id",id]);
  }
