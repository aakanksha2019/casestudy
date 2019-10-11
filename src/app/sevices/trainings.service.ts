import { Injectable } from '@angular/core';
import { Trainings } from '../model/trainings';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor(private http: HttpClient) { }
  getById(id:number)
  {
    return this.http.get<Trainings[]>(`http://localhost:8090/trainings/id` + id);

  }
  current(id:number)
  {
    
    return this.http.get<Trainings[]>(`http://localhost:8090/trainings/current/` + id);

  }
  completed(id:number)
  {
    return this.http.get<Trainings[]>(`http://localhost:8090/trainings/completed/` + id);

  }
  getAll()
  {
    return this.http.get<Trainings[]>(`http://localhost:8090/trainings/list`);
  }
}
