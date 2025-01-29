import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { Hero } from '../hero-interface';
import { HeroService } from '../hero-service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, HeroesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  [x: string]: any;

  public heroes: Hero[] = []

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes().slice(0, 5);
  }

}
