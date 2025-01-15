import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private auth: Auth, private router: Router) {}


  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then(result => {
        console.log('Logged in successfully:', result);
        this.router.navigate(['/members']);
      })
      .catch(error => {
        console.error('Login error:', error);
      });
  }

  // // Login with Google method
  // loginWithGoogle() {
  //   this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  //     .then(result => {
  //       console.log('Logged in successfully:', result);
  //       this.router.navigate(['/members'])
  //       // Do something with the result (redirect, store user info, etc.)
  //     })
  //     .catch(error => {
  //       console.error('Login error:', error);
  //     });
  // }

  // Optional: Logout method


}


  // form: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  // submit() {
  //   if (this.form.valid) {
  //     this.submitEM.emit(this.form.value);
  //   }
  // }
  // // @Input() error: string | null;

  // @Output() submitEM = new EventEmitter();