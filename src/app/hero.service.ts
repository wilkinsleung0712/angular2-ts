import { Injectable } from '@angular/core'; // must declear to be able to inject into component
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
// Injectable services
// Notice that you imported the Angular Injectable function and applied that function as an @Injectable() decorator.
// Don't forget the parentheses. Omitting them leads to an error that's difficult to diagnose.
// The @Injectable() decorator tells TypeScript to emit metadata about the service.
// The metadata specifies that Angular may need to inject other dependencies into this service.
// Although the HeroService doesn't have any dependencies at the moment,
// applying the @Injectable() decorator ​from the start ensures consistency and future-proofing.
@Injectable() //calling injectable by annotation to active inject
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  };

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  };

  getHero(id:number):Promise<Hero>{
    //把从getHeroes()得到的result叫heroes 然后通过 => 放进方法里面 条用 heroes.find 方法找到id一样的object
    return this.getHeroes().then(
      heroes => heroes.find(hero => hero.id === id));
  }
}
