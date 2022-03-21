import { readFileSync } from 'fs';
import _ from 'lodash';
import { fileURLToPath } from 'url'
import * as path from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//Get all district from the json file
const fileName =path.join(__dirname,`../entities/districts.json`)

/**
 * Get all district
 * @returns 
 */
 export function all() {
    const districts = readFileSync(fileName);
    const wilaya = JSON.parse(districts);
    return wilaya
  }

  /**
   * Get district by id
   * @param {*} id 
   * @returns 
   */
  export function id(id) {
    const districts = readFileSync(fileName);
    const wilaya = JSON.parse(districts);
    const district_id =id.toString()
    return _.filter(wilaya, ["id",district_id]).map(v => ({id:v.id,name:v.name}));
  }

  /**
   * Get districts by region id
   * @param {*} id 
   * @returns 
   */
  export function region_id(id) {
    const districts = readFileSync(fileName);
    const wilaya = JSON.parse(districts);
    const region_id =id.toString()
    return _.filter(wilaya, ["region_id",region_id]).map(v => ({id:v.id,name:v.name}));
  }

  /**
   * Get district by name
   * @param {*} name 
   * @returns 
   */
  export function name(name) {
    const districts = readFileSync(fileName);
    const wilaya = JSON.parse(districts);
    return _.filter(wilaya, ["name",name]).map(v => ({id:v.id,name:v.name}));
  }
