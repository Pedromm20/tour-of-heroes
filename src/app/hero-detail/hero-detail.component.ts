import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-interface';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hero-detail',
  imports: [FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private route : ActivatedRoute
  ) {

  }
  public hero?: Hero = {
    id: 1,
    name: 'Spiderman'
  }

  ngOnInit(): void {
    // recoger id de la ruta y console.loguearlo
    const id = (this.route.snapshot.paramMap.get('id'));
    console.log('Hero ID con ruta:', id);

     // pasarselo a getherobyid
    if(id !== null) {
    this.hero = this.heroService.getHeroById(+id);
    } else {
      console.log('ID no válido');
    }

  }



}
