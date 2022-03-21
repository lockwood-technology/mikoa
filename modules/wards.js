import { readFileSync } from 'fs';
import _ from 'lodash';
import { fileURLToPath } from 'url'
import * as path from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//Get all ward from the json file
const fileName =path.join(__dirname,`../entities/wards.json`)
 
/**
 * Get aal wards 
 * @returns 
 */
export function all() {
    const wards = readFileSync(fileName);
    const kata = JSON.parse(wards);
    return kata
  }
  /**
   * get ward by id
   * @param {*} id 
   * @returns 
   */
  export function id(id) {
    const wards = readFileSync(fileName);
    const kata = JSON.parse(wards);
    return _.filter(kata, ["id",id]).map(v => ({id:v.id,name:v.name}));
  } 

  /**
   * Get wards by district id
   * @param {*} id 
   * @returns 
   */
  export function district_id(id) {
    const wards = readFileSync(fileName);
    const kata = JSON.parse(wards);
    const district_id =id.toString()
    return _.filter(kata, ["district_id",district_id]).map(v => ({id:v.id,name:v.name}));
  }

  /**
   * Get ward by name
   * @param {*} name 
   * @returns 
   */
  export function name(name) {
    const wards = readFileSync(fileName);
    const kata = JSON.parse(wards);
    return _.filter(kata, ["name",name]).map(v => ({id:v.id,name:v.name}));
  }
