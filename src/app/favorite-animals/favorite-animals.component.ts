import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { AnimalResponse } from '../zoo.service';

@Component({
  selector: 'app-favorite-animals',
  templateUrl: './favorite-animals.component.html',
  styleUrls: ['./favorite-animals.component.css']
})
export class FavoriteAnimalsComponent implements OnInit {

  favoriteAnimals!: AnimalResponse[];

  constructor(private favoriteService: FavoriteService) {
    this.favoriteAnimals = [];
  }

  ngOnInit(): void {
  }

  refreshFavorites(){
    this.favoriteAnimals = this.favoriteService.getFavoriteAnimals();
  }

}
