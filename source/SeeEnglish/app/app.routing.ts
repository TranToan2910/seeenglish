import {LoginComponent} from './pages/login/login.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ToeicTestComponent} from './pages/toeic-test/toec-test.component';
import {QuizComponent} from './pages/quiz/quiz.component';
import {InformationComponent} from './pages/information/information.component';
import {UserInformationComponent} from './pages/user-info/user-info.component';

export const routes = [
    {path: '', component: LoginComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'toeic-test', component: ToeicTestComponent },
    { path: 'info', component: InformationComponent },
    { path: 'user-info', component: UserInformationComponent }
];


export const navigatableComponents = [
    LoginComponent,
    ContactComponent,
    QuizComponent,
    ToeicTestComponent,
    InformationComponent,
    UserInformationComponent
];