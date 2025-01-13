import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { VideogamesService } from '../videogames.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-prenota',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './prenota.component.html',
  styleUrl: './prenota.component.css'
})
export class PrenotaComponent {
    @Input() videogameId !: number;
    @Output() close = new EventEmitter();

    videogamesService = inject(VideogamesService);

    prenotaForm = new FormGroup({
      nome: new FormControl('', {
        validators: [Validators.required]
      }),
      cognome: new FormControl('', {
        validators: [Validators.required]
      }),
      telefono: new FormControl('', {
        validators: [Validators.required]
      }),
      indirizzo: new FormControl('', {
        validators: [Validators.required]
      }),
    })
  
  
    onCloseVideogame(){
      this.close.emit();
    }

    get gameById (){
      return this.videogamesService.getVideogameById(this.videogameId);
  
    }

    onSubmit(){
      console.log('inviato');
      
    }

    
}
