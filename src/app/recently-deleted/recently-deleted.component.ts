import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-recently-deleted',
  templateUrl: './recently-deleted.component.html',
  styleUrls: ['./recently-deleted.component.css']
})
export class RecentlyDeletedComponent  {  
  @Input() data:any
 
}