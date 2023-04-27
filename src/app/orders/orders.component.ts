import { Component, OnInit } from '@angular/core';
import { OrderService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  ngOnInit(): void {
    this.getProducts()
  }
  orders:any[];
constructor(private oserve:OrderService){
 
}
getProducts(): void {
  this.oserve.getAllOrders().subscribe(products => {
    this.orders=products as any[]
  });
}
}
