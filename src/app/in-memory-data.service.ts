import {InMemoryDbService} from 'angular-in-memory-web-api';

// The in-memory web API is only useful in the early stages of development and for 
// demonstrations such as this Tour of Heroes. Don't worry about the details of
// this backend substitution; you can skip it when you have a real web API server.

export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    return {heroes};
  }
}
