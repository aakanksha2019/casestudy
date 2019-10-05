import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Technology} from '../model/technology';
@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Technology[]>(`http://localhost:8090/technology/list`);
}
getById(id: number) {
    return this.http.get<Technology[]>(`http://localhost:8090/technology/id` + id);
}

register(technology:any) {
    
    return this.http.post(`http://localhost:8090/technology/addtech`, technology,{responseType:'text' as 'json'});
}

update(technology: Technology) {
    return this.http.put<Technology[]>(`http://localhost:8090/technology/updatetech/id` + technology.id, technology);
}

delete(id: number) {
    return this.http.delete(`http://localhost:8090/technology/removetech/` + id,{responseType:'text'});
}
}
