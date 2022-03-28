import { Component, OnInit } from '@angular/core';
import { AnimalResponse, ZooService } from '../zoo.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals!: AnimalResponse[];

  constructor(private zooService: ZooService) { }

  ngOnInit(): void {
    this.zooService.getRandomAnimals(10).subscribe(a => this.animals = a);
  }

}
