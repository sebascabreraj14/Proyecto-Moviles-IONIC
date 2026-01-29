import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Vital para que el *ngFor funcione
import { FormsModule } from '@angular/forms'; // Vital para el [(ngModel)]

@Component({
  selector: 'app-reprise',
  templateUrl: './reprise.page.html',
  styleUrls: ['./reprise.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] // Asegúrate de que estos tres estén aquí
})
export class ReprisePage {
  // 1. Variable para el input de YouTube
  linkPersonalizado: string = '';

  // 2. Variable que pide tu HTML (seccionesDeportivas)
  seccionesDeportivas = [
    { 
      titulo: 'Ecuavolley', 
      subtitulo: 'Partidos en vivo y repeticiones',
      img: 'https://img.youtube.com/vi/60pU7vI006w/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=nf6VjdVBTpc',
      clase: 'ecuavolley-card'
    },
    { 
      titulo: 'Padel', 
      subtitulo: 'Lo mejor del World Padel Tour',
      img: 'https://img.youtube.com/vi/L087O_O-eY8/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=LSQK-HGuxC4',
      clase: 'padel-card'
    },
    { 
      titulo: 'Fútbol', 
      subtitulo: 'Resúmenes de la LigaPro',
      img: 'https://img.youtube.com/vi/8O70B7Y9iE0/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=jY3hsi034oA',
      clase: 'futbol-card'
    }
  ];

  constructor() {}

  // 3. Función que pide tu HTML (navegarAVideo)
  navegarAVideo(url: string) {
    if (url) {
      window.open(url, '_system');
    }
  }
}