import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from 'src/Model/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  getEvents():Observable<Evenement[]>{
    const url='http://localhost:3001/events';
    console.log('Fetching members from URL:', url);
        return this.http.get<Evenement[]>(url);

}
getEvent(id:string){
  const url=`${'http://localhost:3001/events/'}${id}`;
  console.log('Fetching events from URL:', id);
      return this.http.get<Evenement>(url);
}
addEvent(event:Evenement){
  const url='http://localhost:3001/events';

  return this.http.post<Evenement>(url,event)
}
updateEvent(id:string,value:{title:string , start_date: string,end_date:string, place: string}){
   const url=`${'http://localhost:3001/events/'}${id}`;
return this.http.put<Evenement>(url,value)
}

deleteEvent(id:string): Observable<void>{
  const url=`${'http://localhost:3001/events/'}${id}`;
  return this.http.delete<void>(url);
}
}
