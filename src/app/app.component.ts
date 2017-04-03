import {Component} from '@angular/core'

@Component({
  //  The RouterOutlet is a directive from the router library that marks
  //   the spot in the template where the router should display the views for that outlet.
  //  The router adds the <router-outlet> element to the DOM and subsequently
  //  inserts the navigated view element immediately after the <router-outlet>.

  //   Note the routerLink binding in the anchor tag. The RouterLink directive
  //   (another of the RouterModule directives) is bound to a string that tells
  //   the router where to navigate when the user clicks the link.
  //
  // Since the link is not dynamic, a routing instruction is defined with a one-time
  //  binding to the route path. Looking back at the route configuration,
  //  you can confirm that '/heroes' is the path of the route to the HeroesComponent.
  selector: 'my-app',
  // The <nav> tags don't do anything yet, but they'll be useful later when you style the links.
  templateUrl:'./app.component.html' ,
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
