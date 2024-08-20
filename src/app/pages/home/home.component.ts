import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  openingHours: string;
  location: string = '123 Rue de la Pizza, Ville';

  constructor() {
    const day = new Date().getDay();
    this.openingHours = this.getOpeningHours(day);
  }

  getOpeningHours(day: number): string {
    switch(day) {
      case 0: // Dimanche
        return 'Fermé';
      case 6: // Samedi
        return '10h - 22h';
      default: // Lundi à Vendredi
        return '11h - 21h';
    }
  }
}
