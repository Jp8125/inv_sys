import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectParserService {
  Obj!:any;
  constructor() { }
  setObj(val){
    this.Obj=val;
   console.log(this.Obj);
  }
  getObj()
  {
    return this.Obj;
  }
}
