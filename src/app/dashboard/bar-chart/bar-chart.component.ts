import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  products:any[]
  public chart: any;
  l1:Array<string>=[]
  quantity:Array<number>=[]
  price:Array<number>=[]
  ngOnInit(): void {
    this.getProducts();
    
  }
  constructor(private productservice:ProductService){

  }
  getProducts(): void {
    this.productservice.getProducts().subscribe(products => {
      this.products = products;
      console.log(this.products);
      this.getLable()
      this.createChart();
    });
  }
  
  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: [...this.l1], 
	       datasets: [
          {
            label: "price",
            data: [...this.price],
            backgroundColor: 'blue'
          },
          {
            label: "quantity",
            data: [...this.quantity],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  getLable(){
    for (const val of this.products) {
      this.l1.push(val.name as string)
      this.price.push(val.price)
      this.quantity.push(val.quantity)
    }
    
    
  }
}
