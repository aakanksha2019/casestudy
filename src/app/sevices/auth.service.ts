import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,
              private router: Router) {

   }
  login(username: string, password: string) {
    return this.http.post<any>(`http://localhost:8090/authenticate/login`, { username, password })
         .pipe(map(data => {
            // login successful if there's a jwt token in the response
            //if (data && data.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('username', JSON.stringify(data.user));
                localStorage.setItem('token',data.token);
                // console.log(window.sessionStorage.getItem('token'));
            //}

             return data;
       }));
}
register(user: User) {
  return this.http.post<User[]>(`http://localhost:8090/authenticate/register`, user);
}
logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.router.navigate(['/navg']);
}
}

