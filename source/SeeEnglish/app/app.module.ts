import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// disable angular warning for native script UI element
import { NO_ERRORS_SCHEMA } from '@angular/core'

import { AppComponent } from './app.component';
// import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [NativeScriptModule],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {}
