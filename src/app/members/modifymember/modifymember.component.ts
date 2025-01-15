import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/app/service/member.service';
import { Member } from 'src/Model/Member';

@Component({
  selector: 'app-modifymember',
  templateUrl: './modifymember.component.html',
  styleUrls: ['./modifymember.component.css']
})
export class ModifymemberComponent implements OnInit{

  memberForm! : FormGroup;
  editMode=false;
  id!: string;
  member!:Member;
  membertype:string[]=['Teacher','Student']
cancelform() {
  this.router.navigate(['../members'])
}

  constructor(private memberService: MemberService, private router :Router, private route: ActivatedRoute ){}
  ngOnInit(): void {
     this.id=this.route.snapshot.params['id'];
     this.editMode = this.route.snapshot.params['id'] != null;
     console.log("ngoninit editMode= ",this.editMode)
     this.initForm();
  }

  private initForm(){
    this.memberForm= new FormGroup({
      cin: new FormControl(null, Validators.required),
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      cv: new FormControl('', Validators.required),
      created_date: new FormControl('', Validators.required)
    })

    if(this.editMode){
      console.log("editmode worked")
      this.memberService.getMember(this.id).subscribe((a)=>{
        this.memberForm= new FormGroup({
          cin: new FormControl(a.cin, Validators.required),
          name: new FormControl(a.name, Validators.required),
          type: new FormControl(a.type, Validators.required),
          cv: new FormControl(a.cv, Validators.required),
          created_date: new FormControl(a.created_date, Validators.required)
        })})} 
  } 

  onSubmit(){
    if(this.editMode){
      const updatedValue={
        cin:this.memberForm.value.cin,
        name:this.memberForm.value.name,
        type:this.memberForm.value.type,
        cv:this.memberForm.value.cv,
        created_date:this.memberForm.value.created_date
      }
      this.memberService.updateMember(this.id,updatedValue).subscribe(()=>{this.router.navigate(['members'])})


    }else{
      console.log(this.memberForm.value)
      this.memberService.addMember(this.memberForm.value).subscribe(()=>{this.router.navigate(['members'])})

    }
  }

}
