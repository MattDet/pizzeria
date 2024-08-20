import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  menuItems = [
    { name: 'Margherita', description: 'Tomate, mozzarella, basilic', price: 8.5 },
    { name: 'Pepperoni', description: 'Tomate, mozzarella, pepperoni', price: 9.0 },
    // Ajoutez d'autres produits ici
  ];
}
