import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

    constructor(private auth: Auth, private router: Router) {}
  
  logout() {
    signOut(this.auth).then(() => {
      console.log('Logged out');
      this.router.navigate(['/login']);  // Navigate to login page
    }).catch(error => {
      console.error('Logout error:', error);
    });
  }
}
