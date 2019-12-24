import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { config } from '../config';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    public loginActive: boolean;

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('token'));
        this.currentUser = this.currentUserSubject.asObservable();
        this.loginActive = false;
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(data) {

        return this.http.post(config.apiUrl + '/api/auth/signin', data);
    }

    register(data) {

        return this.http.post(config.apiUrl + '/api/auth/signup', data);
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.loginActive = false;
        this.currentUserSubject.next(null);
        this.router.navigate(['/']);
    }
}
