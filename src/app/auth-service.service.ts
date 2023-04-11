import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'https://fakestoreapi.com/auth';

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, {username, password }).pipe(
      tap((response: any) => localStorage.setItem('access_token', response.access_token))
    );
  }
  logout(): void {
    localStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
