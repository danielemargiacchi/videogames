import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Videogame } from './videogame.model';
import { VideogamesService } from '../videogames.service';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-videogame',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './videogame.component.html',
  styleUrl: './videogame.component.css'
})
export class VideogameComponent {

  videogamesService = inject(VideogamesService);
  @Input() videogameId !: number;

  @Output() close = new EventEmitter();


  onCloseVideogame(){
    this.close.emit();
  }

  get gameById (){
    return this.videogamesService.getVideogameById(this.videogameId);

  }






}
