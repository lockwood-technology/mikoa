
### Installing

A step by step series of how to install the package.


```
npm i mikoa
```

OR

```
yarn add mikoa
```

## 🎈 Usage <a name="usage"></a>

How to import

```
import { region,district,wards } from 'mikoa'

//get all regions
const regions = mikoa.region.all()
console.log('All regions', {regions})

```
OR

```
import * as mikoa from 'mikoa'

//get all regions
const regions = mikoa.region.all()
console.log('All regions', {regions})
```

Get all regions

```
import { region,district,wards } from 'mikoa'

const regions =region.all()
console.log('All regions', {regions})

```
Output

```
[
  { id: '1', name: 'ARUSHA' },
  { id: '2', name: 'DAR ES SALAAM' },
  { id: '3', name: 'DODOMA' },
  { id: '4', name: 'GEITA' },
  { id: '5', name: 'IRINGA' },
  { id: '6', name: 'KAGERA' },
  { id: '7', name: 'KASKAZINI PEMBA' },
  { id: '8', name: 'KASKAZINI UNGUJA' },
  { id: '9', name: 'KATAVI' },
  { id: '10', name: 'KIGOMA' },
  { id: '11', name: 'KILIMANJARO' },
  { id: '12', name: 'KUSINI PEMBA' },
  { id: '13', name: 'KUSINI UNGUJA' },
  { id: '14', name: 'LINDI' },
  { id: '15', name: 'MAGHARIBI' },
  { id: '16', name: 'MANYARA' },
  { id: '17', name: 'MARA' },
  { id: '18', name: 'MBEYA' },
  { id: '19', name: 'MJINI' },
  { id: '20', name: 'MOROGORO' },
  { id: '21', name: 'MTWARA' },
  { id: '22', name: 'MWANZA' },
  { id: '23', name: 'NJOMBE' },
  { id: '24', name: 'PWANI' },
  { id: '25', name: 'RUKWA' },
  { id: '26', name: 'RUVUMA' },
  { id: '27', name: 'SHINYANGA' },
  { id: '28', name: 'SIMIYU' },
  { id: '29', name: 'SINGIDA' },
  { id: '30', name: 'SONGWE' },
  { id: '31', name: 'TABORA' },
  { id: '32', name: 'TANGA' }
]

```

Get Single Region
````
const single_region =region.id(2)
console.log('All regions', {single_region})

````

Output

```
All regions
{ id: '2', name: 'DAR ES SALAAM' },
```

How to get district

```
import { district } from 'mikoa'

const districts =district.region_id(17)
console.log('District by region', {districts})

```
Output

```
District by region
 [
    { id: '81', name: 'BUNDA' },
    { id: '82', name: 'BUTIAMA' },
    { id: '83', name: 'MUSOMA' },
    { id: '84', name: 'MUSOMA CBD' },
    { id: '85', name: 'RORYA' },
    { id: '86', name: 'SERENGETI' },
    { id: '87', name: 'TARIME' }
  ]
```

## 🚀 Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>

- [JSON]() - Database
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@mwkatumbula](https://github.com/mwakatumbula) - Back-end Dev
- [@hkadyanji](https://github.com/hkadyanji) - project Manager

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration

- References