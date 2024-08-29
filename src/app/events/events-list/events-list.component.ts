import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventService } from 'src/app/service/event.service';
import { DeleteEventDialogComponent } from '../create-edit-event/delete-event-dialog/delete-event-dialog.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Evenement } from 'src/Model/Event';
import { Member } from 'src/Model/Member';
import { MemberService } from 'src/app/service/member.service';
import { CreateEditEventComponent } from '../create-edit-event/create-edit-event.component';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
  datasource!:Evenement[];
  members:Member[]=[];
  displayedColumns: string[] = ['id', 'title', 'date', 'place','action',];
  datasourcefilter= new MatTableDataSource(this.datasource);
  constructor(public dialog: MatDialog , private eventservice:EventService, private memberservice: MemberService, private router:Router) {}

  ngOnInit()
  {
     this.eventservice.getEvents().subscribe((a)=>{
      console.log(a)
      this.datasource = a;
      this.datasourcefilter= new MatTableDataSource(this.datasource);
      for( const e in this.datasource){
        this.memberservice.getMember(this.datasource[e].id_member).subscribe((m)=>{
      console.log(this.datasource[e])
      Object.assign(this.datasource[e], {member_name: m.name})
      })}
    });

  }


  deleteEvent(id:string): void {
    console.log(id)
    this.eventservice.deleteEvent(id).subscribe(()=>{
      console.log("event deleted")});
      this.eventservice.getEvents().subscribe((a)=>{
        this.datasourcefilter.data = a;
        location.reload();

      });      
  }

  opencreate_editDialog(id:string |null): void {
    const dialogRef = this.dialog.open(CreateEditEventComponent, {
      width: '500px',
      data: {  event_id: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if(id){
          this.eventservice.updateEvent(id,result).subscribe(()=>{console.log("event update");
            location.reload();
          })
        }
        else{
          this.eventservice.addEvent(result).subscribe(()=>{console.log("event added")})
        }
      } else {
        console.log('Error occured');
      }
    });
  }

  openDeleteDialog(id:string): void {
    const dialogRef = this.dialog.open(DeleteEventDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this event?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Execute delete action
        this.deleteEvent(id)
        console.log("Event %s deleted",id);
      } else {
        console.log('Delete action canceled');
      }
    });
  }

  applyFilter(event: Event ) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasourcefilter.filter = filterValue.trim().toLowerCase();
  }


  
}
