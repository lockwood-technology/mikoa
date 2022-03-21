import { readFileSync } from 'fs';
import _ from 'lodash';
import { fileURLToPath } from 'url'
import * as path from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//Get all regions from the json file
const fileName =path.join(__dirname,`../entities/regions.json`)

/**
 * Get all regions 
 * @returns 
 */
 export function all() {   
    const region = readFileSync(fileName);
    let mikoa = JSON.parse(region);
    return mikoa
  }

  /**
   * Get region by id
   * @param {*} id 
   * @returns 
   */
  export function id(id) {
    const region = readFileSync(fileName);
    let mikoa = JSON.parse(region);
    const region_id=id.tostring()
    return _.find(mikoa, ["id",region_id]);
  }
