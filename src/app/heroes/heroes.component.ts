import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-interface';
import { HeroService } from '../hero-service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-heroes',
  imports: [RouterModule],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor( private heroService: HeroService ) { 
    
  }



 public Heroes: Hero[] = [];
  ngOnInit() {
  this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}