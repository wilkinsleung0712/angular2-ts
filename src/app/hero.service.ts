import { Injectable } from '@angular/core'; // must declear to be able to inject into component
import {Hero} from './hero';
//import Http module
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
// Injectable services
// Notice that you imported the Angular Injectable function and applied that function as an @Injectable() decorator.
// Don't forget the parentheses. Omitting them leads to an error that's difficult to diagnose.
// The @Injectable() decorator tells TypeScript to emit metadata about the service.
// The metadata specifies that Angular may need to inject other dependencies into this service.
// Although the HeroService doesn't have any dependencies at the moment,
// applying the @Injectable() decorator ​from the start ensures consistency and future-proofing.
@Injectable() //calling injectable by annotation to active inject
export class HeroService {

  private heroesUrl = 'api/heroes'; //URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http){}


  getHeroes(): Promise<Hero[]> {
    //an obserable obj need to become promise obj
    // return this.http.get(this.heroesUrl).toPromise().then(response => response.json().data as Hero[]);
    // this:observable<response> 这个是指caller是要为observable<response> 类型
    // 然后用把这个类型强制转化成 <response>
    // 最后方法返回promise<response>
    //In the Promise's then() callback, you call the json method of the HTTP Response to extract the data within the response.
    // The response JSON has a single data property, which holds the array of heroes that the caller wants.
    // So you grab that array and return it as the resolved Promise value.
    return this.http.get(this.heroesUrl).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);;
  };

  handleError(error: any):Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  };

  getHero(id:number):Promise<Hero>{
    //把从getHeroes()得到的result叫heroes 然后通过 => 放进方法里面 条用 heroes.find 方法找到id一样的object
    // return this.getHeroes().then(
    //   heroes => heroes.find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url).toPromise().then(response=>response.json().data as Hero).catch(this.handleError);
  }

  saveHero(hero:Hero):Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url,JSON.stringify(hero),this.headers).toPromise().then(
              ()=>hero
            ).catch(
              this.handleError
            );
  }

  createHero(heroName:string):Promise<Hero>{
    return this.http.post(this.heroesUrl,
                          JSON.stringify({name: heroName}),
                          JSON.stringify({headers: this.headers}))
                        .toPromise()
                        .then(res =>res.json().data as Hero)
                        .catch(this.handleError);
  }

  deleteHero(hero: Hero):Promise<null> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.delete(url,
                            this.headers)
                    .toPromise()
                    .then(()=>null)
                    .catch(this.handleError);
  }
}
