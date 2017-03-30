import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Compiles the application with the JIT compiler and bootstraps the application's
 // main module (AppModule) to run in the browser.
platformBrowserDynamic().bootstrapModule(AppModule);


// This code creates a browser platform for dynamic (JIT) 
//
// compilation and bootstraps the AppModule described above.
//
// The bootstrapping process sets up the execution environment,
// digs the root AppComponent out of the module's bootstrap array,
//  creates an instance of the component and inserts it within the element tag identified by the component's selector.
//  he AppComponent selector — here and in most documentation samples — is my-app so Angular looks for a <my-app> tag in the index.html like this one
