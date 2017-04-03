//This is an angular component class
//1.import component from angular
import {Component, Input,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import { Location } from '@angular/common';


import {Hero} from './hero'; //import our model for Hero
import {HeroService} from './hero.service'

// Import the switchMap operator to use later with the route parameters Observable.
import 'rxjs/add/operator/switchMap'
@Component({
  selector: 'hero-detail',
  templateUrl:'./hero-detail.component.html',
  styleUrls:['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //All it does is receive a hero object through its hero input
  // property and then bind to that property with its template.
  @Input() hero: Hero;

  constructor(
    private heroService:HeroService,
    private route:ActivatedRoute,
    private location:Location
  ){}

 ngOnInit():void {
  //  Inside the ngOnInit lifecycle hook, use the params Observable to extract the
  //   id parameter value from the ActivatedRoute service and use the HeroService
  //   to fetch the hero with that id


//   *The switchMap operator maps the id in the Observable route parameters to a new Observable,
//   the result of the HeroService.getHero() method.
//
//   *If a user re-navigates to this component while a getHero request is still processing,
//   switchMap cancels the old request and then calls HeroService.getHero() again.
//
//   *The hero id is a number. Route parameters are always strings. So the route
//   parameter value is converted to a number with the JavaScript (+) operator.
  this.route.params
              .switchMap((params:Params) => this.heroService.getHero(+params['id']))
              .subscribe(hero => this.hero=hero);

 }

 goBack():void {
  //  To navigate somewhere else, users can click one of the two links in the AppComponent
  // or click the browser's back button. Now add a third option,
  //  a goBack() method that navigates backward one step in the browser's history
  //  stack using the Location service you injected previously.
   this.location.back();
 }

 save():void{
   this.heroService.saveHero(this.hero).then(()=>this.goBack());
 }
}
