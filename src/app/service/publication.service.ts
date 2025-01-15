import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Publication } from 'src/Model/Publication';
import { Database, ref, push, set, update, remove, get } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class PublicationService {

    private publicationsPath = 'publications';
  
    constructor(private db: Database) {}

    getPublications():Observable<Publication[]>{
      const dbRef = ref(this.db, this.publicationsPath);
      return  from(get(dbRef).then(snapshot => snapshot.val()));
   }
  
  
   getPublication(id: string) : Observable<Publication>{
      const dbRef = ref(this.db, `${this.publicationsPath}/${id}`);
      return from(get(dbRef).then(snapshot => snapshot.val()));
    }
  
    addPublication(pub:Publication): Observable<void>{
      const dbRef = ref(this.db, this.publicationsPath);
      const newPublicationRef = push(dbRef);
      return from(set(newPublicationRef, pub));
    }
 
    updatePublication(id:string, value:{type:string , title: string,lien:string, date: string,sourcepdf:string }): Observable<void> {
      const dbRef = ref(this.db, `${this.publicationsPath}/${id}`);
      return from(update(dbRef, value));
    }

    deletePublication(id: string): Observable<void> {
      const dbRef = ref(this.db, `${this.publicationsPath}/${id}`);
      return from(remove(dbRef));
    }
  
}