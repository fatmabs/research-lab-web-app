import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberService } from '../service/member.service';
import { Member } from 'src/Model/Member';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  constructor( 
    private http: HttpClient,
    private memberService: MemberService) { }
  
    storeMembers() {
      const members = this.memberService.getMembers();
      this.http
        .put(
          'https://laboratoire-de-recherche-829c0-default-rtdb.europe-west1.firebasedatabase.app/members.json',
          members
        )
        .subscribe((response) => console.log(response));
    }

    fetchMembers() {
      return this.http.get<Member[]>(
          'https://laboratoire-de-recherche-829c0-default-rtdb.europe-west1.firebasedatabase.app/members.json'
        )
        .pipe(
          map((members: Member[]) => {
            console.log(members)
            return members
          }),
          tap((members)=> {
          // this.memberService.setMembers(members);
        }))
    }

}
