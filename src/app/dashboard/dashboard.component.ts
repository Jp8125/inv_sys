import { Component } from '@angular/core';
import { ObjectParserService } from '../object-parser.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dDash:any
  val:number=0
  constructor(private pass:ObjectParserService){}
  get(){
    this.dDash=this.pass.getObj()
    alert(this.dDash)
    this.val=1
  }
}
