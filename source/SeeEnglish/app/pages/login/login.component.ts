import {
    Component, AfterViewChecked, AfterViewInit, OnInit, ViewChild, ContentChild, ViewContainerRef, ElementRef
} from '@angular/core';
import { User } from '../../shared/user/user';
import { UserService } from '../../shared//user/user.service';
import { Router } from '@angular/router';
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import * as Toast from "nativescript-toast";
import * as utils from "utils/utils";

@Component({
    selector: 'app-login',
    providers: [UserService],
    moduleId: module.id,
    templateUrl: './login.html',
    // templateUrl: 'pages/login/login.html',
    // templateUrl: './login.html', => not work, look like a bug => not bug
    styleUrls: ['./login-common.css', './login.css']
    // styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
    // styleUrls: ['./login-common.css'] => not work, look like a bug => not bug
    // explaination: default url is native to the 'app' folder
    // however when add moduleId: module.id, => it is used to resolve relative app to the current folder
})
export class LoginComponent implements OnInit, AfterViewInit{
    user: User;

    isLoading: boolean;

    @ViewChild('container') panel: ElementRef;

    // page is provide by native script
    constructor(private userservice: UserService, private router: Router, private page: Page) {
        this.user = new User();
        this.user.email = 'abc@xyz.com';
        this.isLoading = false;
    }

    public onTapLogin(): void {
        console.log('log in button tapped');
        if (!this.userservice.login(this.user)) {
            // alert('Please enter your loging information');
            Toast.makeText('Please enter your loging information').show();
        } else {
            this.isLoading = true;
            setTimeout(
                ()=> {
                    console.log('go to contact screen');
                    this.isLoading = false;
                    this.router.navigate(['./contact']);
                },
                1500);
        }
    }

    public onTapForgetPassword() {
        console.log('forget password');
        utils.openUrl("https://seeenglish.vn/?login=https%3A%2F%2Fseeenglish.vn&action=lost_password");
    }

    public onTapSignUp() {
        this.isLoading = true;
        setTimeout(
            ()=> {
                console.log('go to contact screen');
                this.isLoading = false;
                this.router.navigate(['./toeic-test']);
            },
            1500);
    }

    ngOnInit() {
        console.log('on Init');
        console.log(this.panel);
        this.page.actionBarHidden = true;
    }

    ngAfterViewInit() {
        console.log(this.panel);
    }
}