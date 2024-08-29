import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { MemberService } from 'src/app/service/member.service';
import { Evenement } from 'src/Model/Event';
import { Member } from 'src/Model/Member';

@Component({
  selector: 'app-create-edit-event',
  templateUrl: './create-edit-event.component.html',
  styleUrls: ['./create-edit-event.component.css']
})
export class CreateEditEventComponent {

  eventForm! : FormGroup;
  editMode=false;
  id!: number;
  event!:Evenement;
  members: Member[]=[]

  constructor(private dialogRef: MatDialogRef<CreateEditEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { event_id: string },private eventservice: EventService, private router :Router, private route: ActivatedRoute, private memberservice:MemberService){

  }
  ngOnInit(): void {
     
     this.initForm();
     this.memberservice.getMembers().subscribe((a)=>{
      this.members=a;
     })
  }

  private initForm(){
    this.eventForm= new FormGroup({
      title: new FormControl('', Validators.required),
      start_date: new FormControl('', Validators.required),
      end_date: new FormControl('', Validators.required),
      place: new FormControl('', Validators.required),
      id_member:new FormControl('', Validators.required)
    })
    console.log(this.data.event_id)
    if(this.data.event_id){
      // console.log("editmode worked")
      this.eventservice.getEvent(this.data.event_id).subscribe((a)=>{
        this.eventForm= new FormGroup({
          title: new FormControl(a.title, Validators.required),
          start_date: new FormControl(a.start_date, Validators.required),
          end_date: new FormControl(a.end_date, Validators.required),
          place: new FormControl(a.place, Validators.required),
          id_member:new FormControl(a.id_member, Validators.required)
        })})} 
  } 

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(this.eventForm.value);
  }

}
