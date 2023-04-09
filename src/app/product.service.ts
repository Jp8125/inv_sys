import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  updateProduct(product: any): Observable<any> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<any>(url, product);
  }

  deleteProduct(product: any): Observable<any> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.delete<any>(url);
  }
}
