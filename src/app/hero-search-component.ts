/**
 * Created by wilkins.liang on 04/04/2017.
 */
import {Component} from '@angular/core';
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import {HeroSearchService} from './hero-search.service';
import {Hero} from './hero';
import {OnInit} from "@angular/core";
import {Router} from "@angular/router";




@Component({
  selector:'hero-search',
  templateUrl:'./hero-search.component.html',
  styleUrls:['./hero-search.component.css'],
  providers:[HeroSearchService]
})
export class HeroSearchComponent implements OnInit{

  //create a Observable<Hero[]> obj to store our data
  heroes:Observable<Hero[]>;
  // A Subject is a producer of an observable event stream; searchTerms produces an Observable of strings,
  // the filter criteria for the name search.
  //
  // Each call to search() puts a new string into this subject's observable stream by calling next().
  // create an Observable obj of string
  private searchTerm = new Subject<string>();

  constructor(
    private heroSearchService:HeroSearchService,
    private router:Router
  ){}

  ngOnInit():void {
      //A Subject is also an Observable.
      // intend to bind the observable string to call service
    this.heroes = this.searchTerm.debounceTime(300)
    // wait 300ms after each keystroke before considering the term | waits until the flow of new string events pauses for 300 milliseconds before passing along the latest string.
                       .distinctUntilChanged()
     // ignore if next search term is same as previous | ensures that a request is sent only if the filter text changed.
                       .switchMap(
                         term=>term// switch to new observable each time the term changes
                           // return the http search observable
                           ?this.heroSearchService.searchHero(term)
                           // or the observable of empty heroes if there was no search term
                           :Observable.of<Hero[]>([]))
      .catch(error=>{
         // TODO: add real error handling
         console.log(error);
         return Observable.of<Hero[]>([]);
      });

  }

  searchHero(term:string):void {
    // so this will only send the term into the observable stream
    // Push a search term into the observable stream.
    this.searchTerm.next(term);
  }

  goToDetail(hero:Hero):void {
    this.router.navigateByUrl(`/detail/${hero.id}`);
  }
}
