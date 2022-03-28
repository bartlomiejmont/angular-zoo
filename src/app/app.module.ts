// główny moduł aplikacji znajduje się w nim informacja i powiązania ze wszystkimi elementami aplikacji 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalComponent } from './animal/animal.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { FavoriteAnimalsComponent } from './favorite-animals/favorite-animals.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    AnimalListComponent,
    FavoriteAnimalsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: AnimalListComponent},
      {path: 'favorite', component: FavoriteAnimalsComponent},
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
