import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import * as $ from 'jquery';
import { ObjectParserService } from '../object-parser.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  newProduct: any = {};
  selectedProduct: any = {};
  constructor(private productService: ProductService,private pass:ObjectParserService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addProduct(): void {
    this.productService.addProduct(this.newProduct).subscribe(product => {
      this.products.push(product);
      this.newProduct = {};
    });
  }
  editProduct(product: any): void {
    this.selectedProduct = { ...product };
   $('#update').removeClass('d-none')
   setTimeout(()=>{
    $('#update').addClass('d-none')
   },20000)
  }
  updateProduct(): void {
    this.productService.updateProduct(this.selectedProduct).subscribe(() => {
      const index = this.products.findIndex(p => p.id === this.selectedProduct.id);
      this.products[index] = { ...this.selectedProduct };
      this.selectedProduct = {};
      $('#update').addClass('d-none')
    });
  }
  deleteProduct(product: any): void {
    if (confirm(`Are you sure you want to delete ${product.name}?`)) {
      this.productService.deleteProduct(product.id).subscribe(() => {
        const index = this.products.findIndex(p => p.id === product.id);
       this.products.splice(index, 1);
      });
    }
    this.pass.setObj(product)
  }
}
