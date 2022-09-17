import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      { userid: 'pepe_garcia1', name: 'Pepe García', country: 'Morocco', state: 'TA', city: 'Tanger', email: 'pepe_garcia1@gmail.com', password: 'eselpepe', profilePic: 'https://images.squarespace-cdn.com/content/v1/5b7e685d8ab722146afd7529/1564600902218-403CMIW9V4G2UC13A25W/PP_01.jpg' },
      { userid: 'jacksonjane4ever', name: 'Jane Jackson', country: 'USA', state: 'LA', city: 'New Orleans', email: 'jackson_jane@outlook.com', password: 'thisisNOTapass', profilePic: '' },
      { userid: 'kroosfriend15', name: 'Federico Valverde', country: 'Spain', state: 'MA', city: 'Madrid',  email: 'fedevalverde@gmail.com',password: 'ILoveRealMadrid', profilePic: '' },
      { userid: 'dasilva_lukinhas', name: 'Lucas Da Silva', country: 'Brazil', state: 'RJ', city: 'Río de Janeiro', email: 'lucasthedragão@hotmail.com', password: 'eusuincrivel1234', profilePic: '' },
  ];
    return {users};
  }
}