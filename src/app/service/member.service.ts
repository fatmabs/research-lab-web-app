import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Member } from 'src/Model/Member';
import { Database, ref, push, set, update, remove, get } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private membersPath = 'members';

  constructor(private db: Database) {}


  getMembers() : Observable<Member[]>  {
    const dbRef = ref(this.db, this.membersPath);
    return  from(get(dbRef).then(snapshot => snapshot.val()));
  }
  //   getMembers():Observable<Member[]>{
//     // const headers = new HttpHeaders({
//     //   'Authorization': 'Basic ' + btoa('admin:adminpass')  // Replace 'user' and 'password' with actual credentials
//     // });

//     return this.http.get<any[]>(this.apiUrl);
//   }   



  getMember(id: string) : Observable<Member>{
    const dbRef = ref(this.db, `${this.membersPath}/${id}`);
    return from(get(dbRef).then(snapshot => snapshot.val()));
  }



  addMember(member: Member) : Observable<void>{
    const dbRef = ref(this.db, this.membersPath);
    const newMemberRef = push(dbRef);
    return from(set(newMemberRef, member));
  }
  //   addMember(member:Member){
//     console.log(member)
//     return this.http.post<Member>(this.apiUrl,member);
//   }


  updateMember(id: string, value:{cin:number , name: string,type: string, cv:string, created_date:string}): Observable<void> {
    const dbRef = ref(this.db, `${this.membersPath}/${id}`);
    return from(update(dbRef, value));
  }
  //   updateMember(id:string,value:{cin:number , name: string,type: string, cv:string, created_date:string}){
//     const url=`${this.apiUrl}/${id}`;
//     return this.http.put<Member>(url,value);
//   }


  deleteMember(id: number): Observable<void> {
    const dbRef = ref(this.db, `${this.membersPath}/${id}`);
    return from(remove(dbRef));
  }





  


//   constructor(private http:HttpClient, private db: Database) { }
//   private apiUrl='https://laboratoire-de-recherche-829c0-default-rtdb.europe-west1.firebasedatabase.app/members';


//   addMember(member:Member){
//     console.log(member)
//     return this.http.post<Member>(this.apiUrl,member);
//   }

//  getMember(id:string){
//           return this.http.get<Member>(`${this.apiUrl}/${id}`);

//   }
//   getMembers():Observable<Member[]>{
//     // const headers = new HttpHeaders({
//     //   'Authorization': 'Basic ' + btoa('admin:adminpass')  // Replace 'user' and 'password' with actual credentials
//     // });

//     return this.http.get<any[]>(this.apiUrl);
//   }          

  
//   updateMember(id:string,value:{cin:number , name: string,type: string, cv:string, created_date:string}){
//     const url=`${this.apiUrl}/${id}`;
//     return this.http.put<Member>(url,value);
//   }

   


//   deleteMember(id:number): Observable<void>{
//     const url=`${this.apiUrl}/${id}`;
//     return this.http.delete<void>(url);
//   }

}

