import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSpinner, IonHeader, IonToolbar } from '@ionic/angular/standalone'; // Importaciones necesarias
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonToolbar, IonHeader, IonContent, IonSpinner, CommonModule, FormsModule]
})
export class SplashPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      // Aquí decides a dónde va después de la carga
      this.router.navigateByUrl('/home'); 
    }, 3000);
  }
}