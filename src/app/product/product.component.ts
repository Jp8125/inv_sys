import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import * as $ from 'jquery';
import {Modal} from 'bootstrap'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  newProduct: any = {};
  selectedProduct: any = {};

  constructor(private productService: ProductService) {}

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
    const modalEl = document.getElementById('editProductModal');
    setTimeout(() => {
      const modal = new Modal(modalEl);
      modal.show();
    }, 0);
 
  }

  updateProduct(): void {
    this.productService.updateProduct(this.selectedProduct).subscribe(() => {
      const index = this.products.findIndex(p => p.id === this.selectedProduct.id);
      this.products[index] = { ...this.selectedProduct };
      this.selectedProduct = {};
      
    });
  }

  deleteProduct(product: any): void {
    if (confirm(`Are you sure you want to delete ${product.title}?`)) {
      this.productService.deleteProduct(product).subscribe(() => {
        const index = this.products.findIndex(p => p.id === product.id);
        this.products.splice(index, 1);
      });
    }
  }
}
