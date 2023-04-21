import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addProduct(product: any): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, product,{ responseType: 'text' as 'json' });
  }

  updateProduct(product: any): Observable<any> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<any>(url, product,{ responseType: 'text' as 'json' });
  }

  deleteProduct(product: any): Observable<any> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.delete<any>(url,{ responseType: 'text' as 'json' });
  }
}
