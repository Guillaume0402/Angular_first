import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { Monster } from './models/monster.model';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  monster1!: Monster;
  count: number = 0;
  search = '';

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = 'Pikachu';
    this.monster1.hp = 40;
    this.monster1.figurecaption = 'N°002 Pikachu';
    this.monster1.attackName = 'Thunderbolt';
    this.monster1.attackStrength = 30;
    this.monster1.attackDescription = 'A powerful electric attack';
  }
  increaseCount() {
    this.count++;
  }
}
