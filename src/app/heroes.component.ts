import { Component, OnInit  } from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';

import { Router } from '@angular/router';

// Defines the same AppComponent as the one in the QuickStart playground.
//  It is the root component of what will become a tree of nested components as the application evolves.
@Component({
  // selector: CSS selector that tells Angular to create and insert an instance of this component where it finds a <hero-list> tag in parent HTML.
  // For example,
  // if an app's HTML contains <hero-list></hero-list>, then Angular inserts an instance of the HeroListComponent view between those tags.
  selector: 'my-heroes',
  // module-relative address of this component's HTML template
  templateUrl:'./heroes.component.html',
            // <!-- Add a <hero-detail> element near the bottom of the AppComponent template, where the hero detail view used to be.
            //     Coordinate the master AppComponent with the HeroDetailComponent by binding the selectedHero property of the AppComponent to the hero property of the HeroDetailComponent
            //     Now every time the selectedHero changes, the HeroDetailComponent gets a new hero to display.-->
            // <hero-detail [hero]="selectedHero"><hero-detail>
  styleUrls:['./heroes.component.css'],
  // providers: array of dependency injection providers for services that the component requires.
  // This is one way to tell Angular that the component's constructor requires a HeroService so it can get the list of heroes to display.
})
export class HeroesComponent implements OnInit  {
  name = 'Angular';


  heroes:Hero[];
  selectedHero: Hero;

  // hero: Hero = new Hero(1, 'wilkins');

  onSelected(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService:HeroService, private router:Router){
    // You might be tempted to call the getHeroes() method in a constructor,
    // but a constructor should not contain complex logic, especially a constructor
    // that calls a server, such as as a data access method.
    // The constructor is for simple initializations,
    // like wiring constructor parameters to properties.
  };

  ngOnInit():void {
    this.getHeroes();//dont need to assign again in here! i,e, not to do this.heroes = getHeroes();
  }

  getHeroes():void{
    //An arrow function expression has a shorter syntax than a function expression
    //  and does not bind its own this, arguments, super, or new.target.
    // These function expressions are best suited for non-method functions, and they cannot be used as constructors.
    // should not have a return in here.
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesSlowly().then(heroes=>this.heroes=heroes);
  }

  gotoDetail():void {
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

  add(heroName:string):void {
    this.heroService.createHero(heroName).then(
      hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
}
