import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
    registerUser(user: User){
    }

    login(user: User): boolean{

        if(user.email === '' || user.email === undefined || user.email === null) {
            return false;
        } 

        return true;
    }
}