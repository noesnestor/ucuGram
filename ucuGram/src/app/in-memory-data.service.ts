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
      { id: 'dasilva_lukinhas', name: 'Lucas Da Silva', country: 'Brazil', state: 'RJ', city: 'Río de Janeiro', email: 'lucasthedragão@hotmail.com', password: 'eusuincrivel1234', profilePic: '../assets/users/user6.jpg' },
  ];
  const posts : Post[] =[
    { id: 1, src: "assets/dogs/dog1.jpg", date: "", user_id: "pepe_garcia1", alt: "dogs"},
    { id: 2, src: "assets/dogs/dog2.jpg", date: "", user_id: "jacksonjane4ever", alt: "dogs"},
    { id: 3, src: "assets/dogs/dog3.jpg", date: "", user_id: "kroosfriend15", alt: "dogs"},
    { id: 4, src: "assets/dogs/dog4.jpg", date: "", user_id: "dasilva_lukinhas", alt: "dogs"},
    { id: 5, src: "assets/dogs/dog5.jpg", date: "", user_id: "pepe_garcia1", alt: "dogs"},
    { id: 6, src: "assets/dogs/dog6.jpg", date: "", user_id: "jacksonjane4ever", alt: "dogs"},
    { id: 7, src: "assets/dogs/dog7.jpg", date: "", user_id: "kroosfriend15", alt: "dogs"},
    { id: 8, src: "assets/cats/cat1.jpg", date: "", user_id: "dasilva_lukinhas", alt: "cats"},
    { id: 9, src: "assets/cats/cat2.jpg", date: "", user_id: "pepe_garcia1", alt: "cats"},
    { id: 10, src: "assets/cats/cat3.jpg", date: "", user_id: "jacksonjane4ever", alt: "cats"},
    { id: 11, src: "assets/cats/cat4.jpg", date: "", user_id: "kroosfriend15", alt: "cats"},
    { id: 12, src: "assets/cats/cat5.jpg", date: "", user_id: "dasilva_lukinhas", alt: "cats"},
    { id: 13, src: "assets/cats/cat6.jpg", date: "", user_id: "pepe_garcia1", alt: "cats"},
    { id: 14, src: "assets/cats/cat7.jpg", date: "", user_id: "jacksonjane4ever", alt: "cats"},
    { id: 15, src: "assets/fishes/fish1.jpg", date: "", user_id: "kroosfriend15", alt: "fishes"},
    { id: 16, src: "assets/fishes/fish2.jpg", date: "", user_id: "dasilva_lukinhas", alt: "fishes"},
    { id: 17, src: "assets/fishes/fish3.jpg", date: "", user_id: "pepe_garcia1", alt: "fishes"},
    { id: 18, src: "assets/fishes/fish4.jpg", date: "", user_id: "jacksonjane4ever", alt: "fishes"},
    { id: 19, src: "assets/fishes/fish5.jpg", date: "", user_id: "kroosfriend15", alt: "fishes"},
    { id: 20, src: "assets/fishes/fish6.jpg", date: "", user_id: "dasilva_lukinhas", alt: "fishes"},
    { id: 21, src: "assets/fishes/fish7.jpg", date: "", user_id: "pepe_garcia1", alt: "fishes"},
    { id: 22, src: "assets/postValverde.jpg", date: "", user_id: "kroosfriend15", alt: "soccer"}
  ]
    return {users, posts};
  }
}

