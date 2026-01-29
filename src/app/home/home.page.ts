import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Esto arregla el error del *ngIf
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonList, IonItem, IonLabel 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, // Necesario para directivas como *ngIf
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonList, 
    IonItem, 
    IonLabel
  ],
})
export class HomePage {
  // 1. Declaramos la variable que usas en el HTML
  selectedSport: string = '';

  constructor() {}

  // 2. Definimos la función que el HTML está intentando llamar
  selectSport(sport: string) {
    this.selectedSport = sport;
    console.log('Deporte seleccionado:', sport);
  }
}