import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  heroes:any[] = [];

  constructor(private HeroesService:HeroesService, 
    private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.HeroesService.getHeroes();
    console.log(this.heroes);
  }
   verHeroe(id:any){
    this.router.navigate(['/heroe', id])
   }
}
