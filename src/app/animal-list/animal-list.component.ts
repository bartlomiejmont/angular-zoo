// component do wyświetlania wielu zwierząt na stronie
// rodzic componentu animal, to on przekazuje mu informacje o konkretnym zwiwierzaku
import { Component, OnInit } from '@angular/core';
import { AnimalResponse, ZooService } from '../zoo.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  // to pobieramy przy tworzeniu komponentu z api
  animals!: AnimalResponse[];

  constructor(private zooService: ZooService) { }

  ngOnInit(): void {
    // tutaj musimy zasubskrybować poniewaz metoda zwraca nam typ Observable
    this.zooService.getRandomAnimals(10).subscribe(a => this.animals = a);
  }

}
