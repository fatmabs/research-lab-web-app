import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MembersComponent } from './members/members.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ModifymemberComponent } from './members/modifymember/modifymember.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MemberdetailComponent } from './members/memberdetail/memberdetail.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { DeleteMemberDialogComponent } from './members/modifymember/delete-member-dialog/delete-member-dialog.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatRadioModule} from '@angular/material/radio';
import { EventsComponent } from './events/events.component';
import { ToolsComponent } from './tools/tools.component';
import { MemberslistComponent } from './members/memberslist/memberslist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { CreateEditEventComponent } from './events/create-edit-event/create-edit-event.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { DeleteEventDialogComponent } from './events/create-edit-event/delete-event-dialog/delete-event-dialog.component';
import { MatSortModule} from '@angular/material/sort';
import { NgFor } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PublicationComponent } from './Publications/publication/publication.component';
import { PublicationListComponent } from './Publications/publication/publication-list/publication-list.component';
import { CreateEditPublicationComponent } from './Publications/publication/create-edit-publication/create-edit-publication.component';
import { DeletePublicationDialogComponent } from './Publications/publication/create-edit-publication/delete-publication-dialog/delete-publication-dialog.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCrNBFjZAcdyD3_gTCED9-1_WCwXe7RLN0",
    authDomain: "researchlabo-authentification.firebaseapp.com",
    projectId: "researchlabo-authentification",
    storageBucket: "researchlabo-authentification.appspot.com",
    messagingSenderId: "425442055815",
    appId: "1:425442055815:web:fd0e01b1ec54f04b0f4a22",
    measurementId: "G-WBXZ3VLJJ5"
};


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    HeaderComponent,
    ModifymemberComponent,
    MemberdetailComponent,
    SideNavComponent,
    DeleteMemberDialogComponent,
    LoginPageComponent,
    EventsComponent,
    ToolsComponent,
    MemberslistComponent,
    DashboardComponent,
    EventsListComponent,
    CreateEditEventComponent,
    DeleteEventDialogComponent,
    PublicationComponent,
    PublicationListComponent,
    CreateEditPublicationComponent,
    DeletePublicationDialogComponent,
  
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireAuthModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,

    FlexLayoutModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    NgFor,
    MatPaginatorModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
