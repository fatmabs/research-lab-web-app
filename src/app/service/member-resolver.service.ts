import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberService } from './member.service';
import { Member } from 'src/Model/Member';
import { DatastorageService } from '../shared/datastorage.service';

@Injectable({
  providedIn: 'root'
})
export class MemberResolverService implements Resolve<Member[]>{
  members:Member[]=[];
  constructor(private memeberservice: MemberService, private datastorage:DatastorageService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    this.memeberservice.getMembers().subscribe((a)=>{
      this.members=a
    }); 
    if(this.members.length===0){
      return this.members
  }else{
      return this.members
  }
    
  }
}
