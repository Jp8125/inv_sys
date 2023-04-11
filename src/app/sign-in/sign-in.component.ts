import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
 username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }
  signIn(): void {
    this.authService.authenticate(this.username, this.password).subscribe(() => {
      this.router.navigate(['/dashboard']);
      $('#dash').removeClass('d-none')
      $('#prd').removeClass('d-none')
    });
  
  }
  redirect():void{
    this.router.navigate(['/register'])
  }
}
