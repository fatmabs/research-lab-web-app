import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ModifymemberComponent } from './modifymember/modifymember.component';
import { MemberService } from '../service/member.service';
import { Member } from 'src/Model/Member';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit{
  
  datasource!:Member[];
  subscription!: Subscription;

      displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv', 'created_date','action'];

      constructor(public dialog: MatDialog , private memberService:MemberService) {
        // console.log("constructor")
      }

      ngOnInit()//se lance automatiquement qlq secondes aprés le constructeur
      {
         this.memberService.getMembers().subscribe((a)=>{
          console.log(a)
          this.datasource = a;
        });

      }


      deleteMember(id:number): void {
        console.log(id)
        this.memberService.deleteMember(id).subscribe(()=>{
          console.log("supprimé")});
          this.memberService.getMembers().subscribe((a)=>{
            console.log(a)
            this.datasource = a;
          });      }

}
