import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ModifymemberComponent } from './members/modifymember/modifymember.component';
import { MembersComponent } from './members/members.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EventsComponent } from './events/events.component';
import { MemberslistComponent } from './members/memberslist/memberslist.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PublicationComponent } from './Publications/publication/publication.component';
import { PublicationListComponent } from './Publications/publication/publication-list/publication-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component:AppComponent ,children:[
  { path:'login', component:LoginPageComponent},

  { path: '', component:SideNavComponent ,children:[
    { path:'', component:DashboardComponent},
    { path:'members', component:MembersComponent, children:[
      { path:'', component:MemberslistComponent},
      { path:'new', component: ModifymemberComponent},
      { path:'edit/:id', component: ModifymemberComponent},
    ]},
    { path:'events', component:EventsComponent, children:[
      { path:'', component:EventsListComponent}

    ]},
    { path:'publications', component:PublicationComponent, children:[
      { path:'', component:PublicationListComponent}

    ]}

  ] }]
    

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
