import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

// pro ui module
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

// disable angular warning for native script UI element
import { NO_ERRORS_SCHEMA } from '@angular/core'

import {routes, navigatableComponents} from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule, // need to import this too, a bit different from angular maybe
    NativeScriptRouterModule.forRoot(routes),
    NativeScriptUISideDrawerModule
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
    // instead of directly declare login component 
    // use spread operator to import list of component for the routing
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {}
