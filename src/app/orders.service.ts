import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllOrders() {
    return this.http.get(`${this.apiUrl}/orders`);
  }

  getOrderById(id: number) {
    return this.http.get(`${this.apiUrl}/orders/${id}`);
  }

  createOrder(customerName: string, customerEmail: string) {
    return this.http.post(`${this.apiUrl}/orders`, { customer_name: customerName, customer_email: customerEmail },{ responseType: 'text' as 'json' });
  }

  addItemToOrder(orderId: number, productId: number, quantity: number) {
    return this.http.post(`${this.apiUrl}/orders/${orderId}/items`, { product_id: productId, quantity: quantity });
  }
}
