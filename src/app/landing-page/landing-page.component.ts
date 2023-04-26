import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  url:String='https://github.com/Jp8125/inv_sys'
  constructor(private rt:Router){}
redirect()
{
  this.rt.navigate(['/sign-in'])
}
}
