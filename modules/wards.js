import { readFileSync } from 'fs';
import _ from 'lodash';
import { fileURLToPath } from 'url'
import * as path from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fileName =path.join(__dirname,`../entities/wards.json`)
 export function all() {
    const wards = readFileSync(fileName);
    const kata = JSON.parse(wards);
    return kata
  }
  export function id(id) {
    const wards = readFileSync(fileName);
    const kata = JSON.parse(wards);
    return _.filter(kata, ["region_id",id]).map(v => ({id:v.id,name:v.name}));
  }
  export function name(name) {
    const wards = readFileSync(fileName);
    const kata = JSON.parse(wards);
    return _.filter(kata, ["name",name]).map(v => ({id:v.id,name:v.name}));
  }
