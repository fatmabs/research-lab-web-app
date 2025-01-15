import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/Model/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {


  constructor(private http:HttpClient) { }
  private apiUrl='http://localhost:3001/members';


  addMember(member:Member){
    console.log(member)
    return this.http.post<Member>(this.apiUrl,member);
  }

 getMember(id:string){
          return this.http.get<Member>(`${this.apiUrl}/${id}`);

  }
  getMembers():Observable<Member[]>{
    // const headers = new HttpHeaders({
    //   'Authorization': 'Basic ' + btoa('admin:adminpass')  // Replace 'user' and 'password' with actual credentials
    // });

    return this.http.get<any[]>(this.apiUrl);
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

