import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router, Routes } from '@angular/router';
import { MemberService } from 'src/app/service/member.service';
import { Member } from 'src/Model/Member';

@Component({
  selector: 'app-modifymember',
  templateUrl: './modifymember.component.html',
  styleUrls: ['./modifymember.component.css']
})
export class ModifymemberComponent {

  memberForm! : FormGroup;
  editMode=false;
  id!: number;
  member!:Member;
cancelform() {
  this.router.navigate([''])
}

  constructor(private memberService: MemberService, private router :Router, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];       
        console.log("ngOn init editMode= ",this.id)

        this.editMode = params['id'] != null;
        console.log("ngOn init editMode= ",this.editMode)
        this.initForm();
      }
    )
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
      this.memberService.updateMember(this.id,updatedValue).subscribe(()=>{this.router.navigate([''])})


    }else{
      this.memberService.addMember(this.memberForm.value).subscribe(()=>{this.router.navigate([''])})

    }
  }

}
