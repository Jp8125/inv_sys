import { Component, OnInit } from '@angular/core';
import { ObjectParserService } from '../object-parser.service';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit {
  ngOnInit(): void {
    this.getProducts();
    this.get()
  }
  dDash:any
  val:number=0
  products:any[]
  revenue:number=0
  constructor(private pass:ObjectParserService,private productService:ProductService){}
  get(){
    this.dDash=this.pass.getObj()
    this.val=1
  }
  getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.calc()

    });
  }

  calc(){
   
    for (const val of this.products) {
      this.revenue+=(val.price*val.quantity)
    }

  }
}
