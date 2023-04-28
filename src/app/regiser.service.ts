import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegiserService {
   apiUrl='http://localhost:3000/register'
  constructor(private http: HttpClient) { }
  addUsers(users: any): Observable<any> {
    return this.http.post<any>(this.apiUrl,users);
  }
}
