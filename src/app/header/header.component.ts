import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router){}
  title = 'inv_sys';
  log_out(){
    this.authService.logout()
    this.router.navigate(['/sign-in']);

  }
}
