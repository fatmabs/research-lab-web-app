

// const firebaseConfig = {
//   apiKey: "AIzaSyCrNBFjZAcdyD3_gTCED9-1_WCwXe7RLN0",
//     authDomain: "researchlabo-authentification.firebaseapp.com",
//     projectId: "researchlabo-authentification",
//     storageBucket: "researchlabo-authentification.appspot.com",
//     messagingSenderId: "425442055815",
//     appId: "1:425442055815:web:fd0e01b1ec54f04b0f4a22",
//     measurementId: "G-WBXZ3VLJJ5"
// };

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from "./environmet";

import { AppRoutingModule } from "./app-routing.module";
import { LoginPageModule } from "./login-page/login-page.module";
import { MembersModule } from "./members/members.module";
import { SideNavModule } from "./side-nav/side-nav.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()), 
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginPageModule,
    MembersModule,
    SideNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
