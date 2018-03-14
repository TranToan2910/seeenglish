import {LoginComponent} from './pages/login/login.component';
import {ContactComponent} from './pages/contact/contact.component';

export const routes = [
    {path: '', component: LoginComponent},
    { path: 'contact', component: ContactComponent }
];


export const navigatableComponents = [
    LoginComponent,
    ContactComponent
];