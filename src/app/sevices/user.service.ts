import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    name: any;
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`http://localhost:8090/user/list`);
    }
    getById(id: number) {
        return this.http.get<User[]>(`http://localhost:8090/user/id` + id);
    }

    register(user: User) {
        return this.http.post<User[]>(`http://localhost:8090/user/add`, user);
    }

    update(user: User) {
        return this.http.put<User[]>(`http://localhost:8090/user/update/id` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete<User[]>(`http://localhost:8090/user/id` + id);
    }
    blocked(id:number){
        console.log("httpblocked");
        return this.http.get<User[]>(`http://localhost:8090/user/block/` + id);
    }
    unblocked(id:number){
        return this.http.get<User[]>(`http://localhost:8090/user/unblock/` + id);
    }
    public passdata(name)
    {
        this.name=name;
    }
}