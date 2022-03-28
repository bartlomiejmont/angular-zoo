import { Injectable } from '@angular/core';
import { AnimalResponse } from './zoo.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favoriteAnimals: AnimalResponse[] = [];

  constructor() { }

  getFavoriteAnimals(){
    const animals = JSON.parse(localStorage.getItem("animals")|| "[]")  as unknown as AnimalResponse[];
    return animals;
  }

  addFavoriteAnimal(animal: AnimalResponse){
    const animals = JSON.parse(localStorage.getItem("animals")|| "[]")  as unknown as AnimalResponse[];
    this.favoriteAnimals = [...animals, animal]
    localStorage.setItem('animals', JSON.stringify(this.favoriteAnimals));
  }

}
