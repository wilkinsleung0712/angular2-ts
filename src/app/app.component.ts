import { Component } from '@angular/core';

// Defines the same AppComponent as the one in the QuickStart playground.
//  It is the root component of what will become a tree of nested components as the application evolves.
@Component({
  // selector: CSS selector that tells Angular to create and insert an instance of this component where it finds a <hero-list> tag in parent HTML.
  // For example,
  // if an app's HTML contains <hero-list></hero-list>, then Angular inserts an instance of the HeroListComponent view between those tags.
  selector: 'my-app',
  // module-relative address of this component's HTML template
  template: `<h1>{{title}}</h1>
              <ul class="heroes">
               <li *ngFor="let hero of heros" (click)="onSelected(hero)" [class.selectedHero]="hero === selectedHero">
               <span class="badge">{{hero.id}}</span> {{hero.name}}
               </li>
              </ul>
              <hr/>
              <div *ngIf="selectedHero">
                <h2>{{selectedHero.name}} details!</h2>
                <div><label>id: </label>{{selectedHero.id}}</div>
                <div>
                  <label>name: </label>
                  <input [(ngModel)]="selectedHero.name" placeholder="name"/>
                </div>
              </div>
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
export class AppComponent {
    name = 'Angular';

  title = 'Tour of Heroes';
  heros = HEROS;
  selectedHero:Hero;

  hero: Hero = new Hero(1, 'wilkins');

  onSelected(hero:Hero):void {
    this.selectedHero = hero;
  }
}

const HEROS: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


export class Hero {

  constructor(public id: number, public name: string) {
    this.id = id;
    this.name = name;
  }


}
