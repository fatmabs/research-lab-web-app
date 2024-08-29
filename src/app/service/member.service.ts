import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Member } from 'src/Model/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {


  constructor(private http:HttpClient) { }


  addMember(member:Member){
    const url='http://localhost:3001/members';
    console.log(member)
    return this.http.post<Member>(url,member);
  }

 getMember(id:string){
  const url=`${'http://localhost:3001/members/'}${id}`;
          return this.http.get<Member>(url);

  }
  getMembers():Observable<Member[]>{
      const url='http://localhost:3001/members';
      console.log('Fetching members from URL:', url);

          return this.http.get<Member[]>(url);
          

  }
  updateMember(id:string,value:{cin:number , name: string,type: string, cv:string, created_date:string}){
    const url=`${'http://localhost:3001/members/'}${id}`;
    return this.http.put<Member>(url,value);
  }

   


  deleteMember(id:number): Observable<void>{
    const url=`${'http://localhost:3001/members/'}${id}`;
    return this.http.delete<void>(url);
  }

}

