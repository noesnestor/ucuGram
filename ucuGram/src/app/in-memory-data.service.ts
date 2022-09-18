import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      { id: 'pepe_garcia1', name: 'Pepe García', country: 'Morocco', state: 'TA', city: 'Tanger', email: 'pepe_garcia1@gmail.com', password: 'eselpepe', profilePic: 'https://images.squarespace-cdn.com/content/v1/5b7e685d8ab722146afd7529/1564600902218-403CMIW9V4G2UC13A25W/PP_01.jpg' },
      { id: 'jacksonjane4ever', name: 'Jane Jackson', country: 'USA', state: 'LA', city: 'New Orleans', email: 'jackson_jane@outlook.com', password: 'thisisNOTapass', profilePic: '../assets/users/user2.jpg' },
      { id: 'kroosfriend15', name: 'Federico Valverde', country: 'Spain', state: 'MA', city: 'Madrid',  email: 'fedevalverde@gmail.com',password: 'ILoveRealMadrid', profilePic: '../assets/users/user5.jpg' },
      { id: 'dasilva_lukinhas', name: 'Lucas Da Silva', country: 'Brazil', state: 'RJ', city: 'Río de Janeiro', email: 'lucasthedragão@hotmail.com', password: 'eusuincrivel1234', profilePic: '' },
  ];
  const posts : Post[] =[
    { id: 1, src: "../assets/users/user4.jpg", date: "", user_id: "pepe_garcia1", alt: ""},
    { id: 2, src: "../assets/users/user2.jpg", date: "", user_id: "jacksonjane4ever", alt: ""},
    { id: 3, src: "../assets/users/user5.jpg", date: "", user_id: "kroosfriend15", alt: ""},
    { id: 4, src: "../assets/users/user3.jpg", date: "", user_id: "dasilva_lukinhas", alt: ""}
  ]
    return {users, posts};
  }
}

