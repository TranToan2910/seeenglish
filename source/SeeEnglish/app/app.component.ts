import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <StackLayout>
    <Label text="hello world!"></Label>
    <app-login></app-login>
  </StackLayout>
  `
})
export class AppComponent {
}