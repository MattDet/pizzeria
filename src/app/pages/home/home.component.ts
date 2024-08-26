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
      case 0: 
        return 'Fermé';
      case 6: 
        return '18h - 21h';
      default: 
        return '18h - 22h30';
    }
  }
}
