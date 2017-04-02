import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';// <-- NgModel lives here

import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard-component';

import {HeroService} from './hero.service';

// import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';


// Defines AppModule, the root module that tells Angular how to assemble the application.
// Right now it declares only the AppComponent. Soon there will be more components to declare.
@NgModule({
// declarations - the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
//
// exports - the subset of declarations that should be visible and usable in the component templates of other modules.
//
// imports - other modules whose exported classes are needed by component templates declared in this module.
//
// providers - creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
//
// bootstrap - the main application view, called the root component, that hosts all other app views. Only the root module should set this bootstrap
  imports:      [ BrowserModule,
                  FormsModule ,// <-- import the FormsModule before binding with [(ngModel) ],
                  // RouterModule.forRoot([
                  //   {
                  //     // Add a redirect route When the app starts, it should show
                  //     // the dashboard and display a /dashboard URL in the browser
                  //     // address bar. Currently, the browser launches with / in the address bar.
                  //     path:'',
                  //     redirectTo:'/dashboard',
                  //     pathMatch:'full'
                  //   },{
                  //   // The forRoot() method is called because a configured router is provided at the app's root.
                  //   // The forRoot() method supplies the Router service providers and directives needed for routing,
                  //   // and performs the initial navigation based on the current browser URL.
                  //   //   Path: The router matches this route's path to the URL in the browser address bar (heroes).
                  //   // Component: The component that the router should create when navigating to this route (HeroesComponent).
                  //   path:'heroes',
                  //   component:HeroesComponent
                  // },{
                  //   path:'dashboard',
                  //   component:DashboardComponent
                  // },{
                  //   path:'detail/:id',
                  //   component:HeroDetailComponent
                  // }])
                  AppRoutingModule
                ],
  providers:[HeroService], //Add HeroService to the providers array of AppModule because you'll need it in every other view.
  declarations: [ AppComponent,HeroDetailComponent,HeroesComponent,DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
