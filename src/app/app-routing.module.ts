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

const routes: Routes = [
  { path: '', component:SideNavComponent ,children:[
    { path:'login', component:LoginPageComponent},
    { path:'members', component:MembersComponent, children:[
      { path:'', component:MemberslistComponent},
      { path:'new', component: ModifymemberComponent},
      { path:'edit/:id', component: ModifymemberComponent},
    ]},
    { path:'events', component:EventsComponent, children:[
      { path:'', component:EventsListComponent}

    ]}

  ]
    

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
