import { Component, Input, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { AnimalResponse } from '../zoo.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  @Input()
  animal!: AnimalResponse;

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
  }

  addToFavorite(animal:AnimalResponse){
    this.favoriteService.addFavoriteAnimal(animal);
    console.log(this.favoriteService.getFavoriteAnimals());
  }

}
