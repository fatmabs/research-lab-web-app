import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  constructor( private router : Router ,public afAuth: AngularFireAuth,){}
  logout() {
    this.afAuth.signOut().then(() => {
      console.log('Logged out');
      this.router.navigate(['/login'])

    });
  }
}
