import {LoginComponent} from './pages/login/login.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ToeicTestComponent} from './pages/toeic-test/toec-test.component';
import {QuizComponent} from './pages/quiz/quiz.component';

export const routes = [
    {path: '', component: LoginComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'toeic-test', component: ToeicTestComponent }
];


export const navigatableComponents = [
    LoginComponent,
    ContactComponent,
    QuizComponent,
    ToeicTestComponent
    
];