import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectParserService {
  Obj!:any;
  constructor() { }
  setObj(val){
    this.Obj=val;
    alert(this.Obj)
  }
  getObj()
  {
    return this.Obj;
  }
}
