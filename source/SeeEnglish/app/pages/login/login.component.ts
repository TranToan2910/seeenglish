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
    email: string;

    constructor() {
        this.email = '';
    }

    public submit(): void {
        console.log("log in button tapped");
        alert("You’re login as : " + this.email);
    }
}