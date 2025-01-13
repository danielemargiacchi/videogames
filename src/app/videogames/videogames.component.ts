import { Component, inject } from '@angular/core';
import { VideogamesService } from './videogames.service';
import { Videogame } from './videogame/videogame.model';
import { VideogameComponent } from "./videogame/videogame.component";
import { PrenotaComponent } from './prenota/prenota.component';

@Component({
  selector: 'app-videogames',
  standalone: true,
  imports: [VideogameComponent, PrenotaComponent],
  templateUrl: './videogames.component.html',
  styleUrl: './videogames.component.css'
})
export class VideogamesComponent {
  videogamesService = inject(VideogamesService);

  isSelectedVideogame: boolean = false;
  selectedVideogame!: number;

  get allVideogames(){
    return this.videogamesService.videogames;
  }

  

  onPrenotaVideogame(id: number){
    console.log(`cliccato id ${id}`);
    this.isSelectedVideogame = true;
    this.selectedVideogame = id;
  }

  onClosedVideogame(){
    this.isSelectedVideogame = false;
  }
}
