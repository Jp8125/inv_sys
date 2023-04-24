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
  cost:number=0
  total:number=0
  constructor(private pass:ObjectParserService,private productService:ProductService){}
  get(){
    this.dDash=this.pass.getObj()
    console.log(this.dDash)
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
      this.total+=val.quantity;
      this.revenue+=(val.price*val.quantity)
    }
   this.cost=this.revenue-this.revenue*0.20
  }
}
