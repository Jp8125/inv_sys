import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegiserService {
   apiUrl='https://fakestoreapi.com/users'
  constructor(private http: HttpClient) { }
  addUsers(users: any): Observable<any> {
    return this.http.post<any>(this.apiUrl,users);
  }
}
