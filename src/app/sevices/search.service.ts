import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainings } from '../model/trainings';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private name:string;
  private start:string;
  private end:string;
  private urlname:string;
  constructor(private http: HttpClient) {
    this.urlname="http://localhost:8090/search";
   }
 public search():Observable<Trainings[]> {
    
    return this.http.get<Trainings[]>(this.urlname+"/"+this.name+"/"+this.start+"/"+this.end);
}
public passdata(name,start,end)
{
  this.name=name;
  this.start=start;
  console.log(start);
  this.end=end;
}
}
