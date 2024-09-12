
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { MemberService } from 'src/app/service/member.service';
import { PublicationService } from 'src/app/service/publication.service';
import { Member } from 'src/Model/Member';
import { Publication } from 'src/Model/Publication';

@Component({
  selector: 'app-create-edit-publication',
  templateUrl: './create-edit-publication.component.html',
  styleUrls: ['./create-edit-publication.component.css']
})
export class CreateEditPublicationComponent {


  publicationForm! : FormGroup;
  editMode=false;
  id!: number;
  publication!:Publication;
  members: Member[]=[]

  constructor(private dialogRef: MatDialogRef<CreateEditPublicationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { publication_id: string },private publicationService: PublicationService, private router :Router, private route: ActivatedRoute, private memberservice:MemberService){

  }
  ngOnInit(): void {
     
     this.initForm();
     this.memberservice.getMembers().subscribe((a)=>{
      this.members=a;
     })
  }

  private initForm(){
    this.publicationForm= new FormGroup({
      // id: number;
      // type:string;
      // title:string;
      // lien:string;
      // date:Date;
      // sourcepdf:string;
      // member:Member;
      type: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      lien: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      sourcepdf: new FormControl('', Validators.required),
      member:new FormControl('', Validators.required)
    })
    console.log(this.data.publication_id)
    if(this.data.publication_id){
      // console.log("editmode worked")
      this.publicationService.getPublication(this.data.publication_id).subscribe((a)=>{
        this.publicationForm= new FormGroup({
          type: new FormControl(a.type, Validators.required),
          title: new FormControl(a.title, Validators.required),
          lien: new FormControl(a.lien, Validators.required),
          date: new FormControl(a.date, Validators.required),
          sourcepdf: new FormControl(a.sourcepdf, Validators.required),
          member:new FormControl(a.member, Validators.required)

        })})} 
  } 

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(this.publicationForm.value);
  
  }

}
