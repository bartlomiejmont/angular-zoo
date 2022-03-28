import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// zooService służy nam do komunikacji z api za pomocą prokokołu HTTP 
export class ZooService {

  constructor(private http: HttpClient) { }

  getRandomAnimals(amount:number = 1): Observable<AnimalResponse[]>{
    return this.http.get<AnimalResponse[]>(`https://zoo-animal-api.herokuapp.com/animals/rand/${amount}`);
  }

  getRandomAnimal(): Observable<AnimalResponse>{
    return this.http.get<AnimalResponse>('https://zoo-animal-api.herokuapp.com/animals/rand');
  }

}

// Typ jakiego spodziewamy się z api którego korzystamy
export interface AnimalResponse {
  name: string; // +
  latin_name: string;
  animal_type: string;
  active_time: string;
  length_min: number;
  length_max: number;
  weight_min: number;
  weight_max: number;
  lifespan: number; // +
  habitat: string; // +
  diet: string; // +
  geo_range: string;
  image_link: string;
  id: number;
}
