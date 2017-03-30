import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';// <-- NgModel lives here

import { AppComponent }  from './app.component';


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
                  FormsModule // <-- import the FormsModule before binding with [(ngModel) ],
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
