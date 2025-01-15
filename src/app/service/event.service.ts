import { Injectable } from '@angular/core';
import { Observable ,from} from 'rxjs';
import { Evenement } from 'src/Model/Event';
import { Database, ref, push, set, update, remove, get } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EventService {

   private eventsPath = 'events';
    
      constructor(private db: Database) {}
  
      getEvents():Observable<Evenement[]>{
        const dbRef = ref(this.db, this.eventsPath);
        return  from(get(dbRef).then(snapshot => snapshot.val()));
     }
  
     getEvent(id: string) : Observable<Evenement>{
        const dbRef = ref(this.db, `${this.eventsPath}/${id}`);
        return from(get(dbRef).then(snapshot => snapshot.val()));
      }
    
      addEvent(event:Evenement): Observable<void>{
        const dbRef = ref(this.db, this.eventsPath);
        const newEventRef = push(dbRef);
        return from(set(newEventRef, event));
      }
   
      updateEvent(id:string, value:{type:string , title: string,lien:string, date: string,sourcepdf:string }): Observable<void> {
        const dbRef = ref(this.db, `${this.eventsPath}/${id}`);
        return from(update(dbRef, value));
      }
  
      deleteEvent(id: string): Observable<void> {
        const dbRef = ref(this.db, `${this.eventsPath}/${id}`);
        return from(remove(dbRef));
      }
}
