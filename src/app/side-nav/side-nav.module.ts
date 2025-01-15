import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SideNavComponent } from './side-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EventsComponent } from '../events/events.component';
import { EventsListComponent } from '../events/events-list/events-list.component';
import { PublicationComponent } from '../Publications/publication/publication.component';
import { PublicationListComponent } from '../Publications/publication/publication-list/publication-list.component';
import { CreateEditEventComponent } from '../events/create-edit-event/create-edit-event.component';
import { DeleteEventDialogComponent } from '../events/create-edit-event/delete-event-dialog/delete-event-dialog.component';
import { CreateEditPublicationComponent } from '../Publications/publication/create-edit-publication/create-edit-publication.component';
import { DeletePublicationDialogComponent } from '../Publications/publication/create-edit-publication/delete-publication-dialog/delete-publication-dialog.component';
import { ToolsComponent } from '../tools/tools.component';
import { FlexLayoutModule } from "@angular/flex-layout";


const routes: Routes = [
  {
    path: '', component: SideNavComponent, children: [
      { path: '', component: DashboardComponent }, 
      { path: 'members', loadChildren: () => import('../members/members.module').then(m => m.MembersModule) },
      { path: 'events', component: EventsComponent, children: [
        { path: '', component: EventsListComponent } 
      ]},
      { path: 'publications', component: PublicationComponent, children: [
        { path: '', component: PublicationListComponent } 
      ]}
    ]
  }
];


@NgModule({
  declarations: [
    SideNavComponent, 
    HeaderComponent,
    ToolsComponent,
    PublicationComponent, 
    PublicationListComponent,
    CreateEditPublicationComponent,
    DeletePublicationDialogComponent,
    EventsComponent, 
    EventsListComponent,
    CreateEditEventComponent,
    DeleteEventDialogComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],

})
export class SideNavModule { }
