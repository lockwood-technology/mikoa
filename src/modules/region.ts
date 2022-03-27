import * as _ from 'lodash';
const regions =[{"id":"1","name":"ARUSHA"},{"id":"2","name":"DAR ES SALAAM"},{"id":"3","name":"DODOMA"},{"id":"4","name":"GEITA"},{"id":"5","name":"IRINGA"},{"id":"6","name":"KAGERA"},{"id":"7","name":"KASKAZINI PEMBA"},{"id":"8","name":"KASKAZINI UNGUJA"},{"id":"9","name":"KATAVI"},{"id":"10","name":"KIGOMA"},{"id":"11","name":"KILIMANJARO"},{"id":"12","name":"KUSINI PEMBA"},{"id":"13","name":"KUSINI UNGUJA"},{"id":"14","name":"LINDI"},{"id":"15","name":"MAGHARIBI"},{"id":"16","name":"MANYARA"},{"id":"17","name":"MARA"},{"id":"18","name":"MBEYA"},{"id":"19","name":"MJINI"},{"id":"20","name":"MOROGORO"},{"id":"21","name":"MTWARA"},{"id":"22","name":"MWANZA"},{"id":"23","name":"NJOMBE"},{"id":"24","name":"PWANI"},{"id":"25","name":"RUKWA"},{"id":"26","name":"RUVUMA"},{"id":"27","name":"SHINYANGA"},{"id":"28","name":"SIMIYU"},{"id":"29","name":"SINGIDA"},{"id":"30","name":"SONGWE"},{"id":"31","name":"TABORA"},{"id":"32","name":"TANGA"}]

/**
 * Get all regions 
 */
 export const all= () =>{   
   
    return regions
  }

  /**
   * Get region by id
   */
   export const id= (id: number)=> {
    const region_id=id.toString()
    return _.find(regions, ["id",region_id]);
  }
 
