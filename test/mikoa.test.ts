import { region,district,ward } from '../src';

//Region Test
describe('Get Regions', () => {
  it('all region test', () => {
    expect(region.all()).toEqual(
      expect.arrayContaining([{"id":"1","name":"ARUSHA"}])
    );
  });
});
describe('Get Single Region', () => {
  it('single regions test', () => {
    expect(region.id("5")).toEqual({"id": "5", "name": "IRINGA"});
  });

});describe('Get Single Region by name', () => {
  it('single regions by name test', () => {
    expect(region.name("MWANZA")).toEqual({"id": "22", "name": "MWANZA"});
  });
});

//District Test
describe('Get Districts', () => {
  it('all districts test', () => {
    expect(district.all()).toEqual(
      expect.arrayContaining([{"id":"33","name":"BUKOBA","region_id":"6"}])
    );
  });
});
describe('Get Single Districts', () => {
  it('single districts works', () => {
    expect(district.id("71")).toEqual({"id":"71","name":"NACHINGWEA ","region_id":"14"});
  });
});
describe('Get Single Districts by name', () => {
  it('single district by name works', () => {
    expect(district.name("LIWALE")).toEqual({"id":"70","name":"LIWALE","region_id":"14"});
  });
});
describe('Get Single Districts by region', () => {
  it('single district by region works', () => {
    expect(district.region("8")).toEqual( expect.arrayContaining([{"id": "40", "name": "MICHEWENI"}]));
  });
});

//Ward Test
describe('Get Ward', () => {
  it('all wards test', () => {
    expect(ward.all()).toEqual(
      expect.arrayContaining([{"id":"3889","name":"Kwedizinga","district_id":"169"}])
    );
  });
});

describe('Get Single Ward', () => {
  it('single wards works', () => {
    expect(ward.id("3787")).toEqual({"id":"3787","name":"Tongi","district_id":"164"});
  });
});

describe('Get Single Ward by name', () => {
  it('single wards by name works', () => {
    expect(ward.name("Mwakashanhala")).toEqual({"id":"3775","name":"Mwakashanhala","district_id":"164"});
  });
});
describe('Get Single Ward by district', () => {
  it('single wards by district works', () => {
    expect(ward.district("163")).toEqual( expect.arrayContaining([{"id": "3725", "name": "Ichemba"}]));
  });
});
