import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- 1. Importa esto
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonList, IonItem, IonLabel 
} from '@ionic/angular/standalone'; // <-- 2. Asegúrate de importar los componentes de Ionic

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
  standalone: true, // <-- 3. Asegúrate de que diga true
  imports: [
    CommonModule, // <-- 4. Agrega CommonModule aquí para que funcione el *ngIf
    FormsModule, 
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonList, IonItem, IonLabel
  ]
})
export class SportsPage {
  selectedSport: string = '';

  selectSport(sport: string) {
    this.selectedSport = sport;
  }
}