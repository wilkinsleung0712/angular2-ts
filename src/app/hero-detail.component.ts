//This is an angular component class
//1.import component from angular
import {Component, Input} from '@angular/core'
import {Hero} from './hero'; //import our model for Hero
@Component({
  selector: 'hero-detail',
  template: `<div *ngIf = "hero">
                <h2>{{hero.name}} Detail</h2>
                <div><label>id:</label>{{hero.id}}</div>
                <div><label>name:</label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
                </div>
            </div>`
})
export class HeroDetailComponent {
  //All it does is receive a hero object through its hero input
  // property and then bind to that property with its template.
  @Input() hero: Hero;
}
