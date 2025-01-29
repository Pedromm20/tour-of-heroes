import { Injectable } from '@angular/core';
import { Hero } from './hero-interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  private heroes: Hero[] = [
    { id: 1, name: 'Davil Evil' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'Spiderman' },
    { id: 4, name: 'Ironman' },
    { id: 5, name: 'Thor' },
    { id: 6, name: 'Hulk' },
    { id: 7, name: 'Wonderwoman' },
    { id: 8, name: 'Black Widow' },
    { id: 9, name: 'Captain America' },
    { id: 10, name: 'Flash' }
  ];

  public getHeroes(): Hero[] {
    return this.heroes;
  }

  public getHeroById(id: number): Hero | undefined {
    return this.getHeroes().find(hero => hero.id === id);
  }
  
  
}
