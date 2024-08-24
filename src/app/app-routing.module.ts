import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ModifymemberComponent } from './members/modifymember/modifymember.component';
import { MembersComponent } from './members/members.component';
import { MemberResolverService } from './service/member-resolver.service';
import { MemberdetailComponent } from './members/memberdetail/memberdetail.component';

const routes: Routes = [
  { path: '', component:MembersComponent},
  { path:'new', component: ModifymemberComponent},
  { path:'edit/:id', component: ModifymemberComponent},
  //we will see if we need a resolver or not
  // { path:'edit/:id', component: ModifymemberComponent, resolve:[MemberResolverService]},

  { path:':id', component:MemberdetailComponent},
  { path: 'modifymember/:id',component:ModifymemberComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
