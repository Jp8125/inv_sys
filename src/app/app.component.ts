import { Component } from '@angular/core';
import { AuthService } from './auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router){}
  title = 'inv_sys';
  log_out(){
    this.authService.logout()
    this.router.navigate(['/sign-in']);
    $('#dash').addClass('d-none')
    $('#prd').addClass('d-none')
  }
}
