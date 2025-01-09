import { Injectable } from '@angular/core';
import { Videogame } from './videogame/videogame.model';
import { VIDEOGAMES_LIST } from './VIDEOGAMES';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  constructor() { }

  videogames: Videogame[] = VIDEOGAMES_LIST;


  get allVideogames(){
    return this.videogames;
  }


  getVideogameById(id: number){
    return this.videogames.filter(game => game.id === id).pop();
  }

}
