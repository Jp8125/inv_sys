import { Component } from '@angular/core';
import { OrderService } from 'src/app/orders.service';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreateOrdersComponent {
  orders: any[];
  customerName: string;
  customerEmail: string;
  orderId: number;
  productId: number;
  quantity: number;
  
  constructor(private orderService: OrderService) {}
  
  ngOnInit() {
  this.orderService.getAllOrders().subscribe((orders) => {
  this.orders = orders as Array<any>;
  });
  }
  
  createOrder() {
  this.orderService
  .createOrder(this.customerName, this.customerEmail)
  .subscribe((res) => {
  console.log(res);
  });
  }
  
  addItemToOrder() {
  this.orderService
  .addItemToOrder(this.orderId, this.productId, this.quantity)
  .subscribe((res) => {
  console.log(res);
  });
  }
}
