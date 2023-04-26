import { Component } from '@angular/core';
import { ObjectParserService } from 'src/app/object-parser.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddProductComponent {
  newProduct: any = {};
  products:Array<any>;
  message:string;
  constructor(private productService: ProductService,private pass:ObjectParserService){}
  addProduct(): void {
    this.productService.addProduct(this.newProduct).subscribe(product => {
      console.log(product)
      this.newProduct = {};
      this.message=product
    });
  }
}
