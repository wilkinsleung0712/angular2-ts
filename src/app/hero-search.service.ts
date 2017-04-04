/**
 * Created by wilkins.liang on 04/04/2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";


import {Hero} from './hero';
//adding operator
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class HeroSearchService {

  constructor(
    private http:Http
  ) {}

  searchHero(term:string):Observable<Hero[]>{
    return this.http
              .get(`app/heroes/?name=${term}`)
              .map(
                // A Map object iterates its elements in insertion order — a for...of loop returns an array of [key,
                // value] for each iteration.
                  response => response.json().data as Hero[]
                );
  }

}
