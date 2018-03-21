import {LoginComponent} from './pages/login/login.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ToeicTestComponent} from './pages/toeic-test/toec-test.component';

export const routes = [
    {path: '', component: LoginComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'toeic-test', component: ToeicTestComponent }
];


export const navigatableComponents = [
    LoginComponent,
    ContactComponent,
    ToeicTestComponent
];