import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models';


import {AlertService, AuthenticationService, UserService } from '../../services/index';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
        ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        var _user: any = {};
        _user.username = this.model.username;
        _user.password = this.model.password;
        this.userService.getAll().subscribe(users => {
            let us = this.checkExistence(users, _user);
            if(us){
                let clientWithType = Object.assign(new User(), us)
                localStorage.setItem('currentUser', JSON.stringify(clientWithType));
                this.router.navigate([this.returnUrl]);
            }
            else{
                this.alertService.error("Invalid credencials");
                this.loading = false;
            }
            
        });
    }

    checkExistence(users,user) {
        let result = users.filter(
            user_u => user_u.username === user.username && user_u.password === user.password);
        if(result){
            return result[0]
        }
        else
            return null
    }
}
