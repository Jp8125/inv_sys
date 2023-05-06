import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  url:String='https://github.com/Jp8125/inv_sys'
  constructor(private rt:Router,private authService: AuthService){}
redirect()
{
  this.rt.navigate(['/sign-in'])
}
get Status(){
  return this.authService.isLoggedIn()
}
}
