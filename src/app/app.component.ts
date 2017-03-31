import { Component, OnInit  } from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';

// Defines the same AppComponent as the one in the QuickStart playground.
//  It is the root component of what will become a tree of nested components as the application evolves.
@Component({
  // selector: CSS selector that tells Angular to create and insert an instance of this component where it finds a <hero-list> tag in parent HTML.
  // For example,
  // if an app's HTML contains <hero-list></hero-list>, then Angular inserts an instance of the HeroListComponent view between those tags.
  selector: 'my-app',
  providers:[HeroService],
  // module-relative address of this component's HTML template
  template: `<h1>{{title}}</h1>
              <ul class="heroes">
               <li *ngFor="let hero of heroes" (click)="onSelected(hero)" [class.selectedHero]="hero === selectedHero">
               <span class="badge">{{hero.id}}</span> {{hero.name}}
               </li>
              </ul>
              <hr/>
              <!-- Add a <hero-detail> element near the bottom of the AppComponent template, where the hero detail view used to be.
                  Coordinate the master AppComponent with the HeroDetailComponent by binding the selectedHero property of the AppComponent to the hero property of the HeroDetailComponent
                  Now every time the selectedHero changes, the HeroDetailComponent gets a new hero to display.-->
              <hero-detail [hero]="selectedHero"><hero-detail>
            `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color:white;
    }

    .heroes {
      margin: 0 0 2em 0;
    }

    .heroes li {
      cursor:pointer;
      position:relative;
      left:0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }

    .heroes li.selcted:hover {
      background-color: #BBD8DC !important;
      color: white;
    }

    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }

    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    `],
  // providers: array of dependency injection providers for services that the component requires.
  // This is one way to tell Angular that the component's constructor requires a HeroService so it can get the list of heroes to display.
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  title = 'Tour of Heroes';
  heroes:Hero[];
  selectedHero: Hero;

  // hero: Hero = new Hero(1, 'wilkins');

  onSelected(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService:HeroService){
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

}
