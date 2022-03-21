import { readFileSync } from 'fs';
import _ from 'lodash';
import { fileURLToPath } from 'url'
import * as path from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fileName =path.join(__dirname,`../entities/regions.json`)

 export function all() {
    const districts = readFileSync(fileName);
    const wilaya = JSON.parse(districts);
    return wilaya
  }
  export function id(id) {
    const districts = readFileSync(fileName);
    const wilaya = JSON.parse(districts);
    return _.filter(wilaya, ["region_id",id]).map(v => ({id:v.id,name:v.name}));
  }
  export function name(name) {
    const districts = readFileSync(fileName);
    const wilaya = JSON.parse(districts);
    return _.filter(wilaya, ["name",name]).map(v => ({id:v.id,name:v.name}));
  }
