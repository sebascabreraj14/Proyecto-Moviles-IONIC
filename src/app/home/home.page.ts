import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // <--- 1. IMPORTAR ESTO

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    RouterModule // <--- 2. AGREGAR ESTO AQUÍ
  ],
})
export class HomePage {
  constructor() {}
}