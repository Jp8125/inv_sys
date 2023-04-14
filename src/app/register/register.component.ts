import { Component } from '@angular/core';
import { RegiserService } from '../regiser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  newUser: any = {};
  users: any[] = [];
  constructor(private register: RegiserService, private router: Router) {}
  addUser(): void {
    this.register.addUsers(this.newUser).subscribe(usr => {
      this.users.push(usr);
      this.newUser = {};
      this.router.navigate(['/dashboard'])
    });
  }
}
