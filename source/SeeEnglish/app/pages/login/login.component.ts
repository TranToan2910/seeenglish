import {
    Component
} from '@angular/core';


@Component({
    selector: 'app-login',
    templateUrl: 'pages/login/login.html',
    // templateUrl: './login.html', => not work, look like a bug
    styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
    // styleUrls: ['./login-common.css'] => not work, look like a bug
})
export class LoginComponent {

}

// @Component({
//     selector: 'app-login',
//     templateUrl: './login.html',
//     styleUrls: ['./login-common.css', './login.css']
// })
// export class LoginComponent {

// }