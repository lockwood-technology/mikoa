import { readFileSync } from 'fs';
import _ from 'lodash';
import { fileURLToPath } from 'url'
import * as path from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fileName =path.join(__dirname,`../entities/regions.json`)
 export function all() {   
    const region = readFileSync(fileName);
    let mikoa = JSON.parse(region);
    return mikoa
  }
  export function id(id) {
    const region = readFileSync(fileName);
    let mikoa = JSON.parse(region);
    return _.find(mikoa, ["id",id]);
  }
