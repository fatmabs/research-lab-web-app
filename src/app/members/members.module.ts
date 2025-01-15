import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ModifymemberComponent } from './modifymember/modifymember.component';
import { DeleteMemberDialogComponent } from './modifymember/delete-member-dialog/delete-member-dialog.component';
import { MemberslistComponent } from './memberslist/memberslist.component';
import { MemberdetailComponent } from './memberdetail/memberdetail.component';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members.component';

const routes : Routes=[
        { path:'', component:MemberslistComponent},
        { path:'new', component: ModifymemberComponent},
        { path:'edit/:id', component: ModifymemberComponent}
]


@NgModule({
  declarations: [ 
    MembersComponent,
    DeleteMemberDialogComponent ,
    MemberslistComponent,
    MemberdetailComponent,
    ModifymemberComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule,
  ]
})
export class MembersModule { }
